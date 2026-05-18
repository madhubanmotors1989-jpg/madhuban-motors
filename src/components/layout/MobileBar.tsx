"use client";
import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import { SITE } from "@/lib/constants";

export function MobileBar() {
  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!%20I'd%20like%20to%20book%20an%20appointment.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#111114] border-t border-white/10 pb-safe">
      <div className="flex items-stretch h-16">
        <a
          href={`tel:${SITE.phone}`}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-[#9B9897] hover:text-white transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px]">Call</span>
        </a>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0D0D0F] font-semibold text-sm"
        >
          <MessageCircle className="w-5 h-5" />
          Book on WhatsApp
        </a>
        <a
          href="#book"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-[#9B9897] hover:text-white transition-colors"
        >
          <CalendarDays className="w-5 h-5" />
          <span className="text-[10px]">Appointment</span>
        </a>
      </div>
    </div>
  );
}
