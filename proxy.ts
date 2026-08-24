import { NextRequest, NextResponse } from "next/server";

const STAGING_HOST = "staging.coefficient.work";

function unauthorized(): NextResponse {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="MCP Doctor staging"',
      "Cache-Control": "no-store",
    },
  });
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

function shouldGate(host: string): boolean {
  return host === STAGING_HOST || host.endsWith(".vercel.app");
}

export function proxy(req: NextRequest) {
  const host = (req.headers.get("host") || "").split(":")[0].toLowerCase();
  if (!shouldGate(host)) return NextResponse.next();

  const expectedUser = process.env.STAGING_USER || "coefficient";
  const expectedPass = process.env.STAGING_PASSWORD;
  if (!expectedPass) {
    return new NextResponse("Staging password is not configured", {
      status: 500,
      headers: { "Cache-Control": "no-store" },
    });
  }

  const header = req.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return unauthorized();

  let decoded = "";
  try {
    decoded = atob(header.slice(6).trim());
  } catch {
    return unauthorized();
  }

  const colon = decoded.indexOf(":");
  const user = colon === -1 ? decoded : decoded.slice(0, colon);
  const pass = colon === -1 ? "" : decoded.slice(colon + 1);
  if (!safeEqual(user, expectedUser) || !safeEqual(pass, expectedPass)) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
