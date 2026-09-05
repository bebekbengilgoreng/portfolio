"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

type SpotlightStyle = CSSProperties & {
  "--spotlight-x": string;
  "--spotlight-y": string;
  "--spotlight-color": string;
};

/** A restrained adaptation of React Bits' Spotlight Card interaction. */
export function SpotlightCard({ children, className, spotlightColor = "rgba(14, 38, 71, 0.1)" }: { children: ReactNode; className?: string; spotlightColor?: string }) {
  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  }

  const style: SpotlightStyle = { "--spotlight-x": "50%", "--spotlight-y": "50%", "--spotlight-color": spotlightColor };

  return <article className={["spotlight-card", className].filter(Boolean).join(" ")} onMouseMove={handlePointerMove} style={style}>{children}</article>;
}
