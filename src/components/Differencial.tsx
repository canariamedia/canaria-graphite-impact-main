const Differencial = () => {
  return (
    <section className="py-24 px-6 bg-card/30 animated-bg">
      <div className="max-w-6xl mx-auto fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text">
          Mostramos lo que otros no ven
        </h2>
        <p className="text-xl text-center text-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          No es solo publicar un diseño. Es construir reputación partido a partido. Cuando tus estadísticas se ven bien presentadas, la gente presta más atención y te toma más en serio.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-border/50 bg-background/40 backdrop-blur-sm p-8 rounded-xl fade-in-up transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/50">
            <div className="text-5xl mb-6">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Pre-partido (Matchday)</h3>
            <p className="text-muted-foreground leading-relaxed">
              Antes del partido, generamos expectativa. Mostramos lo importante de forma clara y con estilo, para que la gente sepa qué esperar.
            </p>
          </div>
          
          <div className="border border-border/50 bg-background/40 backdrop-blur-sm p-8 rounded-xl fade-in-up transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/50" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl mb-6">📊</div>
            <h3 className="text-2xl font-bold mb-4">Post-partido (Estadísticas)</h3>
            <p className="text-muted-foreground leading-relaxed">
              Después del partido, tus números cuentan la historia. Cuando los presentamos bien, la gente entiende mejor tu nivel y tu impacto real.
            </p>
          </div>
        </div>

        <p className="text-center text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-12">
          Si querés que se note que trabajás en serio, no solo que existís, esto es para vos.
        </p>
      </div>
    </section>
  );
};

export default Differencial;
