"use client";
import { motion } from "motion/react";
import { Star, ExternalLink } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SITE } from "@/lib/constants";

const REVIEWS = [
  {
    name: "Ankit Sharma",
    rating: 5,
    date: "2 weeks ago",
    text: "Got seat covers and LED lights done for my Creta. Absolutely superb quality! The fitting is perfect, no loose ends anywhere. Bitoo bhaiya personally checked everything before handing over. Will definitely come back for ceramic coating.",
    service: "Seat Covers + LED",
    initials: "AS",
  },
  {
    name: "Priya Mehta",
    rating: 5,
    date: "1 month ago",
    text: "Pioneer double din installed in my Brezza. Sound quality is outstanding. The team explained every option clearly, no pressure to spend more. Honest people, honest prices. Highly recommend!",
    service: "Car Audio",
    initials: "PM",
  },
  {
    name: "Rohit Agarwal",
    rating: 5,
    date: "3 weeks ago",
    text: "Ceramic coating done on my Thar. The gloss finish is insane — water just rolls off. 3 months in and it still looks showroom fresh. Best decision I made for my car.",
    service: "Ceramic Coating",
    initials: "RA",
  },
  {
    name: "Sunita Yadav",
    rating: 5,
    date: "2 months ago",
    text: "Been going to Madhuban Motors for 10+ years. They've done 3 cars for our family. Quality never drops. These people are genuine — they'll tell you what you actually need, not what costs more.",
    service: "Long-time Customer",
    initials: "SY",
  },
  {
    name: "Vivek Gupta",
    rating: 5,
    date: "1 month ago",
    text: "360 degree camera fitted on my Fortuner. Parking in narrow lanes has become so easy. Professional installation, clean wiring — you can't even tell something was added. Perfect job.",
    service: "360° Camera",
    initials: "VG",
  },
  {
    name: "Neha Singh",
    rating: 4,
    date: "3 months ago",
    text: "GPS tracker and alarm installed. Fast work, very professional. Shop is well-organized and they respect your time. Minor wait on one part but overall great experience.",
    service: "GPS + Security",
    initials: "NS",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3.5 h-3.5 ${s <= rating ? "fill-[#E31837] text-[#E31837]" : "fill-black/08 text-black/08"}`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <FadeUp className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#E31837]" />
                <span className="text-[#E31837] text-xs font-semibold tracking-[0.25em] uppercase">Google Reviews</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A]" style={{ fontFamily: "var(--font-syne)" }}>
                Real people.
                <br />
                <span className="text-gradient">Real words.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={`w-5 h-5 ${s <= 4 ? "fill-[#E31837] text-[#E31837]" : "fill-[#E31837]/30 text-[#E31837]/30"}`} />
                ))}
                <span className="text-[#0A0A0A] font-bold text-2xl ml-1" style={{ fontFamily: "var(--font-syne)" }}>4.6</span>
              </div>
              <p className="text-[#AAAAAA] text-sm">500+ reviews on Google Maps</p>
              <a
                href={SITE.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#E31837] text-sm hover:text-[#FF3355] transition-colors"
              >
                See all reviews <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-black/04"
            >
              <div className="flex items-start justify-between">
                <Stars rating={review.rating} />
                {/* Large decorative quote */}
                <span className="text-[#E31837]/15 font-black text-5xl leading-none -mt-2 -mr-1 select-none">"</span>
              </div>

              <p className="text-[#555555] text-sm leading-relaxed flex-1">
                {review.text}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-black/05">
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-[#E31837] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{review.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#0A0A0A] font-semibold text-sm">{review.name}</p>
                  <p className="text-[#AAAAAA] text-xs">{review.service} · {review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeUp delay={0.3} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#E31837] text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4" /> Read all 500+ reviews
          </a>
          <a
            href={SITE.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#AAAAAA] hover:text-[#E31837] text-sm transition-colors"
          >
            Leave us a review ↗
          </a>
        </FadeUp>

      </div>
    </section>
  );
}
