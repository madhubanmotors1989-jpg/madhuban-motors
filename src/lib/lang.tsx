"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "hi";
interface LangCtx { lang: Lang; toggle: () => void }

const LangContext = createContext<LangCtx>({ lang: "en", toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("mm-lang") as Lang | null;
    if (saved === "en" || saved === "hi") { setLang(saved); return; }
    if (navigator.language.startsWith("hi")) setLang("hi");
  }, []);

  const toggle = () =>
    setLang((prev) => {
      const next = prev === "en" ? "hi" : "en";
      localStorage.setItem("mm-lang", next);
      return next;
    });

  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

export const tr = {
  en: {
    eyebrow: "Ghaziabad & Delhi NCR · Trusted Since 1989 · MyTVS Authorized",
    h1: ["Your", "Car."],
    h2: ["Reimagined."],
    sub: "Ghaziabad की सबसे भरोसेमंद car accessories shop",
    address: "New Gandhi Nagar, Model Town, Ghaziabad · UP 201001",
    tagline: '"Genuine products. Honest advice. Precision installation."',
    cta1: "Book Free Consultation",
    cta2: "Call Now",
    urgency: "जवाब मिनटों में · Reply within minutes on WhatsApp",
    svcH1: "Car upgrades,",
    svcH2: "done right.",
    svcDesc: "Wired right. No rattles, ever. Fitted to last.",
    svcSub: "हर काम में सफ़ाई, हर बार।",
    svcCta: "Just WhatsApp us — हम बता देंगे",
    bookH1: "Tell Us About",
    bookH2: "Your Car",
    bookSub: "बताइए — हम बाकी संभाल लेंगे।",
    bookDesc: "Share your car and what you need. We reply on WhatsApp within minutes with options, pricing, and next steps.",
    bookPoints: [
      "Free consultation — कोई hidden charge नहीं",
      "WhatsApp reply within minutes",
      "Transparent quote before any work starts",
      "Pick-up & drop: Ghaziabad & Delhi NCR",
    ],
    bookLive: "जवाब मिनटों में",
    bookLive2: "· Reply within minutes",
  },
  hi: {
    eyebrow: "गाज़ियाबाद व दिल्ली NCR में 1989 से विश्वसनीय · MyTVS Authorized",
    h1: ["आपकी", "कार।"],
    h2: ["नए अंदाज़ में।"],
    sub: "गाज़ियाबाद की सबसे पुरानी और भरोसेमंद car accessories shop",
    address: "न्यू गांधी नगर, मॉडल टाउन, गाज़ियाबाद · UP 201001",
    tagline: '"असली सामान। ईमानदार सलाह। सटीक फिटिंग।"',
    cta1: "फ्री सलाह बुक करें",
    cta2: "अभी कॉल करें",
    urgency: "मिनटों में जवाब · WhatsApp पर तुरंत संपर्क",
    svcH1: "कार अपग्रेड,",
    svcH2: "सही तरीके से।",
    svcDesc: "सही वायरिंग। कोई खड़खड़ नहीं। टिकाऊ काम।",
    svcSub: "हर काम में सफ़ाई, हर बार।",
    svcCta: "बस WhatsApp करें — हम बता देंगे",
    bookH1: "बताइए अपनी",
    bookH2: "कार के बारे में",
    bookSub: "बताइए — हम बाकी संभाल लेंगे।",
    bookDesc: "अपनी कार और ज़रूरत बताएं। हम WhatsApp पर मिनटों में विकल्प और कीमत बताएंगे।",
    bookPoints: [
      "फ्री सलाह — कोई hidden charge नहीं",
      "मिनटों में WhatsApp जवाब",
      "काम शुरू करने से पहले पारदर्शी quote",
      "पिकअप व ड्रॉप: गाज़ियाबाद व दिल्ली NCR",
    ],
    bookLive: "जवाब मिनटों में",
    bookLive2: "· WhatsApp पर तुरंत जवाब",
  },
} as const;
