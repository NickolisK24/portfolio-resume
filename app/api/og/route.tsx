import { ImageResponse } from "next/og";

export const runtime = "edge";

const SIZE = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background: "#0a0e0a",
        color: "#d8e4d8",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        backgroundImage: "radial-gradient(ellipse at top, rgba(127,255,106,0.08), transparent 60%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontSize: 26,
          color: "#7a8a7a",
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 7,
            background: "#7fff6a",
          }}
        />
        <div style={{ display: "flex" }}>nikko@portfolio ~ $ cat about.md</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.08em",
            color: "#7a8a7a",
          }}
        >
          {"// self-taught · full-stack · us army veteran"}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "serif",
            fontSize: 96,
            lineHeight: 1.05,
            color: "#d8e4d8",
            letterSpacing: "-0.02em",
          }}
        >
          I build tools that solve
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "serif",
            fontSize: 96,
            lineHeight: 1.05,
            color: "#7fff6a",
            fontStyle: "italic",
            letterSpacing: "-0.02em",
          }}
        >
          real problems.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#4a5a4a",
        }}
      >
        <div style={{ display: "flex" }}>nikko / portfolio</div>
        <div style={{ display: "flex" }}>full-stack · data eng · baseball</div>
      </div>
    </div>,
    { ...SIZE },
  );
}
