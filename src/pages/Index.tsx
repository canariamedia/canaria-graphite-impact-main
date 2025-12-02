import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import SectionDivider from "@/components/SectionDivider";
import FutbolSection from "@/components/FutbolSection";
// TODO: Rehabilitar sección de Básquet cuando lancemos ese servicio
// import BasquetbolSection from "@/components/BasquetbolSection";
import Differencial from "@/components/Differencial";
import PrePlansSection from "@/components/PrePlansSection";
import Plans from "@/components/Plans";
import PortfolioSection from "@/components/PortfolioSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PlansStickyBanner from "@/components/PlansStickyBanner";

// Componente de transición entre Trabajos y Planes
const TrabajosPlanesTransition = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold sm:font-semibold bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 bg-clip-text text-transparent tracking-tight leading-[1.2] sm:leading-tight px-2">
          ¿Te gustó lo que viste? Conocé nuestros planes.
        </h2>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <SectionDivider />
        {/* Nuevo orden: Hero → Prueba Social → Trabajos → Planes → Contacto */}
        <PortfolioSection />
        <TrabajosPlanesTransition />
        <Plans />
        <FinalCTA />
        {/* Secciones adicionales (ocultas del flujo principal pero disponibles si se necesitan) */}
        {/* <FutbolSection /> */}
        {/* TODO: Rehabilitar sección de Básquet cuando lancemos ese servicio */}
        {/* <BasquetbolSection /> */}
        {/* <Differencial /> */}
      </main>
      <Footer />
      <SocialFloat />
      <WhatsAppFloat />
      <PlansStickyBanner />
    </div>
  );
};

export default Index;
