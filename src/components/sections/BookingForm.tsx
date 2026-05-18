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
  const [form, setForm] = useState({
    car: "",
    service: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const buildWhatsAppMsg = () => {
    const svc = SERVICES.find((s) => s.id === form.service);
    return encodeURIComponent(
      `Hi Madhuban Motors!\n\nName: ${form.name}\nPhone: ${form.phone}\nCar: ${form.car}\nService: ${svc?.title || form.service}\n\n${form.message || "Please share availability for a consultation."}`
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {}
    setSubmitted(true);
    setLoading(false);
  };

  const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${buildWhatsAppMsg()}`;

  return (
    <section id="book" className="py-24 md:py-32 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
                Book Now
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
              Get Your Free
              <br />
              <span className="text-gradient">Consultation</span>
            </h2>
            <p className="text-[#9B9897] leading-relaxed mb-8">
              Tell us about your car and what you're looking for. We'll get back to you within minutes on WhatsApp with options and pricing — no spam, no pressure.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Free consultation — no hidden charges",
                "WhatsApp reply within minutes",
                "Transparent pricing before any work begins",
                "Pick-up & drop available in Ghaziabad",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-[#9B9897] text-sm">
                  <CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right: form */}
          <FadeUp delay={0.2}>
            <div className="bg-[#18181C] border border-white/[0.06] rounded-3xl p-8 relative overflow-hidden">
              {/* Gold accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-[#C9A84C]/05" />

              {/* Step indicator */}
              {!submitted && (
                <div className="flex items-center gap-2 mb-8">
                  {([1, 2, 3] as Step[]).map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={cn(
                          "w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300",
                          step >= s
                            ? "bg-[#C9A84C] text-[#0D0D0F]"
                            : "bg-[#222228] text-[#5A5856]"
                        )}
                      >
                        {s}
                      </div>
                      {s < 3 && <div className={cn("w-8 h-px transition-colors", step > s ? "bg-[#C9A84C]" : "bg-white/10")} />}
                    </div>
                  ))}
                  <span className="text-[#5A5856] text-xs ml-2">
                    {step === 1 ? "Your Car" : step === 2 ? "Service" : "Your Details"}
                  </span>
                </div>
              )}

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8 gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    >
                      <CheckCircle className="w-16 h-16 text-[#C9A84C]" />
                    </motion.div>
                    <h3 className="text-white font-bold text-2xl" style={{ fontFamily: "var(--font-syne)" }}>
                      Booking Received!
                    </h3>
                    <p className="text-[#9B9897] text-sm max-w-xs">
                      We've saved your details and will reach out on WhatsApp shortly. Click below to also message us directly.
                    </p>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold px-6 py-3 rounded-full transition-colors mt-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </a>
                  </motion.div>
                ) : step === 1 ? (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-5">
                    <h3 className="text-white font-semibold text-lg">What car do you drive?</h3>
                    <div className="relative">
                      <select
                        value={form.car}
                        onChange={(e) => update("car", e.target.value)}
                        className="w-full bg-[#222228] border border-white/08 text-white rounded-xl px-4 py-3.5 text-sm appearance-none focus:outline-none focus:border-[#C9A84C]/50 transition-colors cursor-pointer"
                      >
                        <option value="">Select your car brand</option>
                        {CAR_BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A5856] pointer-events-none" />
                    </div>
                    <input
                      type="text"
                      placeholder="Car model (e.g. Creta, Fortuner)"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="bg-[#222228] border border-white/08 text-white rounded-xl px-4 py-3.5 text-sm placeholder:text-[#5A5856] focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    />
                    <button
                      onClick={() => form.car && setStep(2)}
                      disabled={!form.car}
                      className="flex items-center justify-center gap-2 bg-[#C9A84C] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#E8C96A] text-[#0D0D0F] font-semibold py-3.5 rounded-xl transition-all"
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : step === 2 ? (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-5">
                    <h3 className="text-white font-semibold text-lg">What service do you need?</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {SERVICES.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => update("service", s.id)}
                          className={cn(
                            "text-left p-3 rounded-xl border text-sm transition-all",
                            form.service === s.id
                              ? "border-[#C9A84C] bg-[#C9A84C]/10 text-white"
                              : "border-white/08 text-[#9B9897] hover:border-white/20 bg-[#222228]"
                          )}
                        >
                          {s.title}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setStep(1)} className="flex-1 border border-white/10 text-[#9B9897] py-3.5 rounded-xl text-sm hover:border-white/20 transition-colors">
                        Back
                      </button>
                      <button
                        onClick={() => form.service && setStep(3)}
                        disabled={!form.service}
                        className="flex-[2] flex items-center justify-center gap-2 bg-[#C9A84C] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#E8C96A] text-[#0D0D0F] font-semibold py-3.5 rounded-xl transition-all"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
                    <h3 className="text-white font-semibold text-lg">Almost there — your details</h3>
                    <input
                      type="text"
                      placeholder="Your name *"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="bg-[#222228] border border-white/08 text-white rounded-xl px-4 py-3.5 text-sm placeholder:text-[#5A5856] focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp number *"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="bg-[#222228] border border-white/08 text-white rounded-xl px-4 py-3.5 text-sm placeholder:text-[#5A5856] focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email (optional — for updates)"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="bg-[#222228] border border-white/08 text-white rounded-xl px-4 py-3.5 text-sm placeholder:text-[#5A5856] focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    />
                    <p className="text-[#5A5856] text-xs">
                      Your details are only used to get back to you. No spam, ever.
                    </p>
                    <div className="flex gap-3">
                      <button onClick={() => setStep(2)} className="flex-1 border border-white/10 text-[#9B9897] py-3.5 rounded-xl text-sm hover:border-white/20 transition-colors">
                        Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={!form.name || !form.phone || loading}
                        className="flex-[2] flex items-center justify-center gap-2 bg-[#C9A84C] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#E8C96A] text-[#0D0D0F] font-semibold py-3.5 rounded-xl transition-all"
                      >
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
