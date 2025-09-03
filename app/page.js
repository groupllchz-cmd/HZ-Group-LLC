import About from "@/components/About";
import ContactBanner from "@/components/ContactBanner";
import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurProcess from "@/components/OurProcess";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About/>
      <OurProcess/>
      <CustomerReviews/>
      <ContactBanner/>
    </div>
  );
}
