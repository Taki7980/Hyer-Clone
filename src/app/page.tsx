import Features from "@/components/Features";
import FlightManager from "@/components/FlightManager";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopDestination from "@/components/PopDestination";
import SmoothScroll from "@/components/SmoothScroll";



export default function Home() {
  return (
    <SmoothScroll>
      <div className="">
        <Navbar />
        <Hero />
        <Features/>
        <PopDestination/>
        <FlightManager/>
      </div>
    </SmoothScroll>
  );
}
