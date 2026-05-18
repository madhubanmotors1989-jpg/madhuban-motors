"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { CountUp } from "@/components/ui/CountUp";

const milestones = [
  { year: "1989", event: "Founded on GT Road, Ghaziabad by Lala Shyam Sunder ji" },
  { year: "2000", event: "Expanded to full car audio & infotainment installations" },
  { year: "2010", event: "First shop in Delhi NCR to offer digital GPS tracking" },
  { year: "2018", event: "Introduced ceramic nano-coating for premium protection" },
  { year: "2024", event: "Serving 3 lakh+ cars across Delhi NCR" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#111114] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
                  Our Legacy
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                35 Years.
                <br />
                <span className="text-gradient">Three Generations.</span>
              </h2>
              <p className="text-[#9B9897] leading-relaxed mb-4">
                Since 1989, Madhuban Motors has been the go-to destination for car owners across Delhi NCR who refuse to settle for ordinary. What started as a small seat cover shop on GT Road has grown into a full-service car transformation centre.
              </p>
              <p className="text-[#9B9897] leading-relaxed mb-8">
                Three generations of the same family. The same obsession with quality. The same promise — your car leaves looking better than when it arrived.
              </p>
            </FadeUp>

            {/* Mini stats */}
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { value: 35, suffix: "+", label: "Years" },
                  { value: 3, suffix: "L+", label: "Cars" },
                  { value: 8, suffix: "", label: "Services" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <span className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                      <CountUp value={s.value} suffix={s.suffix} />
                    </span>
                    <span className="text-[#5A5856] text-xs uppercase tracking-wide">{s.label}</span>
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
                    className="flex gap-4 pb-6 last:pb-0 relative"
                  >
                    {/* Timeline line */}
                    {i < milestones.length - 1 && (
                      <div className="absolute left-[22px] top-7 bottom-0 w-px bg-white/06" />
                    )}
                    <div className="w-11 h-7 flex-shrink-0 flex items-center justify-center rounded-full border border-[#C9A84C]/30 bg-[#111114]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                    </div>
                    <div>
                      <span className="text-[#C9A84C] text-xs font-semibold tracking-wider">{m.year}</span>
                      <p className="text-[#9B9897] text-sm mt-0.5">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right: visual placeholder grid (to be replaced with real photos) */}
          <FadeUp delay={0.2} className="relative lg:pl-12">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "The Workshop", aspect: "aspect-[4/3]" },
                { label: "Installation Bay", aspect: "aspect-square" },
                { label: "Seat Cover Fitting", aspect: "aspect-square" },
                { label: "Ceramic Coating", aspect: "aspect-[4/3]" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className={`${item.aspect} rounded-2xl bg-[#18181C] border border-white/[0.06] flex items-end p-4 overflow-hidden relative group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[#5A5856] text-xs relative z-10">{item.label}</span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#222228] text-xs text-center">
                    📸 Add Photo
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Decorative gold accent */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent hidden lg:block" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
