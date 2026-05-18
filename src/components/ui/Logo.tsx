"use client";
import Link from "next/link";

interface LogoProps {
  dark?: boolean;
}

export function Logo({ dark = false }: LogoProps) {
  const nameColor = dark ? "#0A0A0A" : "#FFFFFF";

  return (
    <Link href="/" className="flex flex-col leading-none select-none group">
      <div
        className="flex items-baseline font-bold"
        style={{
          fontFamily: "var(--font-syne)",
          color: nameColor,
          letterSpacing: "-0.03em",
          fontSize: "1.85rem",
          lineHeight: 1,
          transition: "color 0.3s",
        }}
      >
        <span>MADHU</span>
        <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>B</span>
        <span>AN</span>
      </div>
      <span
        className="font-bold tracking-[0.4em] uppercase"
        style={{
          fontSize: "0.62rem",
          letterSpacing: "0.45em",
          color: "#E31837",
          marginTop: "4px",
        }}
      >
        MOTORS · EST. 1989
      </span>
    </Link>
  );
}
