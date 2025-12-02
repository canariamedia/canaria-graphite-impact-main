import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: 'futbol',
      title: 'Fútbol',
      subcards: [
        {
          title: 'Fútbol · Jugador',
          description: 'Cada partido suma. Creamos diseños que construyen tu imagen partido a partido: identidad, matchdays y estadísticas que muestran tu crecimiento real.',
          cta: 'Potenciar jugador'
        },
        {
          title: 'Fútbol · Representante',
          description: 'Cuando tus jugadores se ven bien, vos también. Hacemos diseños coherentes que muestran que hay estructura y trabajo serio detrás.',
          cta: 'Potenciar jugadores'
        }
      ]
    },
    {
      id: 'basquetbol',
      title: 'Básquetbol',
      subcards: [
        {
          title: 'Básquetbol · Jugador',
          description: 'Si jugás con todo, tu imagen también tiene que ir con todo. Cada punto, cada robo, cada triple merece verse bien.',
          cta: 'Potenciar jugador'
        },
        {
          title: 'Básquetbol · Representante',
          description: 'Si manejás varios jugadores, necesitás que se vea orden. Diseñamos para que tu trabajo serio se note de inmediato.',
          cta: 'Potenciar jugadores'
        }
      ]
    }
  ];

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text">
          Servicios
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Trabajamos en fútbol y básquetbol. Si sos jugador o representante, tenemos algo para vos.
        </p>
        
        <div className="space-y-6">
          {services.map((service) => (
            <div key={service.id} className="border border-border/50 overflow-hidden rounded-xl">
              <button
                onClick={() => toggleService(service.id)}
                className="w-full p-8 text-left bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 flex items-center justify-between hover:scale-[1.01] active:scale-[0.99]"
              >
                <h3 className="text-3xl font-bold">{service.title}</h3>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform duration-300 ${
                    expandedService === service.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-8 transition-all duration-300 ${
                expandedService === service.id ? 'block' : 'hidden'
              }`}>
                {service.subcards.map((subcard, index) => (
                  <div key={index} className="border border-border/50 p-6 bg-card/30 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <h4 className="text-xl font-bold mb-3">{subcard.title}</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {subcard.description}
                    </p>
                    <Button variant="outline" className="border-primary hover:bg-primary/10">
                      {subcard.cta}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
