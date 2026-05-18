"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.06]);

  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!%20I'd%20like%20to%20enquire%20about%20your%20services.`;

  return (
    <>
      {/* Top accent bar */}
      <div className="w-full bg-[#E31837] py-2 text-center text-xs font-medium text-white tracking-wide hidden md:block">
        MyTVS Authorized Partner &nbsp;·&nbsp; New Gandhi Nagar, Model Town, Ghaziabad &nbsp;·&nbsp; {SITE.hours}
      </div>

      <motion.header
        style={{ backgroundColor: `rgba(255,255,255,${bgOpacity})`, boxShadow: `0 1px 0 rgba(0,0,0,${shadowOpacity})` } as any}
        className="fixed top-0 left-0 right-0 z-50 md:top-[34px]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-18 flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-[#0A0A0A]" style={{ fontFamily: "var(--font-syne)" }}>
              MADHUBAN
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[#E31837] uppercase">
              Motors · Est. {SITE.estYear}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#555555] hover:text-[#0A0A0A] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#0A0A0A] transition-colors">
              <Phone className="w-4 h-4" /> Call
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#E31837] hover:bg-[#FF3355] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" /> Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-[#0A0A0A] p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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
              <Link key={link.href} href={link.href} className="text-[#555555] hover:text-[#0A0A0A] transition-colors" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-black/08 flex gap-3">
              <a href={`tel:${SITE.phone}`} className="flex-1 text-center border border-black/15 text-[#0A0A0A] text-sm py-3 rounded-xl">
                Call Now
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
