"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { CountUp } from "@/components/ui/CountUp";

const milestones = [
  { year: "1989", event: "Founded in Ghaziabad by Lala Shyam Sunder ji" },
  { year: "2000", event: "Expanded to full car audio & infotainment installations" },
  { year: "2010", event: "First shop in Delhi NCR to offer digital GPS tracking" },
  { year: "2018", event: "Introduced ceramic nano-coating for premium protection" },
  { year: "2024", event: "Serving 3 lakh+ cars across Delhi NCR" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-[#E31837]" />
                <span className="text-[#E31837] text-sm font-medium tracking-[0.2em] uppercase">Our Legacy</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A0A0A] mb-8" style={{ fontFamily: "var(--font-syne)" }}>
                35 Years.
                <br />
                <span className="text-gradient">Three Generations.</span>
              </h2>
              <p className="text-[#555555] leading-relaxed mb-5 text-base">
                Since 1989, Madhuban Motors has been the go-to destination for car owners across Delhi NCR who refuse to settle for ordinary. What started as a small seat cover shop has grown into a full-service car transformation centre.
              </p>
              <p className="text-[#888888] leading-relaxed mb-12 text-base">
                Three generations of the same family. The same obsession with quality. The same promise — your car leaves looking better than when it arrived.
              </p>
            </FadeUp>

            {/* Mini stats */}
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-3 gap-8 mb-14 pb-14 border-b border-black/08">
                {[
                  { value: 35, suffix: "+", label: "Years" },
                  { value: 3, suffix: "L+", label: "Cars Served" },
                  { value: 500, suffix: "+", label: "Reviews" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col gap-2">
                    <span className="text-4xl font-bold text-[#0A0A0A]" style={{ fontFamily: "var(--font-syne)" }}>
                      <CountUp value={s.value} suffix={s.suffix} />
                    </span>
                    <span className="text-[#888888] text-xs uppercase tracking-wide">{s.label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Timeline */}
            <FadeUp delay={0.3}>
              <div ref={ref} className="flex flex-col gap-0">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex gap-5 pb-7 last:pb-0 relative"
                  >
                    {i < milestones.length - 1 && (
                      <div className="absolute left-[22px] top-7 bottom-0 w-px bg-black/06" />
                    )}
                    <div className="w-11 h-7 flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#E31837]" />
                    </div>
                    <div>
                      <span className="text-[#E31837] text-xs font-bold tracking-wider">{m.year}</span>
                      <p className="text-[#555555] text-sm mt-0.5">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right: photo grid */}
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "The Workshop", aspect: "aspect-[4/3]", accent: true },
                { label: "Installation Bay", aspect: "aspect-square", accent: false },
                { label: "Seat Cover Fitting", aspect: "aspect-square", accent: false },
                { label: "Ceramic Coating", aspect: "aspect-[4/3]", accent: true },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.25 }}
                  className={`${item.aspect} rounded-2xl overflow-hidden relative group`}
                  style={{ background: item.accent ? "linear-gradient(135deg, #1a0408 0%, #0f0f0f 100%)" : "#111111" }}
                >
                  {/* Red corner accent */}
                  <div className="absolute top-0 left-0 w-12 h-0.5 bg-[#E31837]" />
                  <div className="absolute top-0 left-0 w-0.5 h-12 bg-[#E31837]" />
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-white/70 text-xs font-medium tracking-wide uppercase">{item.label}</span>
                  </div>
                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: "linear-gradient(rgba(227,24,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(227,24,55,0.5) 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                  }} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white/30 text-xs">Photo coming soon</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
