import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  portfolioItems,
  obtenerItemsPorCategoria,
  categoriasConfig,
  type CategoriaPortfolio,
  type PortfolioItem,
} from "@/data/portfolio";

// Categorías visibles en la landing (excluyendo "todos" que se muestra en la página completa)
const categoriasLanding: CategoriaPortfolio[] = ["futbolistas", "agentes"];

const PortfolioSection = () => {
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaPortfolio>("futbolistas");
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState<PortfolioItem | null>(null);
  const navigate = useNavigate();

  const trabajosFiltrados = useMemo(
    () => obtenerItemsPorCategoria(categoriaActiva),
    [categoriaActiva]
  );

  // Mostrar solo los primeros 6 trabajos en desktop/tablet
  const trabajosMostrados = useMemo(
    () => trabajosFiltrados.slice(0, 6),
    [trabajosFiltrados]
  );

  // Mostrar solo los primeros 2 trabajos en mobile
  const trabajosMobile = useMemo(
    () => trabajosFiltrados.slice(0, 2),
    [trabajosFiltrados]
  );

  const configActiva = categoriasConfig[categoriaActiva];

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setTrabajoSeleccionado(null);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <section id="trabajos" className="py-16 sm:py-24 px-4 sm:px-6 scroll-mt-24 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/50">Portfolio</p>
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold sm:font-bold tracking-tight bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 bg-clip-text text-transparent leading-[1.2] sm:leading-tight px-2">
            Nuestros trabajos
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Diseños que hablan por nosotros. Piezas pensadas para que jugadores y representantes se
            vean profesionales en todas sus redes.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-3 sm:pt-4 px-2">
            {categoriasLanding.map((categoria) => {
              const activa = categoriaActiva === categoria;
              return (
                <button
                  key={categoria}
                  onClick={() => setCategoriaActiva(categoria)}
                  type="button"
                  className={`rounded-full px-6 sm:px-8 py-2.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-300 border min-h-[44px] ${
                    activa
                      ? "border-white/80 bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.25)]"
                      : "border-white/10 text-white/60 hover:text-white hover:border-white/40"
                  }`}
                >
                  {categoriasConfig[categoria].label}
                </button>
              );
            })}
          </div>
          <p className="text-white/70 text-sm sm:text-base max-w-3xl mx-auto pt-3 sm:pt-4 px-4">
            {configActiva.descripcion}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Items visibles solo en mobile (primeros 2) */}
          {trabajosMobile.map((item, index) => {
            // Determinar el aspect ratio según el formato
            const aspectRatio = item.formato === "9:16" ? "aspect-[9/16]" : "aspect-[4/5]";
            
            return (
              <button
                key={item.id}
                onClick={() => setTrabajoSeleccionado(item)}
                type="button"
                className="sm:hidden group rounded-2xl bg-[#0b0b0f] border border-white/5 shadow-[0_15px_45px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(0,0,0,0.6)] hover:border-white/15 fade-in-up text-left"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl rounded-b-none">
                  <div className={`${aspectRatio} overflow-hidden bg-black flex items-center justify-center`}>
                    <img
                      src={item.image}
                      alt={item.player}
                      className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex flex-col gap-1">
                  <p className="text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/50">{item.category}</p>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{item.player}</h3>
                  <p className="text-white/60 text-xs sm:text-sm">{item.context}</p>
                </div>
              </button>
            );
          })}
          
          {/* Items visibles en desktop/tablet (todos los 6) */}
          {trabajosMostrados.map((item, index) => {
            // Determinar el aspect ratio según el formato
            const aspectRatio = item.formato === "9:16" ? "aspect-[9/16]" : "aspect-[4/5]";
            
            return (
              <button
                key={item.id}
                onClick={() => setTrabajoSeleccionado(item)}
                type="button"
                className="hidden sm:block group rounded-2xl bg-[#0b0b0f] border border-white/5 shadow-[0_15px_45px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(0,0,0,0.6)] hover:border-white/15 fade-in-up text-left"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl rounded-b-none">
                  <div className={`${aspectRatio} overflow-hidden bg-black flex items-center justify-center`}>
                    <img
                      src={item.image}
                      alt={item.player}
                      className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex flex-col gap-1">
                  <p className="text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/50">{item.category}</p>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{item.player}</h3>
                  <p className="text-white/60 text-xs sm:text-sm">{item.context}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Botón "Ver más trabajos" solo visible en mobile */}
        <div className="mt-8 sm:hidden flex justify-center px-4">
          <button
            type="button"
            onClick={() => navigate("/trabajos")}
            className="w-[85%] max-w-sm inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold bg-white text-black transition-all duration-300 hover:bg-white/95 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(255,255,255,0.35)] active:translate-y-0 min-h-[48px]"
          >
            Ver más trabajos
          </button>
        </div>

        {/* Botones CTA - solo visibles en desktop/tablet */}
        <div className="mt-10 sm:mt-12 hidden sm:flex flex-col items-center gap-4 sm:gap-6 w-full max-w-md mx-auto px-4">
          <button
            type="button"
            className="w-full inline-flex items-center justify-center rounded-full px-8 sm:px-10 py-4 sm:py-3 text-sm font-semibold bg-white text-black transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(255,255,255,0.25)] active:translate-y-0 border border-transparent hover:border-white/40 min-h-[48px]"
          >
            {configActiva.ctaLabel}
          </button>

          <button
            type="button"
            onClick={() => navigate("/trabajos")}
            className="w-full inline-flex items-center justify-center rounded-full px-8 py-3 sm:py-2 text-sm font-medium border border-white/20 text-white/80 hover:text-black hover:bg-white transition-all duration-300 hover:-translate-y-0.5 min-h-[44px]"
          >
            Ver más trabajos
          </button>
        </div>
      </div>

      {trabajoSeleccionado && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
          onClick={() => setTrabajoSeleccionado(null)}
        >
          <button
            aria-label="Cerrar"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white transition-colors text-3xl sm:text-2xl z-10 bg-black/50 rounded-full w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-black/70"
            onClick={() => setTrabajoSeleccionado(null)}
          >
            ×
          </button>
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={trabajoSeleccionado.image}
                alt={trabajoSeleccionado.player}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg sm:rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
