"use client";
import Link from "next/link";

interface LogoProps {
  dark?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ dark = false, size = "md" }: LogoProps) {
  const textColor = dark ? "#0A0A0A" : "#FFFFFF";
  const sizes = { sm: "text-lg", md: "text-xl", lg: "text-3xl" };

  return (
    <Link href="/" className="flex flex-col leading-none select-none">
      <div
        className={`${sizes[size]} font-bold tracking-tight flex items-center`}
        style={{ fontFamily: "var(--font-syne)", color: textColor, letterSpacing: "-0.02em" }}
      >
        <span>MADHU</span>
        <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>B</span>
        <span>AN</span>
      </div>
      <div
        className="text-[9px] tracking-[0.35em] uppercase mt-0.5"
        style={{ color: "#E31837" }}
      >
        Motors · Est. 1989
      </div>
    </Link>
  );
}
