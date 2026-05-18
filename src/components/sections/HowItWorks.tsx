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
    <section id="process" className="py-28 md:py-36 bg-[#F05A22]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <FadeUp className="mb-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-white/70 text-xs font-semibold tracking-[0.3em] uppercase">The Process</span>
            <div className="w-8 h-px bg-white/40" />
          </div>
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight text-white"
            style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}
          >
            Simple. Transparent.
            <br />
            No Surprises.
          </h2>
        </FadeUp>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-9 left-[12.5%] right-[12.5%] h-px bg-white/25 origin-left hidden md:block"
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
                <div className="relative mb-10">
                  <div className="w-[72px] h-[72px] rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-[10px] font-black text-[#F05A22] bg-white rounded-full w-5 h-5 flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
