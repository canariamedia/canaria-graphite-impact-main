import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/videofondo.mp4";

const Hero = () => {
  const scrollToTrabajos = () => {
    const element = document.getElementById('trabajos');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPlans = () => {
    const element = document.getElementById('planes');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContacto = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-24 pt-24 sm:pt-28 overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        src={heroVideo}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div className="max-w-5xl mx-auto text-center fade-in-up z-10 relative space-y-4 sm:space-y-6 md:space-y-8 px-4">
        <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm text-white/70">Canaria Media · Diseño Deportivo</p>
        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold sm:font-bold tracking-tight bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 bg-clip-text text-transparent leading-[1.15] sm:leading-[1.1] md:leading-tight">
          Tu imagen también compite.
          <br />
          <span className="bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 bg-clip-text text-transparent">Nosotros la hacemos ganar.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-2 -mt-2 sm:mt-0">
          Diseño profesional para deportistas y representantes que necesitan verse a la altura de su carrera. Matchdays, estadísticas y contenido que abre puertas.
        </p>
        <div className="flex flex-col gap-4 sm:gap-3 md:gap-4 justify-center items-center pt-2 sm:pt-4 w-full max-w-md mx-auto">
          <Button 
            className="w-full bg-white text-[#050505] rounded-full px-10 sm:px-8 md:px-10 py-6 sm:py-5 md:py-6 text-base sm:text-sm md:text-base font-semibold shadow-[0_15px_35px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(255,255,255,0.3)] transition-all duration-300 uppercase tracking-wide"
            size="lg" 
            onClick={scrollToPlans}
          >
            Ver planes
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full text-base sm:text-sm md:text-base px-10 sm:px-8 md:px-10 py-6 sm:py-5 md:py-6 h-auto border-white/60 text-white rounded-full hover:bg-white/10 hover:shadow-[0_15px_35px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 transition-all duration-300"
            onClick={scrollToTrabajos}
          >
            Ver trabajos recientes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
