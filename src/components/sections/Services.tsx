"use client";
import { motion } from "motion/react";
import { Armchair, Speaker, Camera, Lightbulb, ShieldCheck, MapPin, Sparkles, Wrench, ArrowUpRight } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/ui/FadeUp";
import { cn } from "@/lib/cn";

const iconMap: Record<string, React.ElementType> = {
  Armchair, Speaker, Camera, Lightbulb, ShieldCheck, MapPin, Sparkles, Wrench,
};

export function Services() {
  return (
    <section id="services" className="py-32 md:py-44 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#E31837]" />
            <span className="text-[#E31837] text-sm font-medium tracking-[0.2em] uppercase">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A0A0A]" style={{ fontFamily: "var(--font-syne)" }}>
            8 Ways We Upgrade
            <br />
            <span className="text-gradient">Your Drive</span>
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(service.whatsappMsg)}`;

            return (
              <StaggerItem key={service.id}>
                <motion.a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "group relative flex flex-col p-8 rounded-3xl border transition-all duration-300 cursor-pointer block",
                    "bg-white border-black/08 hover:border-[#E31837]/30 hover:shadow-lg hover:shadow-[#E31837]/05",
                    service.featured && "md:col-span-2 lg:col-span-2"
                  )}
                >
                  {/* Red top line on hover */}
                  <div className="absolute top-0 left-8 right-8 h-0.5 bg-[#E31837] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />

                  {service.featured && (
                    <span className="absolute top-5 right-5 text-[10px] font-semibold tracking-widest uppercase text-[#E31837] border border-[#E31837]/30 px-2.5 py-1 rounded-full">
                      Popular
                    </span>
                  )}

                  <div className="w-12 h-12 rounded-2xl bg-[#F7F7F7] border border-black/05 flex items-center justify-center mb-6 group-hover:bg-[#E31837]/08 group-hover:border-[#E31837]/15 transition-all">
                    <Icon className="w-5 h-5 text-[#E31837]" />
                  </div>

                  <h3 className="text-[#0A0A0A] font-semibold text-lg mb-3 group-hover:text-[#E31837] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#888888] text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/05">
                    <span className="text-[#E31837] text-sm font-semibold">Starting {service.from}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#CCCCCC] group-hover:text-[#E31837] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </motion.a>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
