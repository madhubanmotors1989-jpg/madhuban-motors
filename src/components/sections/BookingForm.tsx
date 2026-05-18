"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { CheckCircle, MessageCircle, ChevronDown, Globe } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { FadeUp } from "@/components/ui/FadeUp";
import { useLang } from "@/lib/lang";
import { cn } from "@/lib/cn";

const CAR_BRANDS = [
  "Maruti Suzuki", "Hyundai", "Tata", "Mahindra", "Kia",
  "Toyota", "Honda", "Volkswagen", "Skoda", "MG", "Other",
];

const T = {
  en: {
    toggleBtn: "हिंदी में देखें",
    eyebrow: "Book Now",
    h1: "Tell Us About",
    h2: "Your Car",
    sub: "Share your details. We reply on WhatsApp within minutes.",
    points: [
      "Free consultation — no hidden charges",
      "WhatsApp reply within minutes",
      "Transparent quote before work starts",
      "Pick-up & drop: Ghaziabad & Delhi NCR",
    ],
    liveLabel: "Live team",
    liveDesc: "· Reply within minutes",
    brandLabel: "Your Car Brand",
    brandPlaceholder: "Select car brand",
    modelLabel: "Car Model",
    modelOptional: "optional",
    modelPlaceholder: "e.g. Creta, Fortuner, Seltos...",
    servicesLabel: "Services Needed",
    servicesHint: "tap all that apply",
    notSure: "Not sure yet — just ask",
    nameLabel: "Your Name",
    namePlaceholder: "Rahul Sharma",
    phoneLabel: "WhatsApp Number",
    phonePlaceholder: "+91 98765 43210",
    emailLabel: "Email",
    emailPlaceholder: "rahul@gmail.com",
    submit: "Send on WhatsApp",
    sending: "Sending...",
    noSpam: "No spam. No cold calls. Ever.",
    successTitle: "Booking Received!",
    successSub: "We will reach out on WhatsApp shortly.",
    openWA: "Open WhatsApp Now",
  },
  hi: {
    toggleBtn: "Switch to English",
    eyebrow: "अभी बुक करें",
    h1: "बताइए अपनी",
    h2: "कार के बारे में",
    sub: "जानकारी दें। हम WhatsApp पर मिनटों में जवाब देते हैं।",
    points: [
      "फ्री सलाह — कोई hidden charge नहीं",
      "मिनटों में WhatsApp जवाब",
      "काम शुरू करने से पहले पारदर्शी quote",
      "पिकअप व ड्रॉप: गाज़ियाबाद व दिल्ली NCR",
    ],
    liveLabel: "टीम ऑनलाइन",
    liveDesc: "· मिनटों में जवाब",
    brandLabel: "आपकी कार का ब्रांड",
    brandPlaceholder: "कार ब्रांड चुनें",
    modelLabel: "कार मॉडल",
    modelOptional: "वैकल्पिक",
    modelPlaceholder: "जैसे: Creta, Fortuner, Seltos...",
    servicesLabel: "कौन सी सेवा चाहिए",
    servicesHint: "जितनी चाहें चुनें",
    notSure: "अभी पक्का नहीं — बस पूछना है",
    nameLabel: "आपका नाम",
    namePlaceholder: "राहुल शर्मा",
    phoneLabel: "WhatsApp नंबर",
    phonePlaceholder: "+91 98765 43210",
    emailLabel: "ईमेल",
    emailPlaceholder: "rahul@gmail.com",
    submit: "WhatsApp पर भेजें",
    sending: "भेज रहे हैं...",
    noSpam: "कोई spam नहीं। कोई cold call नहीं।",
    successTitle: "बुकिंग मिल गई!",
    successSub: "हम जल्द ही WhatsApp पर संपर्क करेंगे।",
    openWA: "WhatsApp खोलें",
  },
};

