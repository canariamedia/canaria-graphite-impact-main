const Methodology = () => {
  const steps = [
    "Charlamos rápido: qué necesitás y para quién",
    "Definimos tu estilo visual, sin vueltas",
    "Diseñamos pre y post partido con tus números reales",
    "Te pasamos todo listo para publicar y ajustamos lo que haga falta",
    "Cada mes revisamos qué funcionó y qué podemos mejorar",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Cómo lo hacemos
        </h2>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex items-start gap-6 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="text-accent text-lg font-bold">{index + 1}</span>
              </div>
              <p className="text-lg leading-relaxed pt-2">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
