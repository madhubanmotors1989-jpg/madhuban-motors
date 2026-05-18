"use client";
import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { SITE, STATS } from "@/lib/constants";
import { CountUp } from "@/components/ui/CountUp";

export function Hero() {
  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!%20I'd%20like%20a%20free%20consultation.`;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#E31837 1px, transparent 1px), linear-gradient(90deg, #E31837 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Red glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(227,24,55,0.1) 0%, transparent 70%)" }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[8%] w-40 h-40 rounded-full opacity-15 blur-2xl"
        style={{ background: "radial-gradient(circle, #E31837, transparent)" }}
      />
      <motion.div
        animate={{ y: [12, -12, 12] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[6%] w-28 h-28 rounded-full opacity-10 blur-2xl"
        style={{ background: "radial-gradient(circle, #E31837, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-40 md:pt-44 pb-28">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-px bg-[#E31837]" />
            <span className="text-[#E31837] text-sm font-medium tracking-[0.2em] uppercase">
              Delhi NCR's Trusted Since 1989
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Your Car.{" "}
            <span className="block text-gradient">Reimagined.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/50 text-lg md:text-xl max-w-2xl mb-4 leading-relaxed"
          >
            Seat Covers · Car Audio · Cameras · LED Lighting · Security · Ceramic Coating
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/30 text-sm mb-14 flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#E31837]" />
            New Gandhi Nagar, Model Town, Ghaziabad · UP 201001
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-24"
          >
            <motion.a
              href="#book"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 bg-[#E31837] hover:bg-[#FF3355] text-white font-bold text-base px-10 py-5 rounded-full transition-all duration-200 glow-red"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white text-base px-10 py-5 rounded-full transition-all duration-200 hover:bg-white/5"
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/08"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
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
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 bg-[#E31837] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
