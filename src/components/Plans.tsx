import { Button } from "@/components/ui/button";

const Plans = () => {
  const plans = [
    {
      icon: '🎯',
      title: 'Partido a Partido',
      description: 'Para ese partido importante que no puede pasar desapercibido. Diseño puntual cuando realmente lo necesitás.',
      cta: 'Quiero este plan'
    },
    {
      icon: '📅',
      title: 'Mensual Proyección',
      description: 'Pre y post partido con tus estadísticas, todo el mes. Para mantener tu imagen activa y profesional.',
      cta: 'Potenciar mi mes'
    },
    {
      icon: '🤝',
      title: 'Representantes Pro',
      description: 'Si manejás varios jugadores, necesitás coherencia. Diseñamos para todos con un estilo que los une y te posiciona bien.',
      cta: 'Potenciar a mis jugadores'
    }
  ];

  return (
    <section id="planes" className="py-24 px-6 bg-card/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
          Planes para crecer,
          <br />
          no para llenar carpetas.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="border border-border/50 p-8 bg-secondary/20 transition-all duration-300 hover:border-accent/50 hover:translate-y-[-4px] fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-4xl mb-4">{plan.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 min-h-[120px]">
                {plan.description}
              </p>
              <Button 
                variant="outline" 
                className="w-full border-primary hover:bg-primary/10"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto">
          Los precios varían según cuántos jugadores manejás. Lo charlamos, lo definimos rápido y arrancamos.
        </p>
      </div>
    </section>
  );
};

export default Plans;
