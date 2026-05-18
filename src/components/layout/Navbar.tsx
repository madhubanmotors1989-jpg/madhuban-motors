"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { useLang } from "@/lib/lang";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "Services", labelHi: "सेवाएं", href: "#services" },
  { label: "Our Work", labelHi: "हमारा काम", href: "#gallery" },
  { label: "About", labelHi: "हमारे बारे में", href: "#about" },
  { label: "How It Works", labelHi: "कैसे काम करता है", href: "#process" },
  { label: "Contact", labelHi: "संपर्क", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { lang, toggle } = useLang();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.06]);

  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!%20I'd%20like%20to%20enquire%20about%20your%20services.`;

  return (
    <>
      {/* Top accent bar */}
      <div className="w-full bg-[#E31837] py-2 text-center text-xs font-medium text-white tracking-wide hidden md:block">
        {lang === "hi"
          ? "MyTVS Authorized Partner · न्यू गांधी नगर, मॉडल टाउन, गाज़ियाबाद · " + SITE.hours
          : "MyTVS Authorized Partner · New Gandhi Nagar, Model Town, Ghaziabad · " + SITE.hours}
      </div>

      <motion.header
        style={{ backgroundColor: `rgba(255,255,255,${bgOpacity})`, boxShadow: `0 1px 0 rgba(0,0,0,${shadowOpacity})` } as any}
        className="fixed top-0 left-0 right-0 z-50 md:top-[34px]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-18 flex items-center justify-between py-4">
          <Logo dark />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#555555] hover:text-[#0A0A0A] transition-colors duration-200"
              >
                {lang === "hi" ? link.labelHi : link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggle}
              className="flex items-center text-xs border border-black/10 rounded-full overflow-hidden"
              aria-label="Toggle language"
            >
              <span className={cn("px-2.5 py-1 transition-colors", lang === "en" ? "bg-[#E31837] text-white font-semibold" : "text-[#888888] hover:text-[#555]")}>EN</span>
              <span className={cn("px-2.5 py-1 transition-colors", lang === "hi" ? "bg-[#E31837] text-white font-semibold" : "text-[#888888] hover:text-[#555]")}>हिं</span>
            </button>

            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#0A0A0A] transition-colors">
              <Phone className="w-4 h-4" /> {lang === "hi" ? "कॉल" : "Call"}
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#E31837] hover:bg-[#FF3355] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" /> {lang === "hi" ? "बुक करें" : "Book Now"}
            </a>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex items-center text-xs border border-black/10 rounded-full overflow-hidden"
            >
              <span className={cn("px-2 py-0.5", lang === "en" ? "bg-[#E31837] text-white font-semibold" : "text-[#888]")}>EN</span>
              <span className={cn("px-2 py-0.5", lang === "hi" ? "bg-[#E31837] text-white font-semibold" : "text-[#888]")}>हिं</span>
            </button>
            <button className="text-[#0A0A0A] p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden bg-white border-t border-black/05 md:hidden"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-[#555555] hover:text-[#0A0A0A] transition-colors" onClick={() => setMobileOpen(false)}>
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
