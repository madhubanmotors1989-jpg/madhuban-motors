"use client";
import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  const color = dark ? "#0A1628" : "#FFFFFF";

  return (
    <Link href="/" className="flex flex-col leading-none select-none">
      {/* MADHUBAN — with trademarked mirrored B */}
      <div
        className="flex items-baseline font-black"
        style={{
          fontFamily: "var(--font-syne)",
          color,
          fontSize: "1.45rem",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          transition: "color 0.3s",
        }}
      >
        <span>MADHU</span>
        <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>B</span>
        <span>AN</span>
      </div>
      {/* MOTORS — same weight, tight below */}
      <div
        className="font-black"
        style={{
          fontFamily: "var(--font-syne)",
          color,
          fontSize: "1.45rem",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          transition: "color 0.3s",
        }}
      >
        MOTORS
      </div>
      {/* EST. 1989 */}
      <span
        className="font-semibold uppercase"
        style={{
          color: "#F05A22",
          fontSize: "0.5rem",
          letterSpacing: "0.5em",
          marginTop: "5px",
        }}
      >
        EST. 1989
      </span>
    </Link>
  );
}
