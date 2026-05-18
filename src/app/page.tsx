import { Navbar } from "@/components/layout/Navbar";
import { MobileBar } from "@/components/layout/MobileBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reviews } from "@/components/sections/Reviews";
import { BookingForm } from "@/components/sections/BookingForm";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Brands />
        <Services />
        <HowItWorks />
        <About />
        <Gallery />
        <Testimonials />
        <Reviews />
        <BookingForm />
        <Location />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
