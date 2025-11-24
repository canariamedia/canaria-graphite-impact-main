import { useState } from "react";

const DisciplineSelector = () => {
  const [, setSelectedDiscipline] = useState<string | null>(null);

  const disciplines = [
    {
      id: 'futbol',
      title: 'Fútbol',
      description: 'Identidad visual para jugadores y representantes que compiten en serio.',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80'
    },
    {
      id: 'basquetbol',
      title: 'Básquetbol',
      description: 'Cada punto y cada jugada también merecen una estética que lo respalde.',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80'
    }
  ];

  const handleClick = (id: string) => {
    setSelectedDiscipline(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="trabajos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Seleccioná una disciplina para ver ejemplos reales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {disciplines.map((discipline, index) => (
            <button
              key={discipline.id}
              onClick={() => handleClick(discipline.id)}
              className="group relative overflow-hidden border border-border/50 transition-all duration-500 hover:border-accent hover:scale-[1.02] text-left fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-96">
                <img
                  src={discipline.image}
                  alt={discipline.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold mb-3">{discipline.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {discipline.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisciplineSelector;
