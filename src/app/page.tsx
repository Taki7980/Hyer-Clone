import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="">
        <Navbar />
        <Hero />
        <Features/>
      </div>
    </SmoothScroll>
  );
}
