import { Button } from "@/components/ui/button";
import futbolHero from "@/assets/futbol-hero.jpg";

const FutbolSection = () => {
  return (
    <section id="futbol" className="relative min-h-screen flex items-center scroll-mt-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${futbolHero})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
          Fútbol
        </h2>
        <p className="text-xl md:text-2xl text-foreground mb-16 max-w-3xl">
          Si jugás o representás en fútbol, tu imagen tiene que estar a la altura de tu nivel. Acá te ayudamos a lograrlo.
        </p>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Jugadores */}
          <div className="bg-background/80 backdrop-blur-sm border border-border/50 p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Jugadores</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cada partido es una oportunidad. Creamos diseños pre y post partido que muestran tu nivel real, con estadísticas que respaldan lo que hacés en la cancha.
            </p>
            <Button variant="outline" className="border-primary hover:bg-primary/10">
              Potenciar jugador
            </Button>
          </div>

          {/* Representantes */}
          <div className="bg-background/80 backdrop-blur-sm border border-border/50 p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Representantes</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cuando tus jugadores se ven profesionales, vos también. Diseñamos contenido coherente que demuestra que hay estructura y trabajo serio detrás.
            </p>
            <Button variant="outline" className="border-primary hover:bg-primary/10">
              Potenciar jugadores
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutbolSection;
