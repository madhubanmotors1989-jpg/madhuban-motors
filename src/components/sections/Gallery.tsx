"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/FadeUp";
import { SITE } from "@/lib/constants";

const categories = ["All", "Seat Covers", "Car Audio", "Ceramic Coating", "LED", "Security"];

const works = [
  { cat: "Seat Covers", label: "Premium Leather — Hyundai Creta", before: true },
  { cat: "Car Audio", label: "Pioneer Android Head Unit — XUV700", before: false },
  { cat: "Ceramic Coating", label: "9H Ceramic — Toyota Fortuner", before: true },
  { cat: "LED", label: "Full Ambient Kit — Kia Seltos", before: false },
  { cat: "Seat Covers", label: "Nappa Leather — Maruti Swift", before: false },
  { cat: "Security", label: "Viper Alarm + GPS — Honda City", before: false },
  { cat: "Car Audio", label: "Full Audio Overhaul — Brezza", before: false },
  { cat: "Ceramic Coating", label: "Premium Coat — Mahindra Thar", before: true },
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
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(95, Math.max(5, pos)));
  };

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeUp className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
              Our Work
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
              Real Cars.
              <br />
              <span className="text-gradient">Real Transformations.</span>
            </h2>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#9B9897] hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" /> Follow us on Instagram →
            </a>
          </div>
        </FadeUp>

        {/* Before/After Slider */}
        <FadeUp delay={0.1} className="mb-12">
          <p className="text-[#5A5856] text-sm mb-4 text-center">Drag to reveal — Before & After</p>
          <div
            ref={sliderRef}
            className="relative h-64 md:h-96 rounded-2xl overflow-hidden cursor-col-resize select-none"
            onMouseMove={handleSlider}
            onTouchMove={handleSlider}
          >
            {/* After (right) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a20] to-[#222228] flex items-center justify-center">
              <div className="text-center">
                <div className="text-[#C9A84C] text-2xl mb-2">✨ AFTER</div>
                <p className="text-[#5A5856] text-sm">Add your "After" photo here</p>
              </div>
            </div>

            {/* Before (left, clipped) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#111114] to-[#18181C] flex items-center justify-center"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <div className="text-center">
                <div className="text-[#9B9897] text-2xl mb-2">📷 BEFORE</div>
                <p className="text-[#5A5856] text-sm">Add your "Before" photo here</p>
              </div>
            </div>

            {/* Divider handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white/60 z-10"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
                <ChevronLeft className="w-3 h-3 text-[#0D0D0F] -mr-0.5" />
                <ChevronRight className="w-3 h-3 text-[#0D0D0F] -ml-0.5" />
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Category filter */}
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-[#C9A84C] text-[#0D0D0F]"
                    : "border border-white/10 text-[#9B9897] hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {filtered.map((work, i) => (
              <motion.div
                key={work.label + i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="group aspect-square rounded-2xl bg-[#18181C] border border-white/[0.06] hover:border-[#C9A84C]/20 transition-all relative overflow-hidden flex items-end p-4 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#222228] text-xs text-center pointer-events-none">
                  📸 Add Photo
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#C9A84C] bg-[#C9A84C]/10 px-2 py-0.5 rounded-full">
                    {work.cat}
                  </span>
                  <p className="text-white/80 text-xs mt-1">{work.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
