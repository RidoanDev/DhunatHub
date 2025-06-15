
import React from "react";

/**
 * DhunatHub logo text with Pornhub orange "Hub" style
 * Optional size/weight/extraClass can be passed.
 */
const PORNHUB_ORANGE = "#ff9900";

interface LogoTextProps {
  className?: string;
  sizeClass?: string;
  fontWeight?:
    | "font-extrabold"
    | "font-bold"
    | "font-semibold"
    | "font-medium"
    | "font-normal"
    | string;
  gapClass?: string;
}
const LogoText: React.FC<LogoTextProps> = ({
  className = "",
  sizeClass = "text-lg",
  fontWeight = "font-bold",
  gapClass = "gap-1",
}) => (
  <span
    className={`inline-flex items-center justify-center select-none ${gapClass} ${sizeClass} ${fontWeight} ${className}`}
  >
    <span>Dhunat</span>
    <span
      className="px-2 rounded"
      style={{
        background: PORNHUB_ORANGE,
        color: "#111",
        fontWeight: 800,
        letterSpacing: "0.5px",
        lineHeight: "1.5",
      }}
    >
      Hub
    </span>
  </span>
);

export default LogoText;
