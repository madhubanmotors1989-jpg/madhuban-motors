"use client";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { SITE, STATS } from "@/lib/constants";
import { CountUp } from "@/components/ui/CountUp";
import { Particles } from "@/components/ui/Particles";
import { useLang, tr } from "@/lib/lang";

export function Hero() {
  const { lang } = useLang();
  const tx = tr[lang];
  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!%20I'd%20like%20a%20free%20consultation.`;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0A]">

      <Particles />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(227,24,55,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-40 md:pt-48 pb-28">
        <div className="max-w-5xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-10 h-px bg-[#E31837]" />
            <span className="text-[#E31837] text-xs font-semibold tracking-[0.25em] uppercase">
              {tx.eyebrow}
            </span>
          </motion.div>

          {/* Main headline — word by word reveal */}
          <div className="mb-3">
            <div className="overflow-hidden">
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {tx.h1.map((word, i) => (
                  <motion.span
                    key={`${lang}-h1-${i}`}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white inline-block"
                    style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em", lineHeight: 0.95 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden mt-1">
              {tx.h2.map((word, i) => (
                <motion.span
                  key={`${lang}-h2-${i}`}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold inline-block text-gradient"
                  style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em", lineHeight: 0.95 }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="text-white/35 text-base md:text-lg mb-2 mt-8"
          >
            {tx.sub}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="text-white/20 text-sm mb-4 flex items-center gap-2"
          >
            <MapPin className="w-3.5 h-3.5 text-[#E31837] flex-shrink-0" />
            {tx.address}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="text-white/40 text-sm md:text-base mb-14 italic"
          >
            {tx.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="flex flex-col sm:flex-row gap-4 mb-24"
          >
            <motion.a
              href="#book"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#E31837] hover:bg-[#FF3355] text-white font-bold text-sm px-10 py-5 rounded-full transition-all duration-200 glow-red"
            >
              {tx.cta1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href={`tel:${SITE.phone}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 border border-white/15 hover:border-white/30 text-white text-sm px-10 py-5 rounded-full transition-all duration-200"
            >
              <Phone className="w-4 h-4" /> {tx.cta2}
            </motion.a>
          </motion.div>

          {/* Urgency line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center gap-2 mb-12"
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-white/30 text-xs tracking-wide">{tx.urgency}</span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/06"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="flex flex-col gap-2"
              >
                <span className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-white/25 text-xs tracking-wide uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 bg-[#E31837] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
