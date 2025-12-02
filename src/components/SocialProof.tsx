import { Shield, Layers, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cards = [
    {
      icon: Shield,
      title: "Presencia profesional en cada partido",
      text: "Más de 150 matchdays y piezas pre y post partido diseñadas a medida, reforzando la presencia digital de futbolistas en torneos locales e internacionales.",
    },
    {
      icon: Layers,
      title: "Identidad visual para sumar valor real",
      text: "Representantes y agencias usan nuestros diseños para posicionar mejor a sus futbolistas en procesos de scouting, negociación y comunicación con clubes.",
    },
    {
      icon: CheckCircle,
      title: "Contenido coherente que potencia carreras",
      text: "Cada pieza gráfica forma parte de un plan. Diferencia al jugador, le da solidez a su imagen y aumenta su visibilidad en redes y presentaciones.",
    },
  ];

  return (
    <section 
      id="nuestro-impacto"
      ref={sectionRef}
      className="py-24 sm:py-28 md:py-36 px-4 sm:px-6 bg-black text-white relative overflow-hidden scroll-mt-24"
    >
      {/* Highlight difuso profesional detrás del título */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] sm:h-[400px] pointer-events-none">
        <div 
          className="absolute inset-0 rounded-full blur-2xl sm:blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(220, 220, 220, 0.03) 0%, rgba(180, 180, 180, 0.02) 30%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/50 text-center mb-4 sm:mb-6 px-2">
          IMPACTO REAL EN DISEÑO DEPORTIVO
        </p>

        {/* Título principal con subrayado minimalista */}
        <div className="mb-2 sm:mb-3 md:mb-4 flex flex-col items-center">
          <div className="relative w-full flex flex-col items-center">
            <h2 
              className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold sm:font-bold tracking-tight bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 bg-clip-text text-transparent text-center leading-[1.2] sm:leading-tight px-2 transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Resultados que hablan por sí solos.
            </h2>
            
            {/* Subrayado minimalista - línea fina con degradado */}
            <div 
              className={`mt-6 sm:mt-7 md:mt-8 transition-all duration-1000 delay-200 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-2'
              }`}
            >
              <div 
                className="h-px"
                style={{
                  width: '65%',
                  maxWidth: '500px',
                  background: 'linear-gradient(to right, transparent, rgba(220, 220, 220, 0.15), rgba(255, 255, 255, 0.2), rgba(220, 220, 220, 0.15), transparent)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Subtítulo con separación reducida */}
        <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mb-24 sm:mb-28 md:mb-32 text-center leading-relaxed px-2 -mt-4 sm:-mt-6">
          Jugadores de Primera División, juveniles con proyección y representantes confían en nuestro diseño deportivo e identidad visual para potenciar su imagen y sus carreras.
        </p>

        {/* Tres columnas/tarjetas con animaciones sutiles y hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-14 md:gap-16 mb-24 sm:mb-28 md:mb-32 relative">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className={`text-center space-y-5 sm:space-y-6 relative group transition-all duration-700 ease-out md:hover:scale-[1.02] md:hover:shadow-lg md:hover:shadow-white/5 md:hover:border-white/10 border border-transparent rounded-xl p-6 sm:p-8 flex flex-col min-h-[280px] sm:min-h-[300px] ${
                  isVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 150}ms` 
                }}
              >
                {/* Separador vertical entre columnas (solo en desktop) */}
                {index > 0 && (
                  <div 
                    className="hidden md:block absolute left-0 top-0 bottom-0 w-px"
                    style={{ backgroundColor: 'rgba(27, 27, 27, 0.3)' }}
                  />
                )}
                
                {/* Contenedor del icono más grande */}
                <div className="flex justify-center mb-4 relative flex-shrink-0">
                  {/* Halo sutil detrás del icono */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle, rgba(220, 220, 220, 0.05) 0%, transparent 60%)',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      opacity: 0.5,
                    }}
                  />
                  
                  {/* Icono 20% más grande con animación sutil */}
                  <div className="relative transition-transform duration-300 group-hover:scale-105">
                    <IconComponent 
                      size={31} 
                      className="text-white/90 relative z-10 transition-opacity duration-300" 
                      strokeWidth={1.5}
                      style={{ opacity: 0.9 }}
                    />
                  </div>
                </div>

                {/* Título con más weight y claridad */}
                <h3 
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white transition-colors duration-300 flex-shrink-0"
                  style={{ letterSpacing: '0.01em' }}
                >
                  {card.title}
                </h3>
                
                {/* Texto */}
                <p className="text-sm sm:text-base text-white/70 leading-relaxed flex-grow">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Frase final mejorada */}
        <p 
          className={`text-xl sm:text-2xl md:text-3xl font-medium text-white text-center max-w-3xl mx-auto px-2 transition-all duration-1000 delay-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            letterSpacing: '0.02em',
            marginTop: '3rem',
            marginBottom: '2rem',
            paddingBottom: '1rem',
          }}
        >
          Cuando la imagen acompaña al rendimiento, el crecimiento deja de ser casualidad.
        </p>
      </div>

      {/* Fade-to-black en la parte inferior para transición */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
    </section>
  );
};

export default SocialProof;
