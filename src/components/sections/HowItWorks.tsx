"use client";
import { motion, useInView } from "motion/react";
import { MessageCircle, ClipboardCheck, Wrench, Car } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/constants";
import { FadeUp } from "@/components/ui/FadeUp";
import { useRef } from "react";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, ClipboardCheck, Wrench, Car,
};

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#E31837]" />
            <span className="text-[#E31837] text-sm font-medium tracking-[0.2em] uppercase">The Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Simple. Transparent.
            <br />
            <span className="text-gradient">No Surprises.</span>
          </h2>
        </FadeUp>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#E31837]/20 via-[#E31837]/50 to-[#E31837]/20 origin-left hidden md:block"
          />

          {HOW_IT_WORKS.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-white/05 border border-white/10 hover:border-[#E31837]/40 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-7 h-7 text-[#E31837]" />
                  </motion.div>
                  <span className="absolute -top-2 -right-2 text-[10px] font-bold text-white bg-[#E31837] rounded-full w-5 h-5 flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
