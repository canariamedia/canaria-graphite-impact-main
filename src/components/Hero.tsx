import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToTrabajos = () => {
    const element = document.getElementById('trabajos');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContacto = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 animated-bg">
      <div className="max-w-5xl mx-auto text-center fade-in-up z-10 relative">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight gradient-text">
          Hay talento.
          <br />
          Nosotros hacemos que se vea.
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Cuando un jugador tiene nivel pero su imagen no lo refleja, ahí entramos nosotros. Creamos diseños que muestran lo que realmente vale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-base px-10 py-6 h-auto"
            onClick={scrollToTrabajos}
          >
            Ver trabajos
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-base px-10 py-6 h-auto border-primary hover:bg-primary/10"
            onClick={scrollToContacto}
          >
            Contame tu proyecto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