export function BookingForm() {
  const { lang, toggle } = useLang();
  const tx = T[lang];

  const [form, setForm] = useState({
    car: "", carModel: "", services: [] as string[],
    name: "", phone: "", email: "", notSure: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (key: keyof typeof form, value: string | string[] | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleService = (id: string) =>
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));

  const buildWAMsg = () => {
    const svc = form.notSure
      ? "Not sure yet — needs advice"
      : form.services.map((id) => SERVICES.find((s) => s.id === id)?.title).filter(Boolean).join(", ");
    return encodeURIComponent(
      `Hi Madhuban Motors!\n\nName: ${form.name}\nPhone: ${form.phone}\nCar: ${form.car}${form.carModel ? " " + form.carModel : ""}\nServices: ${svc || "General enquiry"}\n\nPlease share availability.`
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
    <section id="book" className="py-28 md:py-36 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Language toggle */}
        <div className="flex justify-center mb-16">
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-white/20 hover:border-[#F05A22] text-white/60 hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            <Globe className="w-4 h-4" />
            {tx.toggleBtn}
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <FadeUp>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#F05A22]" />
              <span className="text-[#F05A22] text-xs font-semibold tracking-[0.3em] uppercase">{tx.eyebrow}</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}
            >
              {tx.h1}
              <br />
              <span className="text-gradient">{tx.h2}</span>
            </h2>
            <p className="text-white/40 text-base mb-14 leading-relaxed">{tx.sub}</p>

            <div className="flex flex-col gap-5 mb-14">
              {tx.points.map((point) => (
                <div key={point} className="flex items-start gap-3 text-white/50 text-sm">
                  <div className="w-4 h-4 rounded-full border border-[#F05A22]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-2.5 h-2.5 text-[#F05A22]" />
                  </div>
                  {point}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 p-4 rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/05">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse flex-shrink-0" />
              <span className="text-white/50 text-sm">
                <span className="font-semibold text-white">{tx.liveLabel}</span>{tx.liveDesc}
              </span>
            </div>
          </FadeUp>

          {/* Right: form card */}
          <FadeUp delay={0.2}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-12 flex flex-col items-center text-center gap-5"
                >
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.1 }}>
                    <CheckCircle className="w-14 h-14 text-[#F05A22]" />
                  </motion.div>
                  <h3 className="text-[#0A1628] font-black text-2xl" style={{ fontFamily: "var(--font-syne)" }}>{tx.successTitle}</h3>
                  <p className="text-[#888] text-sm max-w-xs">{tx.successSub}</p>
                  <a href={waLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold px-8 py-4 rounded-full transition-colors mt-2"
                  >
                    <MessageCircle className="w-5 h-5" /> {tx.openWA}
                  </a>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-3xl p-8 md:p-10">
                  <div className="flex flex-col gap-6">

                    <div>
                      <label className="text-[#0A1628] text-sm font-semibold mb-2 block">{tx.brandLabel}</label>
                      <div className="relative">
                        <select
                          value={form.car}
                          onChange={(e) => update("car", e.target.value)}
                          className="w-full bg-[#F7F7F7] border border-black/08 text-[#0A0A0A] rounded-xl px-5 py-4 text-sm appearance-none focus:outline-none focus:border-[#F05A22]/50 transition-colors cursor-pointer"
                        >
                          <option value="">{tx.brandPlaceholder}</option>
                          {CAR_BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAA] pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[#0A1628] text-sm font-semibold mb-2 block">
                        {tx.modelLabel} <span className="text-[#AAA] font-normal">({tx.modelOptional})</span>
                      </label>
                      <input
                        type="text"
                        placeholder={tx.modelPlaceholder}
                        value={form.carModel}
                        onChange={(e) => update("carModel", e.target.value)}
                        className="w-full bg-[#F7F7F7] border border-black/08 text-[#0A0A0A] rounded-xl px-5 py-4 text-sm placeholder:text-[#CCC] focus:outline-none focus:border-[#F05A22]/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[#0A1628] text-sm font-semibold mb-3 block">
                        {tx.servicesLabel} <span className="text-[#AAA] font-normal">({tx.servicesHint})</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES.map((s) => {
                          const selected = form.services.includes(s.id);
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => { toggleService(s.id); update("notSure", false); }}
                              className={cn(
                                "px-3.5 py-2 rounded-full border text-xs font-medium transition-all",
                                selected
                                  ? "border-[#F05A22] bg-[#F05A22] text-white"
                                  : "border-black/10 text-[#555] hover:border-[#F05A22]/40 hover:text-[#F05A22] bg-white"
                              )}
                            >
                              {s.title}
                            </button>
                          );
                        })}
                        <button
                          type="button"
                          onClick={() => { update("notSure", !form.notSure); update("services", []); }}
                          className={cn(
                            "px-3.5 py-2 rounded-full border text-xs font-medium transition-all italic",
                            form.notSure
                              ? "border-[#F05A22] bg-[#F05A22] text-white"
                              : "border-dashed border-black/15 text-[#AAA] hover:border-[#F05A22]/40 bg-white"
                          )}
                        >
                          {tx.notSure}
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-black/05 pt-1" />

                    <div>
                      <label className="text-[#0A1628] text-sm font-semibold mb-2 block">{tx.nameLabel}</label>
                      <input type="text" placeholder={tx.namePlaceholder} value={form.name} onChange={(e) => update("name", e.target.value)}
                        className="w-full bg-[#F7F7F7] border border-black/08 text-[#0A0A0A] rounded-xl px-5 py-4 text-sm placeholder:text-[#CCC] focus:outline-none focus:border-[#F05A22]/50 transition-colors" />
                    </div>
                    <div>
                      <label className="text-[#0A1628] text-sm font-semibold mb-2 block">{tx.phoneLabel}</label>
                      <input type="tel" placeholder={tx.phonePlaceholder} value={form.phone} onChange={(e) => update("phone", e.target.value)}
                        className="w-full bg-[#F7F7F7] border border-black/08 text-[#0A0A0A] rounded-xl px-5 py-4 text-sm placeholder:text-[#CCC] focus:outline-none focus:border-[#F05A22]/50 transition-colors" />
                    </div>
                    <div>
                      <label className="text-[#0A1628] text-sm font-semibold mb-2 block">
                        {tx.emailLabel} <span className="text-[#AAA] font-normal">({tx.modelOptional})</span>
                      </label>
                      <input type="email" placeholder={tx.emailPlaceholder} value={form.email} onChange={(e) => update("email", e.target.value)}
                        className="w-full bg-[#F7F7F7] border border-black/08 text-[#0A0A0A] rounded-xl px-5 py-4 text-sm placeholder:text-[#CCC] focus:outline-none focus:border-[#F05A22]/50 transition-colors" />
                    </div>

                    <motion.button
                      onClick={handleSubmit}
                      disabled={!canSubmit || loading}
                      whileHover={{ scale: canSubmit ? 1.01 : 1 }}
                      whileTap={{ scale: canSubmit ? 0.98 : 1 }}
                      className="flex items-center justify-center gap-2 bg-[#F05A22] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FF7040] text-white font-bold py-4 rounded-2xl transition-all text-sm mt-1"
                    >
                      {loading ? tx.sending : <><MessageCircle className="w-4 h-4" /> {tx.submit}</>}
                    </motion.button>
                    <p className="text-[#CCC] text-xs text-center">{tx.noSpam}</p>
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
