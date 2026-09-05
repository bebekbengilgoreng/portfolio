import { ImageResponse } from "next/og";

export const alt = "Michiel Aelis Wijaya — medical student, researcher, and software engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", padding: "64px", background: "#f1f0eb", color: "#171814" }}>
      <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "space-between", borderTop: "2px solid #171814", borderBottom: "2px solid #171814", padding: "28px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: 2, textTransform: "uppercase" }}>
          <span>Medicine · Software · Research</span><span>Portfolio / 2026</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 102, lineHeight: .82, letterSpacing: -8 }}><span>Michiel Aelis</span><span>Wijaya</span></div>
          <div style={{ display: "flex", width: 320, borderLeft: "2px solid #0e2647", paddingLeft: 24, fontSize: 25, lineHeight: 1.3 }}>Medical student working across software engineering, research, and digital systems.</div>
        </div>
      </div>
    </div>,
    size,
  );
}
