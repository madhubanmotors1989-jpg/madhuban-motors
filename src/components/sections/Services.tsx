"use client";
import { motion } from "motion/react";
import { Armchair, Speaker, Camera, Lightbulb, ShieldCheck, MapPin, Sparkles, Wrench, MessageCircle } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { FadeUp } from "@/components/ui/FadeUp";
import { useLang, tr } from "@/lib/lang";
import { cn } from "@/lib/cn";

const iconMap: Record<string, React.ElementType> = {
  Armchair, Speaker, Camera, Lightbulb, ShieldCheck, MapPin, Sparkles, Wrench,
};

export function Services() {
  const { lang } = useLang();
  const tx = tr[lang];
  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!%20I'd%20like%20to%20know%20more%20about%20your%20services.`;

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <FadeUp className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#E31837]" />
            <span className="text-[#E31837] text-xs font-semibold tracking-[0.25em] uppercase">
              {lang === "hi" ? "हम क्या करते हैं" : "What We Do"}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A]" style={{ fontFamily: "var(--font-syne)" }}>
              {tx.svcH1}
              <br />
              <span className="text-gradient">{tx.svcH2}</span>
            </h2>
            <p className="text-[#AAA] text-sm">{tx.svcSub}</p>
          </div>
        </FadeUp>

        {/* Service grid — 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const serviceWaLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(service.whatsappMsg)}`;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className={cn(
                  "group relative flex flex-col p-5 md:p-6 rounded-2xl border transition-all duration-300",
                  "bg-white border-black/08 hover:border-[#E31837]/30 hover:shadow-lg hover:shadow-black/05",
                  service.featured && "lg:col-span-2"
                )}
              >
                {/* Top red line on hover */}
                <div className="absolute top-0 left-5 right-5 h-0.5 bg-[#E31837] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />

                {service.featured && (
                  <span className="absolute top-4 right-4 text-[9px] font-bold tracking-widest uppercase text-[#E31837] border border-[#E31837]/30 px-2 py-0.5 rounded-full">
                    {lang === "hi" ? "लोकप्रिय" : "Popular"}
                  </span>
                )}

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#F5F5F5] flex items-center justify-center mb-4 group-hover:bg-[#E31837]/08 transition-colors flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#E31837]" />
                </div>

                {/* Title */}
                <h3 className="text-[#0A0A0A] font-semibold text-sm md:text-base leading-tight mb-1.5 pr-8">
                  {service.title}
                </h3>

                {/* Short tagline — single line, muted */}
                <p className="text-[#AAA] text-xs leading-snug mb-4 flex-1">
                  {service.short}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#CCC]">
                    From <span className="text-[#E31837] font-semibold text-sm">{service.from}</span>
                  </span>
                  <a
                    href={serviceWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-[#E31837] hover:bg-[#FF3355] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full transition-colors"
                  >
                    <MessageCircle className="w-3 h-3" />
                    Ask
                  </a>
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
            className="inline-flex items-center gap-2 border border-black/10 hover:border-[#E31837]/40 text-[#555] hover:text-[#E31837] text-sm font-medium px-8 py-3.5 rounded-full transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            {tx.svcCta}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
