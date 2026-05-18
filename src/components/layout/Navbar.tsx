"use client";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { useLang } from "@/lib/lang";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "Services", labelHi: "सेवाएं", href: "#services" },
  { label: "Our Work", labelHi: "काम", href: "#gallery" },
  { label: "About", labelHi: "हमारे बारे में", href: "#about" },
  { label: "Process", labelHi: "प्रक्रिया", href: "#process" },
  { label: "Contact", labelHi: "संपर्क", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { lang, toggle } = useLang();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!%20I'd%20like%20to%20enquire%20about%20your%20services.`;

  return (
    <>
      {/* Top accent bar */}
      <div className="w-full bg-[#E31837] py-1.5 text-center text-xs font-medium text-white tracking-wide hidden md:block">
        {lang === "hi"
          ? `MyTVS Authorized · गाज़ियाबाद · ${SITE.hours}`
          : `MyTVS Authorized Partner · Ghaziabad · ${SITE.hours}`}
      </div>

      <motion.header
        className="fixed left-0 right-0 z-50 md:top-[30px]"
        style={{
          top: 0,
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.07)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background-color 0.4s, box-shadow 0.4s, backdrop-filter 0.4s",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
          <Logo dark={scrolled} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors duration-200",
                  scrolled ? "text-[#555] hover:text-[#0A0A0A]" : "text-white/70 hover:text-white"
                )}
              >
                {lang === "hi" ? link.labelHi : link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              className={cn(
                "flex items-center text-xs border rounded-full overflow-hidden transition-colors",
                scrolled ? "border-black/15" : "border-white/25"
              )}
              aria-label="Toggle language"
            >
              <span className={cn("px-2.5 py-1 transition-colors", lang === "en" ? "bg-[#E31837] text-white font-semibold" : scrolled ? "text-[#888]" : "text-white/50")}>EN</span>
              <span className={cn("px-2.5 py-1 transition-colors", lang === "hi" ? "bg-[#E31837] text-white font-semibold" : scrolled ? "text-[#888]" : "text-white/50")}>हिं</span>
            </button>
            <a
              href={`tel:${SITE.phone}`}
              className={cn("flex items-center gap-2 text-sm transition-colors", scrolled ? "text-[#555] hover:text-[#0A0A0A]" : "text-white/70 hover:text-white")}
            >
              <Phone className="w-4 h-4" /> {lang === "hi" ? "कॉल" : "Call"}
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#E31837] hover:bg-[#FF3355] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> {lang === "hi" ? "बुक करें" : "Book Now"}
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggle} className={cn("flex items-center text-xs border rounded-full overflow-hidden", scrolled ? "border-black/15" : "border-white/25")}>
              <span className={cn("px-2 py-0.5", lang === "en" ? "bg-[#E31837] text-white font-semibold" : scrolled ? "text-[#888]" : "text-white/50")}>EN</span>
              <span className={cn("px-2 py-0.5", lang === "hi" ? "bg-[#E31837] text-white font-semibold" : scrolled ? "text-[#888]" : "text-white/50")}>हिं</span>
            </button>
            <button
              className={cn("p-2", scrolled ? "text-[#0A0A0A]" : "text-white")}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden bg-white/98 border-t border-black/05 md:hidden"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-[#555] hover:text-[#0A0A0A] transition-colors" onClick={() => setMobileOpen(false)}>
                {lang === "hi" ? link.labelHi : link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-black/08 flex gap-3">
              <a href={`tel:${SITE.phone}`} className="flex-1 text-center border border-black/15 text-[#0A0A0A] text-sm py-3 rounded-xl">
                {lang === "hi" ? "कॉल करें" : "Call Now"}
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-[#E31837] text-white text-sm font-semibold py-3 rounded-xl">
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}
