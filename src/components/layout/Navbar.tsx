"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
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
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.08]);

  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%20Madhuban%20Motors!%20I'd%20like%20to%20enquire%20about%20your%20services.`;

  return (
    <>
      {/* Top accent bar */}
      <div className="w-full bg-[#C9A84C] py-1.5 text-center text-xs font-medium text-[#0D0D0F] tracking-wide hidden md:block">
        MyTVS Authorized Partner &nbsp;·&nbsp; New Gandhi Nagar, Model Town, Ghaziabad &nbsp;·&nbsp; {SITE.hours}
      </div>

      {/* Main navbar */}
      <motion.header
        style={{ backgroundColor: `rgba(13,13,15,${bgOpacity})` } as any}
        className="fixed top-0 left-0 right-0 z-50 md:top-[30px]"
      >
        <motion.div
          style={{ borderBottomColor: `rgba(255,255,255,${borderOpacity})` } as any}
          className="border-b border-transparent"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
                MADHUBAN
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#C9A84C] uppercase">
                Motors · Est. {SITE.estYear}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#9B9897] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 text-sm text-[#9B9897] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0D0D0F] text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Book Now
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden bg-[#111114] md:hidden"
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#9B9897] hover:text-white transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10 flex gap-3">
              <a href={`tel:${SITE.phone}`} className="flex-1 text-center border border-white/20 text-white text-sm py-2.5 rounded-xl">
                Call Now
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-[#C9A84C] text-[#0D0D0F] text-sm font-semibold py-2.5 rounded-xl">
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}
