import Link from "next/link";
import { Phone, MessageCircle, MapPin, Navigation, Mail } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { SITE, SERVICES } from "@/lib/constants";

export function Footer() {
  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080809] border-t border-white/[0.06]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
                MADHUBAN
              </span>
              <div className="text-[10px] tracking-[0.3em] text-[#C9A84C] uppercase mt-0.5">
                Motors · Est. {SITE.estYear}
              </div>
            </div>
            <p className="text-[#5A5856] text-sm leading-relaxed mb-6">
              Delhi NCR's most trusted car accessories and customization workshop. Three generations of passion.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#18181C] border border-white/08 flex items-center justify-center text-[#9B9897] hover:text-white hover:border-white/20 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#18181C] border border-white/08 flex items-center justify-center text-[#9B9897] hover:text-white hover:border-white/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="w-9 h-9 rounded-xl bg-[#18181C] border border-white/08 flex items-center justify-center text-[#9B9897] hover:text-white hover:border-white/20 transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 tracking-wide">Services</p>
            <div className="flex flex-col gap-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <Link
                  key={s.id}
                  href={`#services`}
                  className="text-[#5A5856] text-sm hover:text-[#C9A84C] transition-colors"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 tracking-wide">Quick Links</p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Book Consultation", href: "#book" },
                { label: "Our Work", href: "#gallery" },
                { label: "About Us", href: "#about" },
                { label: "How It Works", href: "#process" },
                { label: "Contact & Location", href: "#contact" },
                { label: "Online Shop", href: "/shop" },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-[#5A5856] text-sm hover:text-[#C9A84C] transition-colors"
                >
                  {l.label}
                  {l.label === "Online Shop" && (
                    <span className="ml-2 text-[10px] text-[#C9A84C] border border-[#C9A84C]/30 px-1.5 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 tracking-wide">Contact</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <p className="text-[#5A5856] text-sm leading-relaxed">{SITE.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <a href={`tel:${SITE.phone}`} className="text-[#5A5856] text-sm hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a href={`tel:${SITE.phone}`} className="text-[#5A5856] text-sm hover:text-white transition-colors">+91 99114 43751</a>
                  <a href={`tel:${SITE.phone2}`} className="text-[#5A5856] text-sm hover:text-white transition-colors">+91 97183 73751</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <a href={`mailto:${SITE.email}`} className="text-[#5A5856] text-sm hover:text-white transition-colors break-all">
                  {SITE.email}
                </a>
              </div>
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm hover:text-[#E8C96A] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" /> Get Directions
              </a>
            </div>

            {/* Payment icons */}
            <div className="mt-6">
              <p className="text-[#5A5856] text-xs mb-2">We accept</p>
              <div className="flex gap-2">
                {["Cash", "UPI", "Card"].map((p) => (
                  <span key={p} className="text-[10px] text-[#5A5856] border border-white/08 px-2 py-1 rounded-md">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04] py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[#5A5856] text-xs">
            © {year} Madhuban Motors. All rights reserved.
          </p>
          <p className="text-[#3A3838] text-xs">
            GT Road, Ghaziabad · GST Registered
          </p>
        </div>
      </div>
    </footer>
  );
}
