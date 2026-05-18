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
    <section id="process" className="py-24 md:py-32 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeUp className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
              The Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Simple. Transparent.
            <br />
            <span className="text-gradient">No Surprises.</span>
          </h2>
        </FadeUp>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#C9A84C]/20 via-[#C9A84C]/60 to-[#C9A84C]/20 origin-left hidden md:block"
          />

          {HOW_IT_WORKS.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-16 h-16 rounded-2xl bg-[#18181C] border border-[#C9A84C]/20 flex items-center justify-center"
                  >
                    <Icon className="w-7 h-7 text-[#C9A84C]" />
                  </motion.div>
                  <span
                    className="absolute -top-2 -right-2 text-[10px] font-bold text-[#C9A84C] bg-[#0D0D0F] border border-[#C9A84C]/30 rounded-full w-5 h-5 flex items-center justify-center"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-[#5A5856] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
