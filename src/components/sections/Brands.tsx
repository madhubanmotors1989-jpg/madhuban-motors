"use client";
import { motion } from "motion/react";
import { BRANDS } from "@/lib/constants";
import { FadeUp } from "@/components/ui/FadeUp";

export function Brands() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="py-20 border-y border-black/06 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <FadeUp>
          <p className="text-[#AAAAAA] text-xs tracking-[0.25em] uppercase text-center">
            MyTVS Authorized Partner · Brands We Install
          </p>
        </FadeUp>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />
        <motion.div
          className="flex items-center gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((brand, i) => (
            <div key={i} className="flex-shrink-0 text-[#CCCCCC] font-semibold text-sm tracking-widest uppercase hover:text-[#E31837] transition-colors cursor-default">
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
