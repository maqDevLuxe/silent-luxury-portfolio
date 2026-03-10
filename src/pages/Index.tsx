import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import FeaturedIn from "@/components/landing/FeaturedIn";
import Philosophy from "@/components/landing/Philosophy";
import CoreServices from "@/components/landing/CoreServices";
import CaseStudies from "@/components/landing/CaseStudies";
import DesignProcess from "@/components/landing/DesignProcess";
import BeforeAfter from "@/components/landing/BeforeAfter";
import PackagingMockup from "@/components/landing/PackagingMockup";
import ImpactMetrics from "@/components/landing/ImpactMetrics";
import Manifesto from "@/components/landing/Manifesto";
import Awards from "@/components/landing/Awards";
import Reviews from "@/components/landing/Reviews";
import ContactFooter from "@/components/landing/ContactFooter";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <FeaturedIn />
      <Philosophy />
      <CoreServices />
      <CaseStudies />
      <DesignProcess />
      <BeforeAfter />
      <PackagingMockup />
      <ImpactMetrics />
      <Manifesto />
      <Awards />
      <Reviews />
      <ContactFooter />
    </main>
  );
};

export default Index;
