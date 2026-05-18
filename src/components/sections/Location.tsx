"use client";
import { MapPin, Phone, MessageCircle, Clock, Navigation, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FadeUp } from "@/components/ui/FadeUp";

export function Location() {
  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!%20I'd%20like%20directions%20and%20to%20book%20a%20visit.`;

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#E31837]" />
            <span className="text-[#E31837] text-sm font-medium tracking-[0.2em] uppercase">Find Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A0A0A]" style={{ fontFamily: "var(--font-syne)" }}>
            Visit the
            <br />
            <span className="text-gradient">Workshop</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <FadeUp>
            <div className="rounded-3xl overflow-hidden h-80 lg:h-full min-h-[360px] border border-black/06">
              <iframe
                src={SITE.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Madhuban Motors Location"
              />
            </div>
          </FadeUp>

          {/* Details */}
          <FadeUp delay={0.15}>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-5 p-7 rounded-3xl bg-white border border-black/06">
                <div className="w-11 h-11 rounded-2xl bg-[#E31837]/08 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#E31837]" />
                </div>
                <div>
                  <p className="text-[#0A0A0A] font-semibold mb-2">Address</p>
                  <p className="text-[#888888] text-sm leading-relaxed">{SITE.address}</p>
                  <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#E31837] text-sm mt-3 hover:text-[#FF3355] transition-colors">
                    <Navigation className="w-3.5 h-3.5" /> Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 p-7 rounded-3xl bg-white border border-black/06">
                <div className="w-11 h-11 rounded-2xl bg-[#E31837]/08 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#E31837]" />
                </div>
                <div>
                  <p className="text-[#0A0A0A] font-semibold mb-2">Phone</p>
                  <a href={`tel:${SITE.phone}`} className="block text-[#888888] text-sm hover:text-[#0A0A0A] transition-colors">+91 99114 43751</a>
                  <a href={`tel:${SITE.phone2}`} className="block text-[#888888] text-sm hover:text-[#0A0A0A] transition-colors mt-1">+91 97183 73751</a>
                </div>
              </div>

              <div className="flex items-start gap-5 p-7 rounded-3xl bg-white border border-black/06">
                <div className="w-11 h-11 rounded-2xl bg-[#E31837]/08 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#E31837]" />
                </div>
                <div>
                  <p className="text-[#0A0A0A] font-semibold mb-2">Working Hours</p>
                  <p className="text-[#888888] text-sm">{SITE.hours}</p>
                  <p className="text-[#22C55E] text-xs mt-2 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] inline-block" /> Open Now
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <a href={`tel:${SITE.phone}`} className="flex items-center justify-center gap-2 border border-black/10 hover:border-black/20 text-[#0A0A0A] text-sm font-medium py-3.5 rounded-2xl transition-colors bg-white">
                    <Phone className="w-4 h-4" /> 99114 43751
                  </a>
                  <a href={`tel:${SITE.phone2}`} className="flex items-center justify-center gap-2 border border-black/10 hover:border-black/20 text-[#0A0A0A] text-sm font-medium py-3.5 rounded-2xl transition-colors bg-white">
                    <Phone className="w-4 h-4" /> 97183 73751
                  </a>
                </div>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#E31837] hover:bg-[#FF3355] text-white text-sm font-semibold rounded-2xl transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {SITE.serviceAreas.map((area) => (
                  <span key={area} className="text-xs text-[#888888] border border-black/08 bg-white px-3 py-1.5 rounded-full">{area}</span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
