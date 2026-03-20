import Hero from "@/components/Hero";
import SectionPain from "@/components/SectionPain";
import SectionPortfolio from "@/components/SectionPortfolio";
import SectionSEO from "@/components/SectionSEO";
import SectionStats from "@/components/SectionStats";
import SectionOffer from "@/components/SectionOffer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionPain />
      <SectionPortfolio />
      <SectionSEO />
      <SectionStats />
      <SectionOffer />
      <Footer />
    </main>
  );
}
