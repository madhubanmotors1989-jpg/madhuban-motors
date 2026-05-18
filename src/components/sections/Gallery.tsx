"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SITE } from "@/lib/constants";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const categories = ["All", "Seat Covers", "Car Audio", "Ceramic Coating", "LED", "Security"];

const works = [
  { cat: "Seat Covers", label: "Premium Leather — Hyundai Creta" },
  { cat: "Car Audio", label: "Pioneer Android Head Unit — XUV700" },
  { cat: "Ceramic Coating", label: "9H Ceramic — Toyota Fortuner" },
  { cat: "LED", label: "Full Ambient Kit — Kia Seltos" },
  { cat: "Seat Covers", label: "Nappa Leather — Maruti Swift" },
  { cat: "Security", label: "Viper Alarm + GPS — Honda City" },
  { cat: "Car Audio", label: "Full Audio Overhaul — Brezza" },
  { cat: "Ceramic Coating", label: "Premium Coat — Mahindra Thar" },
];

export function Gallery() {
  const [active, setActive] = useState("All");
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const filtered = active === "All" ? works : works.filter((w) => w.cat === active);

  const handleSlider = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setSliderPos(Math.min(95, Math.max(5, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#E31837]" />
            <span className="text-[#E31837] text-sm font-medium tracking-[0.2em] uppercase">Our Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
              Real Cars.
              <br />
              <span className="text-gradient">Real Transformations.</span>
            </h2>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
              <InstagramIcon className="w-4 h-4" /> @accessories_madhuban →
            </a>
          </div>
        </FadeUp>

        {/* Before/After Slider */}
        <FadeUp delay={0.1} className="mb-14">
          <p className="text-white/30 text-xs mb-4 text-center tracking-wide uppercase">Drag to reveal · Before & After</p>
          <div
            ref={sliderRef}
            className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden cursor-col-resize select-none border border-white/06"
            onMouseMove={handleSlider}
            onTouchMove={handleSlider}
          >
            <div className="absolute inset-0 bg-[#111111] flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-3">✨</div>
                <p className="text-white/20 text-sm">After — Add your photo here</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
              <div className="text-center">
                <div className="text-3xl mb-3">📷</div>
                <p className="text-white/20 text-sm">Before — Add your photo here</p>
              </div>
            </div>
            <div className="absolute top-0 bottom-0 w-0.5 bg-white/60 z-10" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-xl">
                <ChevronLeft className="w-3 h-3 text-black -mr-0.5" />
                <ChevronRight className="w-3 h-3 text-black -ml-0.5" />
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Filter */}
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${active === cat ? "bg-[#E31837] text-white" : "border border-white/10 text-white/40 hover:border-white/20 hover:text-white"}`}>
                {cat}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map((work, i) => (
              <motion.div
                key={work.label + i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="group aspect-square rounded-3xl bg-[#111111] border border-white/06 hover:border-[#E31837]/20 transition-all relative overflow-hidden flex items-end p-5 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E31837]/05 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 text-xs text-center pointer-events-none">📸 Add Photo</div>
                <div className="relative z-10">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#E31837] bg-[#E31837]/10 px-2 py-0.5 rounded-full">{work.cat}</span>
                  <p className="text-white/50 text-xs mt-1.5">{work.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
