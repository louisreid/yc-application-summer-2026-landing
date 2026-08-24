import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B0F14",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 26,
              height: 84,
              background: "#F7F8F5",
              borderRadius: 6,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 84,
              height: 26,
              background: "#F7F8F5",
              borderRadius: 6,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
