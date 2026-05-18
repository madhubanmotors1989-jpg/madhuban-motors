"use client";
import { motion } from "motion/react";
import { BRANDS } from "@/lib/constants";
import { FadeUp } from "@/components/ui/FadeUp";

export function Brands() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="py-16 border-y border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <FadeUp>
          <p className="text-[#5A5856] text-sm tracking-[0.2em] uppercase text-center">
            MyTVS Authorized Partner · Brands We Install
          </p>
        </FadeUp>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0D0D0F] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0D0D0F] to-transparent" />
        <motion.div
          className="flex items-center gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 text-[#5A5856] font-semibold text-sm tracking-widest uppercase hover:text-[#C9A84C] transition-colors"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
