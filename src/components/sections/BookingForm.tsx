"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, CheckCircle, MessageCircle, ChevronDown } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { FadeUp } from "@/components/ui/FadeUp";
import { cn } from "@/lib/cn";

const CAR_BRANDS = [
  "Maruti Suzuki", "Hyundai", "Tata", "Mahindra", "Kia",
  "Toyota", "Honda", "Volkswagen", "Skoda", "MG",
  "Ford", "Renault", "Nissan", "Other",
];

type Step = 1 | 2 | 3;

export function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({ car: "", service: "", name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildWAMsg = () => {
    const svc = SERVICES.find((s) => s.id === form.service);
    return encodeURIComponent(`Hi Madhuban Motors!\n\nName: ${form.name}\nPhone: ${form.phone}\nCar: ${form.car}\nService: ${svc?.title || form.service}\n\n${form.message || "Please share availability for a consultation."}`);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try { await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) }); } catch {}
    setSubmitted(true);
    setLoading(false);
  };

  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${buildWAMsg()}`;

  return (
    <section id="book" className="py-32 md:py-44 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <FadeUp>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#E31837]" />
              <span className="text-[#E31837] text-sm font-medium tracking-[0.2em] uppercase">Book Now</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A0A0A] mb-8" style={{ fontFamily: "var(--font-syne)" }}>
              Get Your Free
              <br />
              <span className="text-gradient">Consultation</span>
            </h2>
            <p className="text-[#555555] leading-relaxed mb-10 text-base max-w-md">
              Tell us about your car and what you're looking for. We'll respond on WhatsApp within minutes — no spam, no pressure.
            </p>
            <div className="flex flex-col gap-5">
              {[
                "Free consultation — no hidden charges",
                "WhatsApp reply within minutes",
                "Transparent pricing before any work begins",
                "Pick-up & drop available in Ghaziabad",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-[#555555] text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#E31837]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-[#E31837]" />
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right: form */}
          <FadeUp delay={0.2}>
            <div className="bg-[#F7F7F7] border border-black/06 rounded-3xl p-10">

              {/* Step indicator */}
              {!submitted && (
                <div className="flex items-center gap-2 mb-10">
                  {([1, 2, 3] as Step[]).map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                        step >= s ? "bg-[#E31837] text-white" : "bg-white border border-black/10 text-[#AAAAAA]"
                      )}>
                        {s}
                      </div>
                      {s < 3 && <div className={cn("w-10 h-px transition-colors", step > s ? "bg-[#E31837]" : "bg-black/10")} />}
                    </div>
                  ))}
                  <span className="text-[#AAAAAA] text-xs ml-2">
                    {step === 1 ? "Your Car" : step === 2 ? "Service" : "Your Details"}
                  </span>
                </div>
              )}

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center py-10 gap-5">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.1 }}>
                      <CheckCircle className="w-16 h-16 text-[#E31837]" />
                    </motion.div>
                    <h3 className="text-[#0A0A0A] font-bold text-2xl" style={{ fontFamily: "var(--font-syne)" }}>Booking Received!</h3>
                    <p className="text-[#888888] text-sm max-w-xs">We've saved your details and will reach out on WhatsApp shortly.</p>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold px-7 py-3.5 rounded-full transition-colors mt-2">
                      <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                    </a>
                  </motion.div>
                ) : step === 1 ? (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-5">
                    <h3 className="text-[#0A0A0A] font-semibold text-lg">What car do you drive?</h3>
                    <div className="relative">
                      <select value={form.car} onChange={(e) => update("car", e.target.value)} className="w-full bg-white border border-black/10 text-[#0A0A0A] rounded-2xl px-5 py-4 text-sm appearance-none focus:outline-none focus:border-[#E31837]/50 transition-colors cursor-pointer">
                        <option value="">Select your car brand</option>
                        {CAR_BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAAAAA] pointer-events-none" />
                    </div>
                    <input type="text" placeholder="Car model (e.g. Creta, Fortuner)" value={form.message} onChange={(e) => update("message", e.target.value)} className="bg-white border border-black/10 text-[#0A0A0A] rounded-2xl px-5 py-4 text-sm placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#E31837]/50 transition-colors" />
                    <button onClick={() => form.car && setStep(2)} disabled={!form.car} className="flex items-center justify-center gap-2 bg-[#E31837] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FF3355] text-white font-semibold py-4 rounded-2xl transition-all">
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : step === 2 ? (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-5">
                    <h3 className="text-[#0A0A0A] font-semibold text-lg">What service do you need?</h3>
                    <div className="grid grid-cols-2 gap-2.5">
                      {SERVICES.map((s) => (
                        <button key={s.id} onClick={() => update("service", s.id)} className={cn(
                          "text-left p-4 rounded-2xl border text-sm transition-all",
                          form.service === s.id ? "border-[#E31837] bg-[#E31837]/05 text-[#0A0A0A] font-medium" : "border-black/08 text-[#555555] hover:border-black/20 bg-white"
                        )}>
                          {s.title}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setStep(1)} className="flex-1 border border-black/10 text-[#888888] py-4 rounded-2xl text-sm hover:border-black/20 transition-colors">Back</button>
                      <button onClick={() => form.service && setStep(3)} disabled={!form.service} className="flex-[2] flex items-center justify-center gap-2 bg-[#E31837] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FF3355] text-white font-semibold py-4 rounded-2xl transition-all">
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
                    <h3 className="text-[#0A0A0A] font-semibold text-lg">Almost there — your details</h3>
                    <input type="text" placeholder="Your name *" value={form.name} onChange={(e) => update("name", e.target.value)} className="bg-white border border-black/10 text-[#0A0A0A] rounded-2xl px-5 py-4 text-sm placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#E31837]/50 transition-colors" />
                    <input type="tel" placeholder="WhatsApp number *" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="bg-white border border-black/10 text-[#0A0A0A] rounded-2xl px-5 py-4 text-sm placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#E31837]/50 transition-colors" />
                    <input type="email" placeholder="Email (optional — for updates)" value={form.email} onChange={(e) => update("email", e.target.value)} className="bg-white border border-black/10 text-[#0A0A0A] rounded-2xl px-5 py-4 text-sm placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#E31837]/50 transition-colors" />
                    <p className="text-[#AAAAAA] text-xs">Your details are only used to get back to you. No spam, ever.</p>
                    <div className="flex gap-3">
                      <button onClick={() => setStep(2)} className="flex-1 border border-black/10 text-[#888888] py-4 rounded-2xl text-sm hover:border-black/20 transition-colors">Back</button>
                      <button onClick={handleSubmit} disabled={!form.name || !form.phone || loading} className="flex-[2] flex items-center justify-center gap-2 bg-[#E31837] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FF3355] text-white font-semibold py-4 rounded-2xl transition-all">
                        {loading ? "Sending..." : <><MessageCircle className="w-4 h-4" /> Book Now</>}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
