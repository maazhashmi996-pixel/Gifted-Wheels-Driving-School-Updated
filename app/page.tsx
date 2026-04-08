import Contacts from "@/components/Sections/Contact";
import Features from "@/components/Sections/feature";
import Hero from "@/components/Sections/hero";
import Pricing from "@/components/Sections/Pricing";
import RoadTest from "@/components/Sections/RoadTest";
import Services from "@/components/Sections/Services";
import { Feature } from "framer-motion";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <RoadTest />
      <Pricing />
      <Contacts />
    </div>
  );
}
