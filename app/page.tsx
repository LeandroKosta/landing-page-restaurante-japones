import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import ReservationSection from "@/components/ReservationSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ConceptSection />
        <ExperiencesSection />
        <ReviewsSection />
        <GallerySection />
        <ReservationSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
