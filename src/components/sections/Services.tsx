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
    <section id="services" className="py-28 md:py-36 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <FadeUp className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#F05A22]" />
            <span className="text-[#F05A22] text-xs font-semibold tracking-[0.3em] uppercase">
              {lang === "hi" ? "हम क्या करते हैं" : "What We Do"}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <h2
              className="text-5xl md:text-6xl font-black tracking-tight text-white"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}
            >
              {tx.svcH1}
              <br />
              <span className="text-gradient">{tx.svcH2}</span>
            </h2>
            <p className="text-white/30 text-sm max-w-[220px] leading-relaxed">{tx.svcSub}</p>
          </div>
        </FadeUp>

        {/* Cards */}
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
                style={{ background: "#0D1E38" }}
              >
                {/* Orange fill from bottom */}
                <div
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none"
                  style={{ background: "#F05A22", transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                />

                {/* Ghost number */}
                <span className="absolute -bottom-3 -right-1 font-black leading-none select-none pointer-events-none text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500" style={{ fontSize: "5.5rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 p-5 md:p-6 flex flex-col min-h-[200px]">
                  <div className="w-10 h-10 rounded-xl bg-white/06 group-hover:bg-white/15 transition-colors duration-300 flex items-center justify-center mb-5 flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#F05A22] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-white font-semibold text-sm md:text-base leading-snug mb-2 pr-2">
                    {service.title}
                  </h3>

                  <p className="text-white/30 group-hover:text-white/70 text-xs leading-relaxed mb-4 flex-1 transition-colors duration-300">
                    {service.short}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-white/20 group-hover:text-white/60 text-[11px] transition-colors duration-300">
                      From <span className="text-[#F05A22] group-hover:text-white font-bold text-sm transition-colors duration-300">{service.from}</span>
                    </span>
                    <a
                      href={serviceWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 bg-white/08 group-hover:bg-white text-white group-hover:text-[#F05A22] text-[11px] font-bold px-3 py-1.5 rounded-full transition-all duration-300"
                    >
                      <MessageCircle className="w-3 h-3" /> Ask
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <FadeUp delay={0.2} className="mt-14 text-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-[#F05A22]/60 text-white/40 hover:text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            {tx.svcCta}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
