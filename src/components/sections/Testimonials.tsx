"use client";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TESTIMONIALS, SITE } from "@/lib/constants";
import { FadeUp } from "@/components/ui/FadeUp";

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="flex-shrink-0 w-80 bg-white border border-black/08 rounded-3xl p-8 mx-3 shadow-sm">
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#E31837] text-[#E31837]" />
        ))}
      </div>
      <p className="text-[#555555] text-sm leading-relaxed mb-6">"{t.text}"</p>
      <div className="flex flex-col pt-4 border-t border-black/05">
        <span className="text-[#0A0A0A] font-semibold text-sm">{t.name}</span>
        <span className="text-[#AAAAAA] text-xs mt-0.5">{t.car} · {t.service}</span>
      </div>
    </div>
  );
}

export function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-32 md:py-44 overflow-hidden bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <FadeUp>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#E31837]" />
            <span className="text-[#E31837] text-sm font-medium tracking-[0.2em] uppercase">Customer Stories</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A0A0A]" style={{ fontFamily: "var(--font-syne)" }}>
              What Delhi NCR
              <br />
              <span className="text-gradient">Drivers Say</span>
            </h2>
            <a
              href={SITE.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#888888] hover:text-[#0A0A0A] transition-colors"
            >
              <Star className="w-4 h-4 fill-[#E31837] text-[#E31837]" />
              4.6 stars · 500+ Google Reviews →
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#F7F7F7] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#F7F7F7] to-transparent" />
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </motion.div>
      </div>

      {/* Marquee row 2 — reverse */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#F7F7F7] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#F7F7F7] to-transparent" />
        <motion.div
          className="flex"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        >
          {[...doubled].reverse().map((t, i) => <TestimonialCard key={i} t={t} />)}
        </motion.div>
      </div>
    </section>
  );
}
