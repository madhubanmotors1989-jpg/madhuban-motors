"use client";
import { motion } from "motion/react";
import {
  Armchair, Speaker, Camera, Lightbulb, ShieldCheck, MapPin, Sparkles, Wrench, ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/ui/FadeUp";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Armchair, Speaker, Camera, Lightbulb, ShieldCheck, MapPin, Sparkles, Wrench,
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeUp className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
            8 Ways We Upgrade
            <br />
            <span className="text-gradient">Your Drive</span>
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(service.whatsappMsg)}`;

            return (
              <StaggerItem key={service.id}>
                <motion.a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 cursor-pointer block",
                    "bg-[#111114] border-white/[0.06]",
                    "hover:border-[#C9A84C]/30 hover:bg-[#18181C]",
                    service.featured && "md:col-span-2 lg:col-span-2"
                  )}
                >
                  {/* Gold top line on hover */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Featured badge */}
                  {service.featured && (
                    <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-widest uppercase text-[#C9A84C] border border-[#C9A84C]/30 px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}

                  <div className="w-10 h-10 rounded-xl bg-[#222228] border border-white/08 flex items-center justify-center mb-4 group-hover:border-[#C9A84C]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#E8C96A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#5A5856] text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[#C9A84C] text-sm font-medium">
                      Starting {service.from}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#5A5856] group-hover:text-[#C9A84C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
