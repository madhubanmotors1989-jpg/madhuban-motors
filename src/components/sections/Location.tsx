"use client";
import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FadeUp } from "@/components/ui/FadeUp";

export function Location() {
  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!%20I'd%20like%20directions%20and%20to%20book%20a%20visit.`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeUp className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
              Find Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
            Visit the
            <br />
            <span className="text-gradient">Workshop</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <FadeUp>
            <div className="rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px] border border-white/[0.06]">
              <iframe
                src={SITE.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Madhuban Motors Location"
              />
            </div>
          </FadeUp>

          {/* Details */}
          <FadeUp delay={0.15}>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#18181C] border border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-[#222228] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Address</p>
                  <p className="text-[#9B9897] text-sm leading-relaxed">{SITE.address}</p>
                  <a
                    href={SITE.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#C9A84C] text-sm mt-2 hover:text-[#E8C96A] transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" /> Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#18181C] border border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-[#222228] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Working Hours</p>
                  <p className="text-[#9B9897] text-sm">{SITE.hours}</p>
                  <p className="text-[#22C55E] text-xs mt-1 font-medium">● Open Now</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#18181C] border border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-[#222228] flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Service Areas</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {SITE.serviceAreas.map((area) => (
                      <span key={area} className="text-xs text-[#9B9897] border border-white/10 px-2.5 py-1 rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-white text-sm font-medium py-3 rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4" /> 99114 43751
                  </a>
                  <a
                    href={`tel:${SITE.phone2}`}
                    className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-white text-sm font-medium py-3 rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4" /> 97183 73751
                  </a>
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white text-sm font-semibold py-3.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
