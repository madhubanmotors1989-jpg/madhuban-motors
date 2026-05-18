"use client";
import { motion } from "motion/react";
import { FadeUp } from "@/components/ui/FadeUp";

const generations = [
  {
    num: "01",
    name: "Shri Jagdish Chandra Paruthi",
    role: "Founder",
    years: "1989",
    story:
      "Started Madhuban Motors from a small shop in New Gandhi Nagar, Ghaziabad. Built the foundation on one principle — honest service, genuine products, every single time.",
  },
  {
    num: "02",
    name: "Vivek Paruthi",
    aka: "Bittu Bhaiya",
    role: "Second Generation",
    years: "2000 – Present",
    story:
      "Expanded from seat covers to a full-service car customisation centre. The name every Ghaziabad driver knows. A face that means trust, quality, and zero compromise.",
  },
  {
    num: "03",
    name: "???",
    role: "Third Generation",
    years: "Watch this space",
    story: "The next chapter is already being written. Some things are better kept a mystery. 👀",
    quirky: true,
  },
];

const photos = [
  { label: "Shri Jagdish Chandra Paruthi Ji", sub: "Founder · 1989", tall: true },
  { label: "Bittu Bhaiya", sub: "Vivek Paruthi · Second Generation", tall: false },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — text */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-[#E31837]" />
                <span className="text-[#E31837] text-xs font-semibold tracking-[0.3em] uppercase">Our Legacy</span>
              </div>
              <h2
                className="text-5xl md:text-6xl font-black tracking-tight text-[#0A0A0A] mb-6"
                style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
              >
                Three Generations.
                <br />
                <span className="text-gradient">One Standard.</span>
              </h2>
              <p className="text-[#888] text-base leading-relaxed mb-14">
                35 years in Ghaziabad. 3 lakh+ cars served. The same family, the same obsession — your car leaves better than it arrived.
              </p>
            </FadeUp>

            {/* Generation cards */}
            <div className="flex flex-col gap-4">
              {generations.map((gen, i) => (
                <motion.div
                  key={gen.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`rounded-2xl p-6 border transition-all ${
                    gen.quirky
                      ? "border-dashed border-black/15 bg-[#F9F9F9]"
                      : "border-black/08 bg-white hover:border-[#E31837]/20 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="font-black text-3xl leading-none flex-shrink-0"
                      style={{
                        fontFamily: "var(--font-syne)",
                        color: gen.quirky ? "#CCCCCC" : "#E31837",
                        opacity: gen.quirky ? 0.4 : 1,
                      }}
                    >
                      {gen.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className={`font-bold text-base ${gen.quirky ? "text-[#AAAAAA]" : "text-[#0A0A0A]"}`}>
                          {gen.name}
                          {(gen as any).aka && (
                            <span className="ml-2 text-[#E31837] font-normal text-sm">· {(gen as any).aka}</span>
                          )}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-semibold tracking-wide uppercase ${gen.quirky ? "text-[#CCCCCC]" : "text-[#E31837]"}`}>
                          {gen.role}
                        </span>
                        <span className="text-black/15">·</span>
                        <span className="text-[#AAAAAA] text-xs">{gen.years}</span>
                      </div>
                      <p className={`text-sm leading-relaxed ${gen.quirky ? "text-[#BBBBBB] italic" : "text-[#666]"}`}>
                        {gen.story}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — founder photos */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col gap-4 h-full">
              {/* Main photo — Jagdish Chandra Ji */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden flex-1 min-h-[260px]"
                style={{ background: "linear-gradient(145deg, #1a0408 0%, #0f0f0f 100%)" }}
              >
                <div className="absolute top-0 left-0 w-16 h-0.5 bg-[#E31837]" />
                <div className="absolute top-0 left-0 w-0.5 h-16 bg-[#E31837]" />
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: "linear-gradient(rgba(227,24,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(227,24,55,1) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }} />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-semibold text-sm">{photos[0].label}</p>
                  <p className="text-[#E31837] text-xs mt-0.5">{photos[0].sub}</p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 text-xs text-center">
                  Photo coming soon
                </div>
              </motion.div>

              {/* Bittu Bhaiya */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden min-h-[200px]"
                style={{ background: "#111111" }}
              >
                <div className="absolute top-0 right-0 w-16 h-0.5 bg-[#E31837]" />
                <div className="absolute top-0 right-0 w-0.5 h-16 bg-[#E31837]" />
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: "linear-gradient(rgba(227,24,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(227,24,55,1) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }} />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-semibold text-sm">{photos[1].label}</p>
                  <p className="text-[#E31837] text-xs mt-0.5">{photos[1].sub}</p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 text-xs text-center">
                  Photo coming soon
                </div>
              </motion.div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
