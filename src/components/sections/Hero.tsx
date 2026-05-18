"use client";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { SITE, STATS } from "@/lib/constants";
import { CountUp } from "@/components/ui/CountUp";
import { Particles } from "@/components/ui/Particles";
import { useLang, tr } from "@/lib/lang";

export function Hero() {
  const { lang } = useLang();
  const tx = tr[lang];
  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!%20I'd%20like%20a%20free%20consultation.`;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A1628]">
      <Particles />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 25% 65%, rgba(240,90,34,0.15) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-36 md:pt-44 pb-24">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-8 h-px bg-[#F05A22]" />
            <span className="text-[#F05A22] text-xs font-semibold tracking-[0.2em] uppercase">
              {tx.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-14">
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
              {tx.h1.map((word, i) => (
                <motion.span
                  key={`${lang}-h1-${i}`}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl md:text-8xl font-bold text-white inline-block"
                  style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            {tx.h2.map((word, i) => (
              <motion.span
                key={`${lang}-h2-${i}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-bold inline-block text-gradient"
                style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Sub line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/45 text-base md:text-lg mb-12 max-w-lg leading-relaxed"
          >
            {tx.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.a
              href="#book"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#F05A22] hover:bg-[#FF7040] text-white font-bold text-sm px-10 py-5 rounded-full transition-colors glow-orange"
            >
              {tx.cta1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href={`tel:${SITE.phone}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 border border-white/20 hover:border-white/40 text-white text-sm px-10 py-5 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" /> {tx.cta2}
            </motion.a>
          </motion.div>

          {/* Urgency */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-2 mb-20"
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-white/25 text-xs">{tx.urgency}</span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/08"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.08 }}
                className="flex flex-col gap-2"
              >
                <span className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-white/30 text-xs tracking-wide uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 bg-[#F05A22] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
