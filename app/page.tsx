import AboutYou from "@/components/AboutYou";
import Approach from "@/components/Approach";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HealthCare from "@/components/HealthCare";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhyWeLove from "@/components/WhyWeLove";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="
    bg-[#FCF7F3]"
    >
      <Navbar />
      <Hero />
      <HealthCare />
      <Approach />
      <Help />
      <WhyWeLove />
      <FAQ />
      <AboutYou />
      <Footer />
    </div>
  );
}
