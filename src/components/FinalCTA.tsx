const FinalCTA = () => {
  // Enlace de WhatsApp con mensaje personalizado
  const mensaje = "Hola, ¿cómo están? Vi el botón 'Quiero impulsar mi imagen' en la web y quiero saber qué opciones tienen para mejorar mi presencia visual. ¿Qué info les paso?";
  const whatsappLink = `https://wa.me/59897128073?text=${encodeURIComponent(mensaje)}`;
  const emailLink = "mailto:canaria.media0@gmail.com";

  return (
    <section id="contacto" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título principal */}
        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold sm:font-bold mb-6 sm:mb-8 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 bg-clip-text text-transparent tracking-tight leading-[1.2] sm:leading-tight px-2">
          Hagamos que tu imagen juegue a tu favor.
        </h2>
        
        {/* Párrafo descriptivo */}
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2">
          Contanos en qué jugador, proyecto o partido te gustaría enfocarte, y te preparamos una propuesta clara ese mismo día. Es simple, rápido y sin vueltas.
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-2">
          {/* Botón principal - WhatsApp */}
          <div className="w-full sm:w-auto">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto rounded-full px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-semibold bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:bg-white/95 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(255,255,255,0.35)] transition-all duration-300 min-h-[44px]"
            >
              Quiero impulsar mi imagen
            </a>
            <p className="text-xs text-white/50 mt-2">
              Respondemos en menos de 24 horas.
            </p>
          </div>

          {/* Botón secundario - Email */}
          <a
            href={emailLink}
            className="inline-flex items-center justify-center w-full sm:w-auto rounded-full px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-semibold bg-transparent border-2 border-white text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 min-h-[44px]"
          >
            Contactanos por mail
          </a>
        </div>

        {/* Texto de autoridad / beneficios */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 px-2">
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Trabajamos con jugadores de Primera y juveniles con proyección, además de representantes que buscan coherencia visual para su equipo.
            <br />
            Cada diseño es 100% personalizado y pensado para mostrar lo que realmente valés.
          </p>
          
          {/* Cierre emocional */}
          <p className="text-base sm:text-lg text-white/90 font-medium">
            Si tenés nivel, que se note. Lo visual también juega.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
