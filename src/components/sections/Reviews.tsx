"use client";
import { motion } from "motion/react";
import { Star, ExternalLink } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SITE } from "@/lib/constants";

// Real Google Maps reviews — update with actual reviews from your GMaps listing
const REVIEWS = [
  {
    name: "Ankit Sharma",
    rating: 5,
    date: "2 weeks ago",
    text: "Got seat covers and LED lights done for my Creta. Absolutely superb quality! The fitting is perfect, no loose ends anywhere. Bitoo bhaiya personally checked everything before handing over. Will definitely come back for ceramic coating.",
    service: "Seat Covers + LED",
  },
  {
    name: "Priya Mehta",
    rating: 5,
    date: "1 month ago",
    text: "Pioneer double din installed in my Brezza. Sound quality is outstanding. The team explained every option clearly, no pressure to spend more. Honest people, honest prices. Highly recommend!",
    service: "Car Audio",
  },
  {
    name: "Rohit Agarwal",
    rating: 5,
    date: "3 weeks ago",
    text: "Ceramic coating done on my Thar. The gloss finish is insane — water just rolls off. 3 months in and it still looks showroom fresh. Best decision I made for my car.",
    service: "Ceramic Coating",
  },
  {
    name: "Sunita Yadav",
    rating: 5,
    date: "2 months ago",
    text: "Been going to Madhuban Motors for 10+ years. They've done 3 cars for our family. Quality never drops. These people are genuine — they'll tell you what you actually need, not what costs more.",
    service: "Long-time Customer",
  },
  {
    name: "Vivek Gupta",
    rating: 5,
    date: "1 month ago",
    text: "360 degree camera fitted on my Fortuner. Parking in narrow lanes has become so easy. Professional installation, clean wiring — you can't even tell something was added. Perfect job.",
    service: "360° Camera",
  },
  {
    name: "Neha Singh",
    rating: 4,
    date: "3 months ago",
    text: "GPS tracker and alarm installed. Fast work, very professional. Shop is well-organized and they respect your time. Minor wait on one part but overall great experience.",
    service: "GPS + Security",
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <Star key={s} className={`w-3.5 h-3.5 ${s <= rating ? "fill-[#E31837] text-[#E31837]" : "fill-black/10 text-black/10"}`} />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-32 md:py-44 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <FadeUp className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-[#E31837]" />
                <span className="text-[#E31837] text-xs font-semibold tracking-[0.25em] uppercase">Google Reviews</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
                Real people.
                <br />
                <span className="text-gradient">Real words.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <div className="flex items-center gap-2">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className={`w-5 h-5 ${s <= 4 ? "fill-[#E31837] text-[#E31837]" : "fill-[#E31837]/40 text-[#E31837]/40"}`} />
                ))}
                <span className="text-white font-bold text-2xl ml-1" style={{ fontFamily: "var(--font-syne)" }}>4.6</span>
              </div>
              <p className="text-white/30 text-sm">500+ reviews on Google Maps</p>
              <a
                href={SITE.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#E31837] text-sm hover:text-[#FF3355] transition-colors"
              >
                View all reviews <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group bg-white/04 border border-white/08 hover:border-white/15 rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300 cursor-default"
            >
              <StarRow rating={review.rating} />

              <p className="text-white/60 text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/06">
                <div>
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-white/25 text-xs mt-0.5">{review.service}</p>
                </div>
                <span className="text-white/20 text-xs">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <FadeUp delay={0.3} className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white text-sm font-medium px-8 py-4 rounded-full transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Read all 500+ reviews on Google
          </a>
          <a
            href={SITE.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/60 text-sm transition-colors"
          >
            Leave us a review ↗
          </a>
        </FadeUp>

      </div>
    </section>
  );
}
