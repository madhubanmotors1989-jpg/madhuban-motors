"use client";
import { motion } from "motion/react";
import { Armchair, Speaker, Camera, Lightbulb, ShieldCheck, MapPin, Sparkles, Wrench, MessageCircle } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { FadeUp } from "@/components/ui/FadeUp";
import { useLang, tr } from "@/lib/lang";

const iconMap: Record<string, React.ElementType> = {
  Armchair, Speaker, Camera, Lightbulb, ShieldCheck, MapPin, Sparkles, Wrench,
};

export function Services() {
  const { lang } = useLang();
  const tx = tr[lang];
  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!%20I'd%20like%20to%20know%20more%20about%20your%20services.`;

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <FadeUp className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#E31837]" />
            <span className="text-[#E31837] text-xs font-semibold tracking-[0.25em] uppercase">
              {lang === "hi" ? "हम क्या करते हैं" : "What We Do"}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
              {tx.svcH1}
              <br />
              <span className="text-gradient">{tx.svcH2}</span>
            </h2>
            <p className="text-white/30 text-sm">{tx.svcSub}</p>
          </div>
        </FadeUp>

        {/* 2-col mobile / 4-col desktop grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const serviceWaLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(service.whatsappMsg)}`;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl overflow-hidden border border-white/06 hover:border-transparent transition-all duration-300 cursor-default"
                style={{ background: "#0D0D0D" }}
              >
                {/* Red fill — slides up from bottom on hover */}
                <div
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none"
                  style={{
                    background: "#E31837",
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                  }}
                />

                {/* Ghost number in background */}
                <span
                  className="absolute -bottom-3 -right-2 font-black leading-none select-none pointer-events-none text-white/[0.03] group-hover:text-white/[0.07] transition-colors duration-500"
                  style={{ fontSize: "6rem" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Card content */}
                <div className="relative z-10 p-5 md:p-6 flex flex-col h-full min-h-[200px]">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white/06 group-hover:bg-white/15 transition-colors duration-300 flex items-center justify-center mb-4 flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#E31837] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-sm md:text-base leading-tight mb-1.5 pr-2">
                    {service.title}
                  </h3>

                  {/* Short tagline */}
                  <p className="text-white/30 group-hover:text-white/70 text-xs leading-relaxed mb-4 flex-1 transition-colors duration-300">
                    {service.short}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-white/20 group-hover:text-white/60 text-[11px] transition-colors duration-300">
                      From{" "}
                      <span className="text-[#E31837] group-hover:text-white font-bold text-sm transition-colors duration-300">
                        {service.from}
                      </span>
                    </span>
                    <a
                      href={serviceWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 bg-white/08 group-hover:bg-white text-white group-hover:text-[#E31837] text-[11px] font-bold px-3 py-1.5 rounded-full transition-all duration-300"
                    >
                      <MessageCircle className="w-3 h-3" />
                      Ask
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.2} className="mt-10 text-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-[#E31837]/50 text-white/50 hover:text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            {tx.svcCta}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
