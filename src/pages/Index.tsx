import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FutbolSection from "@/components/FutbolSection";
import BasquetbolSection from "@/components/BasquetbolSection";
import Differencial from "@/components/Differencial";
import Plans from "@/components/Plans";
import PortfolioSection from "@/components/PortfolioSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FutbolSection />
        <BasquetbolSection />
        <Differencial />
        <Plans />
        <PortfolioSection />
        <FinalCTA />
      </main>
      <Footer />
      <SocialFloat />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
