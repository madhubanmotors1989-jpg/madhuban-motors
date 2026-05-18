"use client";
import { motion } from "motion/react";
import { Armchair, Speaker, Camera, Lightbulb, ShieldCheck, MapPin, Sparkles, Wrench, MessageCircle } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/ui/FadeUp";
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
            <p className="text-[#999] text-sm max-w-xs leading-relaxed">
              {tx.svcDesc}<br />
              <span className="text-[#BBB]">{tx.svcSub}</span>
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            const serviceWaLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(service.whatsappMsg)}`;

            return (
              <StaggerItem key={service.id}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 h-full",
                    "bg-white border-black/08 hover:border-[#E31837]/30 hover:shadow-lg hover:shadow-black/04",
                    service.featured && "md:col-span-2 lg:col-span-2"
                  )}
                >
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-[#E31837] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />

                  {service.featured && (
                    <span className="absolute top-4 right-4 text-[9px] font-bold tracking-widest uppercase text-[#E31837] border border-[#E31837]/25 px-2 py-0.5 rounded-full">
                      {lang === "hi" ? "सबसे लोकप्रिय" : "Popular"}
                    </span>
                  )}

                  <div className="w-10 h-10 rounded-xl bg-[#F7F7F7] border border-black/05 flex items-center justify-center mb-5 group-hover:bg-[#E31837]/08 group-hover:border-[#E31837]/15 transition-all flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 w-[18px] h-[18px] text-[#E31837]" />
                  </div>

                  <h3 className="text-[#0A0A0A] font-semibold text-base mb-2">{service.title}</h3>
                  <p className="text-[#999] text-xs leading-relaxed mb-5 flex-1 line-clamp-3">{service.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-black/05">
                    <span className="text-[#AAA] text-xs">
                      {lang === "hi" ? "शुरुआत " : "From "}
                      <span className="text-[#E31837] font-semibold">{service.from}</span>
                    </span>
                    <motion.a
                      href={serviceWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1 bg-[#E31837] hover:bg-[#FF3355] text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
                    >
                      <MessageCircle className="w-3 h-3" /> WhatsApp
                    </motion.a>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeUp delay={0.3} className="mt-10 text-center">
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 border border-black/10 hover:border-[#E31837]/30 text-[#555] hover:text-[#E31837] text-sm font-medium px-8 py-3.5 rounded-full transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            {tx.svcCta}
          </motion.a>
        </FadeUp>
      </div>
    </section>
  );
}
