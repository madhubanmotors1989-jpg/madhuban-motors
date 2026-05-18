"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { CheckCircle, MessageCircle, ChevronDown } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { FadeUp } from "@/components/ui/FadeUp";
import { useLang, tr } from "@/lib/lang";
import { cn } from "@/lib/cn";

const CAR_BRANDS = [
  "Maruti Suzuki", "Hyundai", "Tata", "Mahindra", "Kia",
  "Toyota", "Honda", "Volkswagen", "Skoda", "MG", "Other",
];

export function BookingForm() {
  const { lang } = useLang();
  const tx = tr[lang];

  const [form, setForm] = useState({
    car: "", carModel: "", services: [] as string[],
    name: "", phone: "", email: "", notSure: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (key: keyof typeof form, value: string | string[] | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleService = (id: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const buildWAMsg = () => {
    const selectedServices = form.notSure
      ? "Not sure yet — needs advice"
      : form.services.map((id) => SERVICES.find((s) => s.id === id)?.title).filter(Boolean).join(", ");
    return encodeURIComponent(
      `Hi Madhuban Motors!\n\nName: ${form.name}\nPhone: ${form.phone}\nCar: ${form.car}${form.carModel ? " " + form.carModel : ""}\nServices: ${selectedServices || "General enquiry"}\n\nPlease share availability for a consultation.`
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, services: form.services.join(", ") }),
      });
    } catch {}
    setSubmitted(true);
    setLoading(false);
  };

  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${buildWAMsg()}`;
  const canSubmit = form.name && form.phone && form.car;

  return (
    <section id="book" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left */}
          <FadeUp>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#E31837]" />
              <span className="text-[#E31837] text-xs font-semibold tracking-[0.25em] uppercase">
                {lang === "hi" ? "बुक करें" : "Book Now"}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A0A0A] mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              {tx.bookH1}
              <br />
              <span className="text-gradient">{tx.bookH2}</span>
            </h2>
            <p className="text-[#555555] text-lg mb-10">{tx.bookSub}</p>

            <div className="flex flex-col gap-4 mb-10">
              {tx.bookPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 text-[#666] text-sm">
                  <div className="w-4 h-4 rounded-full bg-[#E31837]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-2.5 h-2.5 text-[#E31837]" />
                  </div>
                  {point}
                </div>
              ))}
            </div>

            {/* Live indicator */}
            <div className="flex items-center gap-2 p-4 rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/04">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse flex-shrink-0" />
              <span className="text-[#555555] text-sm">
                <span className="font-semibold text-[#0A0A0A]">{tx.bookLive}</span>
                {tx.bookLive2}
              </span>
            </div>
          </FadeUp>

          {/* Right: form */}
          <FadeUp delay={0.2}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#F7F7F7] border border-black/06 rounded-3xl p-12 flex flex-col items-center text-center gap-5"
                >
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.1 }}>
                    <CheckCircle className="w-16 h-16 text-[#E31837]" />
                  </motion.div>
                  <h3 className="text-[#0A0A0A] font-bold text-2xl" style={{ fontFamily: "var(--font-syne)" }}>
                    {lang === "hi" ? "हो गया! बुकिंग मिली।" : "Done! Booking Received."}
                  </h3>
                  <p className="text-[#888888] text-sm max-w-xs">
                    हम जल्द ही WhatsApp पर संपर्क करेंगे। We'll reach out shortly.
                  </p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold px-8 py-4 rounded-full transition-colors mt-2"
                  >
                    <MessageCircle className="w-5 h-5" /> Open WhatsApp Now
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[#F7F7F7] border border-black/06 rounded-3xl p-8 md:p-10"
                >
                  <div className="flex flex-col gap-5">

                    {/* Car Brand */}
                    <div>
                      <label className="text-[#0A0A0A] text-sm font-medium mb-2 block">
                        {lang === "hi" ? "आपकी कार का ब्रांड" : "Your Car Brand"}
                      </label>
                      <div className="relative">
                        <select
                          value={form.car}
                          onChange={(e) => update("car", e.target.value)}
                          className="w-full bg-white border border-black/10 text-[#0A0A0A] rounded-2xl px-5 py-4 text-sm appearance-none focus:outline-none focus:border-[#E31837]/40 transition-colors cursor-pointer"
                        >
                          <option value="">{lang === "hi" ? "कार ब्रांड चुनें" : "Select car brand"}</option>
                          {CAR_BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAAAAA] pointer-events-none" />
                      </div>
                    </div>

                    {/* Car Model */}
                    <div>
                      <label className="text-[#0A0A0A] text-sm font-medium mb-2 block">
                        {lang === "hi" ? "कार मॉडल" : "Car Model"}{" "}
                        <span className="text-[#AAAAAA] font-normal">({lang === "hi" ? "optional" : "optional"})</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Creta, Fortuner, Seltos..."
                        value={form.carModel}
                        onChange={(e) => update("carModel", e.target.value)}
                        className="w-full bg-white border border-black/10 text-[#0A0A0A] rounded-2xl px-5 py-4 text-sm placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#E31837]/40 transition-colors"
                      />
                    </div>

                    {/* Services — checkboxes */}
                    <div>
                      <label className="text-[#0A0A0A] text-sm font-medium mb-3 block">
                        {lang === "hi" ? "कौन सी सेवा चाहिए?" : "Services Needed"}{" "}
                        <span className="text-[#AAAAAA] font-normal">
                          ({lang === "hi" ? "जितनी चाहें चुनें" : "select all that apply"})
                        </span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {SERVICES.map((s) => {
                          const selected = form.services.includes(s.id);
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => { toggleService(s.id); update("notSure", false); }}
                              className={cn(
                                "text-left p-3.5 rounded-2xl border text-sm transition-all",
                                selected
                                  ? "border-[#E31837] bg-[#E31837]/06 text-[#0A0A0A] font-medium"
                                  : "border-black/08 text-[#666666] hover:border-black/15 bg-white"
                              )}
                            >
                              {s.title}
                            </button>
                          );
                        })}
                        {/* Not Sure */}
                        <button
                          type="button"
                          onClick={() => { update("notSure", !form.notSure); update("services", []); }}
                          className={cn(
                            "col-span-2 text-center p-3.5 rounded-2xl border text-sm transition-all italic",
                            form.notSure
                              ? "border-[#E31837] bg-[#E31837]/06 text-[#0A0A0A]"
                              : "border-dashed border-black/10 text-[#AAAAAA] hover:border-black/20 bg-white"
                          )}
                        >
                          Not Sure Yet — बस पूछना है 🙂
                        </button>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-black/06 pt-2" />

                    {/* Contact */}
                    <div>
                      <label className="text-[#0A0A0A] text-sm font-medium mb-2 block">
                        {lang === "hi" ? "आपका नाम" : "Your Name"}
                      </label>
                      <input type="text" placeholder="Rahul Sharma" value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full bg-white border border-black/10 text-[#0A0A0A] rounded-2xl px-5 py-4 text-sm placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#E31837]/40 transition-colors" />
                    </div>
                    <div>
                      <label className="text-[#0A0A0A] text-sm font-medium mb-2 block">
                        {lang === "hi" ? "WhatsApp नंबर" : "WhatsApp Number"}
                      </label>
                      <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full bg-white border border-black/10 text-[#0A0A0A] rounded-2xl px-5 py-4 text-sm placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#E31837]/40 transition-colors" />
                    </div>
                    <div>
                      <label className="text-[#0A0A0A] text-sm font-medium mb-2 block">
                        Email <span className="text-[#AAAAAA] font-normal">(optional)</span>
                      </label>
                      <input type="email" placeholder="rahul@gmail.com" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full bg-white border border-black/10 text-[#0A0A0A] rounded-2xl px-5 py-4 text-sm placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#E31837]/40 transition-colors" />
                    </div>

                    {/* Submit */}
                    <motion.button
                      onClick={handleSubmit}
                      disabled={!canSubmit || loading}
                      whileHover={{ scale: canSubmit ? 1.01 : 1 }}
                      whileTap={{ scale: canSubmit ? 0.98 : 1 }}
                      className="flex items-center justify-center gap-2 bg-[#E31837] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FF3355] text-white font-bold py-4 rounded-2xl transition-all text-sm"
                    >
                      {loading
                        ? (lang === "hi" ? "भेज रहे हैं..." : "Sending...")
                        : <><MessageCircle className="w-4 h-4" /> {lang === "hi" ? "WhatsApp पर भेजें" : "Send on WhatsApp"}</>}
                    </motion.button>
                    <p className="text-[#AAAAAA] text-xs text-center">No spam. कोई परेशानी नहीं।</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
