"use client";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TESTIMONIALS, SITE } from "@/lib/constants";
import { FadeUp } from "@/components/ui/FadeUp";

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="flex-shrink-0 w-80 bg-[#111114] border border-white/[0.06] rounded-2xl p-6 mx-3">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
        ))}
      </div>
      <p className="text-[#9B9897] text-sm leading-relaxed mb-5">"{t.text}"</p>
      <div className="flex flex-col">
        <span className="text-white font-semibold text-sm">{t.name}</span>
        <span className="text-[#5A5856] text-xs mt-0.5">
          {t.car} · {t.service}
        </span>
      </div>
    </div>
  );
}

export function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
              Customer Stories
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
              What Delhi NCR
              <br />
              <span className="text-gradient">Drivers Say</span>
            </h2>
            <a
              href={SITE.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#9B9897] hover:text-white transition-colors"
            >
              <Star className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
              4.6 stars · 500+ Google Reviews →
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#0D0D0F] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#0D0D0F] to-transparent" />
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Marquee row 2 — reverse */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#0D0D0F] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#0D0D0F] to-transparent" />
        <motion.div
          className="flex"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...doubled].reverse().map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
