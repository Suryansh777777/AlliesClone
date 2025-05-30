import Approach from "@/components/Approach";
import HealthCare from "@/components/HealthCare";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HealthCare />
      <Approach />
    </div>
  );
}
