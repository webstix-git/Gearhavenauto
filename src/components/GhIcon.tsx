import type { CSSProperties } from "react";

type GhIconProps = {
  html: string;
  className?: string;
  style?: CSSProperties;
};

export function GhIcon({ html, className, style }: GhIconProps) {
  return (
    <span
      className={className}
      style={{ display: "inline-flex", lineHeight: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: html }}
      aria-hidden
    />
  );
}
