import Navbar from "@/components/Navbar";
import Deals from "@/pages/Deals";
import Hero from "@/pages/Hero";
import Popular from "@/pages/Popular";
import Vehicles from "@/pages/Vehicles";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vehicles />
      <Popular />
      <Deals />
    </>
  );
}
