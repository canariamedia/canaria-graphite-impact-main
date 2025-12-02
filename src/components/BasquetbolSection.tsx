import { Button } from "@/components/ui/button";
import basquetHero from "@/assets/basquet-hero.jpg";

const BasquetbolSection = () => {
  return (
    <section id="basquetbol" className="relative min-h-screen flex items-center scroll-mt-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${basquetHero})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
          Básquetbol
        </h2>
        <p className="text-xl md:text-2xl text-foreground mb-16 max-w-3xl">
          En básquet se juega con intensidad. Tu imagen tiene que ir al mismo ritmo. Cada estadística, cada partido, cada momento importante merece verse bien.
        </p>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Jugadores */}
          <div className="bg-background/80 backdrop-blur-sm border border-border/50 p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/50">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Jugadores</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Si jugás con todo, tu imagen también tiene que ir con todo. Hacemos diseños que capturan esa intensidad: antes del partido, después con tus números, y en cada momento que importa.
            </p>
            <Button variant="outline" className="border-primary hover:bg-primary/10">
              Potenciar jugador
            </Button>
          </div>

          {/* Representantes */}
          <div className="bg-background/80 backdrop-blur-sm border border-border/50 p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/50">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Representantes</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Si manejás varios jugadores, necesitás que se vea orden y profesionalismo. Nosotros armamos esa coherencia visual que hace que tu trabajo se note.
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

export default BasquetbolSection;
