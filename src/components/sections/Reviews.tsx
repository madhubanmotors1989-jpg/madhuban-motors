"use client";
import { motion } from "motion/react";
import { Star, ExternalLink } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SITE } from "@/lib/constants";

const REVIEWS = [
  { name: "Ankit Sharma", initials: "AS", rating: 5, date: "2 weeks ago", text: "Seat covers and LED lights done for my Creta. Superb quality! Fitting is perfect, no loose ends. Bittu Bhaiya personally checked everything. Will definitely be back.", service: "Seat Covers + LED" },
  { name: "Priya Mehta", initials: "PM", rating: 5, date: "1 month ago", text: "Pioneer double din in my Brezza. Sound quality is outstanding. Team explained every option clearly, no pressure to spend more. Honest people, honest prices.", service: "Car Audio" },
  { name: "Rohit Agarwal", initials: "RA", rating: 5, date: "3 weeks ago", text: "Ceramic coating on my Thar. The gloss finish is insane — water just rolls off. 3 months in, still looks showroom fresh. Best decision for my car.", service: "Ceramic Coating" },
  { name: "Sunita Yadav", initials: "SY", rating: 5, date: "2 months ago", text: "Been coming here for 10+ years, three cars for our family. Quality never drops. These people are genuine — they tell you what you need, not what costs more.", service: "Long-time Customer" },
  { name: "Vivek Gupta", initials: "VG", rating: 5, date: "1 month ago", text: "360° camera on my Fortuner. Parking in narrow lanes is easy now. Professional installation, clean wiring — you can't even tell something was added.", service: "360° Camera" },
  { name: "Neha Singh", initials: "NS", rating: 4, date: "3 months ago", text: "GPS tracker and alarm installed. Fast, professional, organised. Shop respects your time. Minor wait on one part but overall a great experience.", service: "GPS + Security" },
  { name: "Rahul Saxena", initials: "RS", rating: 5, date: "5 days ago", text: "Full audio overhaul on my XUV700. Sub, amp, door speakers — everything fitted clean. No rattles, zero noise at high volume. These guys know cars.", service: "Car Audio" },
  { name: "Kavita Sharma", initials: "KS", rating: 5, date: "2 months ago", text: "Nappa leather seat covers for my Seltos. Custom colour matched perfectly. Delivery on time, handover was thorough. Worth every rupee.", service: "Seat Covers" },
];

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-2xl p-6 mx-2 shadow-sm border border-black/05 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className={`w-3.5 h-3.5 ${s <= review.rating ? "fill-[#E31837] text-[#E31837]" : "fill-black/08 text-black/08"}`} />
          ))}
        </div>
        <span className="text-[#E31837]/20 font-black text-4xl leading-none -mt-1 select-none">"</span>
      </div>
      <p className="text-[#555] text-sm leading-relaxed flex-1">{review.text}</p>
      <div className="flex items-center gap-2.5 pt-3 border-t border-black/05">
        <div className="w-7 h-7 rounded-full bg-[#E31837] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[10px] font-bold">{review.initials}</span>
        </div>
        <div>
          <p className="text-[#0A0A0A] font-semibold text-xs">{review.name}</p>
          <p className="text-[#AAA] text-[11px]">{review.service} · {review.date}</p>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  const row1 = [...REVIEWS, ...REVIEWS];
  const row2 = [...REVIEWS, ...REVIEWS].reverse();

  return (
    <section className="py-24 md:py-32 bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-[#E31837]" />
                <span className="text-[#E31837] text-xs font-semibold tracking-[0.3em] uppercase">Google Reviews</span>
              </div>
              <h2
                className="text-5xl md:text-6xl font-black tracking-tight text-[#0A0A0A]"
                style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
              >
                Real people.
                <br />
                <span className="text-gradient">Real words.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <div className="flex items-center gap-2">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className={`w-5 h-5 ${s <= 4 ? "fill-[#E31837] text-[#E31837]" : "fill-[#E31837]/30 text-[#E31837]/30"}`} />
                ))}
                <span className="text-[#0A0A0A] font-black text-2xl ml-1" style={{ fontFamily: "var(--font-syne)" }}>4.6</span>
              </div>
              <p className="text-[#AAA] text-sm">500+ reviews on Google Maps</p>
              <a href={SITE.googleReviews} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#E31837] text-sm hover:text-[#FF3355] transition-colors">
                See all reviews <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Row 1 — left to right */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {row1.map((r, i) => <ReviewCard key={i} review={r} />)}
        </motion.div>
      </div>

      {/* Row 2 — right to left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {row2.map((r, i) => <ReviewCard key={i} review={r} />)}
        </motion.div>
      </div>

      <FadeUp delay={0.2} className="mt-12 flex justify-center">
        <a
          href={SITE.googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#E31837] text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-colors duration-300"
        >
          <ExternalLink className="w-4 h-4" /> Read all 500+ reviews on Google
        </a>
      </FadeUp>
    </section>
  );
}
