import Link from "next/link";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] border-t-2 border-[#F05A22]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex flex-col leading-none">
              <div
                className="flex items-baseline font-black"
                style={{ fontFamily: "var(--font-syne)", color: "#fff", fontSize: "1.45rem", letterSpacing: "-0.02em", lineHeight: 1.05 }}
              >
                <span>MADHU</span>
                <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>B</span>
                <span>AN</span>
              </div>
              <div
                className="font-black"
                style={{ fontFamily: "var(--font-syne)", color: "#fff", fontSize: "1.45rem", letterSpacing: "-0.02em", lineHeight: 1 }}
              >
                MOTORS
              </div>
              <span style={{ color: "#F05A22", fontSize: "0.5rem", letterSpacing: "0.5em", marginTop: "5px" }}>
                EST. {SITE.estYear}
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed mb-8">
              Delhi NCR&apos;s most trusted car accessories and customization workshop. Three generations of passion.
            </p>
            <div className="flex gap-3">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/05 border border-white/08 flex items-center justify-center text-white/40 hover:text-white hover:border-[#F05A22]/40 transition-all">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/05 border border-white/08 flex items-center justify-center text-white/40 hover:text-white hover:border-[#F05A22]/40 transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href={`tel:${SITE.phone}`} className="w-9 h-9 rounded-xl bg-white/05 border border-white/08 flex items-center justify-center text-white/40 hover:text-white hover:border-[#F05A22]/40 transition-all">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-semibold text-sm mb-6 tracking-wide">Services</p>
            <div className="flex flex-col gap-3">
              {SERVICES.slice(0, 6).map((s) => (
                <Link key={s.id} href="#services" className="text-white/30 text-sm hover:text-[#F05A22] transition-colors">{s.title}</Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-sm mb-6 tracking-wide">Quick Links</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Book Consultation", href: "#book" },
                { label: "Our Work", href: "#gallery" },
                { label: "About Us", href: "#about" },
                { label: "How It Works", href: "#process" },
                { label: "Contact & Location", href: "#contact" },
                { label: "Online Shop", href: "/shop" },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="text-white/30 text-sm hover:text-[#F05A22] transition-colors flex items-center gap-2">
                  {l.label}
                  {l.label === "Online Shop" && (
                    <span className="text-[10px] text-[#F05A22] border border-[#F05A22]/30 px-1.5 py-0.5 rounded-full">Soon</span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-6 tracking-wide">Contact</p>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F05A22] mt-0.5 flex-shrink-0" />
                <p className="text-white/30 text-sm leading-relaxed">{SITE.address}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F05A22] mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`tel:${SITE.phone}`} className="block text-white/30 text-sm hover:text-white transition-colors">+91 99114 43751</a>
                  <a href={`tel:${SITE.phone2}`} className="block text-white/30 text-sm hover:text-white transition-colors mt-1">+91 97183 73751</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F05A22] flex-shrink-0" />
                <a href={`mailto:${SITE.email}`} className="text-white/30 text-sm hover:text-white transition-colors break-all">{SITE.email}</a>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["Cash", "UPI", "Card"].map((p) => (
                  <span key={p} className="text-[10px] text-white/30 border border-white/08 px-2.5 py-1 rounded-lg">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/06 py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/20 text-xs">© {year} Madhuban Motors. All rights reserved.</p>
          <p className="text-white/10 text-xs">MyTVS Authorized Partner · GST: {SITE.gst} · Ghaziabad, UP</p>
        </div>
      </div>
    </footer>
  );
}
