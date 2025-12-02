import { Button } from "@/components/ui/button";

const Plans = () => {
  const plans = [
    {
      icon: '🎯',
      title: 'Partido a Partido',
      description: 'Para ese partido que no puede quedar sin destacar. Rápido, prolijo y resuelto en el instante. Cuando necesitás que se note tu nivel, acá estamos.',
      cta: 'Lo quiero para mi próximo partido'
    },
    {
      icon: '📅',
      title: 'Plan Mensual',
      description: 'Para jugadores que quieren mostrarse con constancia. Pre y post partido con estadísticas, todo el mes. Genera una presencia visual que habla por vos.',
      cta: 'Quiero potenciar mi mes'
    },
    {
      icon: '🤝',
      title: 'Representantes Pro',
      description: 'Para representantes que buscan coherencia visual entre sus jugadores. Refuerza tu credibilidad y mejora cómo se ve tu equipo completo.',
      cta: 'Potenciemos a mis jugadores'
    }
  ];

  return (
    <section id="planes" className="py-16 sm:py-24 px-4 sm:px-6 bg-card/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto fade-in">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold sm:font-bold mb-3 sm:mb-4 text-center bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 bg-clip-text text-transparent tracking-tight leading-[1.2] sm:leading-tight px-2">
          Diseños que te posicionan
          <br />
          donde querés estar.
        </h2>
        
        <p className="text-center text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto mt-4 sm:mt-6 mb-12 sm:mb-16 px-2">
          No son plantillas genéricas. Son diseños que muestran tu nivel, tu actividad y tu proyección. Nosotros hacemos el trabajo fácil y ordenado para que vos solo te preocupes por jugar o representar.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 mb-8 sm:mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="border border-border/50 p-6 sm:p-8 bg-secondary/20 rounded-xl transition-all duration-300 hover:border-accent/50 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-accent/10 hover:scale-[1.02] fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{plan.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{plan.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base">
                {plan.description}
              </p>
              {plan.title === 'Partido a Partido' ? (
                <a
                  href="https://wa.me/59897128073?text=Hola%2C%20%C2%BFtodo%20bien%3F%20Vi%20el%20plan%20Partido%20a%20Partido%20en%20la%20web%20y%20quiero%20el%20dise%C3%B1o%20para%20mi%20pr%C3%B3ximo%20partido.%20%C2%BFQu%C3%A9%20les%20tengo%20que%20pasar%20para%20arrancar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center border border-primary hover:bg-primary/10 text-sm sm:text-base py-6 sm:py-2 rounded-md transition-all duration-300"
                >
                  {plan.cta}
                </a>
              ) : plan.title === 'Plan Mensual' ? (
                <a
                  href="https://wa.me/59897128073?text=Hola%2C%20%C2%BFtodo%20bien%3F%20Me%20interesa%20el%20Plan%20Mensual%20para%20mejorar%20mi%20presencia%20este%20mes.%20%C2%BFC%C3%B3mo%20lo%20podemos%20organizar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center border border-primary hover:bg-primary/10 text-sm sm:text-base py-6 sm:py-2 rounded-md transition-all duration-300"
                >
                  {plan.cta}
                </a>
              ) : (
                <a
                  href="https://wa.me/59897128073?text=Hola%2C%20%C2%BFtodo%20bien%3F%20Me%20interesa%20el%20plan%20Representantes%20Pro.%20Quiero%20mejorar%20la%20presencia%20visual%20de%20mis%20jugadores%20y%20entender%20c%C3%B3mo%20podr%C3%ADamos%20organizarlo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center border border-primary hover:bg-primary/10 text-sm sm:text-base py-6 sm:py-2 rounded-md transition-all duration-300"
                >
                  {plan.cta}
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs sm:text-sm max-w-2xl mx-auto px-4">
          Los precios dependen del volumen que manejás. Lo vemos juntos y arrancamos sin vueltas.
        </p>
      </div>
    </section>
  );
};

export default Plans;
