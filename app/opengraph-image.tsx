import { ImageResponse } from "next/og";
import { HERO_HEADLINE, PRODUCT_NAME } from "@/lib/constants";

export const alt = "MCP Doctor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function MedicalPlus({ sizePx, fill }: { sizePx: number; fill: string }) {
  const thickness = Math.round(sizePx * 0.22);
  const length = Math.round(sizePx * 0.7);
  const radius = Math.max(2, Math.round(thickness * 0.22));
  return (
    <div
      style={{
        width: sizePx,
        height: sizePx,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: thickness,
          height: length,
          background: fill,
          borderRadius: radius,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: length,
          height: thickness,
          background: fill,
          borderRadius: radius,
        }}
      />
    </div>
  );
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0F14",
          color: "#F7F8F5",
          padding: "64px 72px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#0B0F14",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MedicalPlus sizePx={56} fill="#F7F8F5" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 36, fontWeight: 650 }}>{PRODUCT_NAME}</div>
            <div style={{ fontSize: 20, color: "#8B938C" }}>Open-source MCP readiness CLI</div>
          </div>
        </div>
        <div style={{ fontSize: 52, fontWeight: 600, lineHeight: 1.15, maxWidth: 980 }}>
          {HERO_HEADLINE}
        </div>
        <div
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 22,
            color: "#F7F8F5",
          }}
        >
          npx --package @coefficient-work/mcp-doctor@0.4.7 mcp-doctor inspect memory
        </div>
      </div>
    ),
    { ...size },
  );
}
