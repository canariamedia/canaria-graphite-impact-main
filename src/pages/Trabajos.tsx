import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  portfolioItems,
  obtenerItemsPorCategoria,
  categoriasConfig,
  type CategoriaPortfolio,
  type PortfolioItem,
} from "@/data/portfolio";

const filtros: CategoriaPortfolio[] = [
  "futbolistas",
  "agentes",
];

const Trabajos = () => {
  const navigate = useNavigate();
  const [filtroActivo, setFiltroActivo] = useState<CategoriaPortfolio>("futbolistas");
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState<PortfolioItem | null>(null);

  const trabajosFiltrados = useMemo(
    () => obtenerItemsPorCategoria(filtroActivo),
    [filtroActivo]
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <header className="pt-28 pb-10 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">
            Portfolio completo
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent">
            Nuestro trabajo completo
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Una selección más amplia de nuestros diseños para futbolistas y representantes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-10 flex flex-wrap justify-center gap-3">
          {filtros.map((filtro) => {
            const activo = filtroActivo === filtro;
            return (
              <button
                key={filtro}
                type="button"
                onClick={() => setFiltroActivo(filtro)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 border ${
                  activo
                    ? "border-white/80 bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.25)]"
                    : "border-white/10 text-white/60 hover:text-white hover:border-white/40"
                }`}
              >
                {categoriasConfig[filtro].label}
              </button>
            );
          })}
        </div>
      </header>

      <main className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trabajosFiltrados.map((trabajo) => {
              // Determinar el aspect ratio según el formato
              const aspectRatio = trabajo.formato === "9:16" ? "aspect-[9/16]" : "aspect-[4/5]";
              
              return (
                <button
                  key={trabajo.id}
                  type="button"
                  onClick={() => setTrabajoSeleccionado(trabajo)}
                  className="group rounded-2xl bg-[#0b0b0f] border border-white/5 shadow-[0_15px_45px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(0,0,0,0.6)] hover:border-white/15 text-left overflow-hidden"
                >
                  <div className={`${aspectRatio} overflow-hidden bg-black flex items-center justify-center`}>
                    <img
                      src={trabajo.image}
                      alt={trabajo.player}
                      className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-1">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                      {trabajo.category}
                    </p>
                    <h2 className="text-base font-semibold text-white">{trabajo.player}</h2>
                    <p className="text-white/60 text-sm">{trabajo.context}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {trabajoSeleccionado && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setTrabajoSeleccionado(null)}
        >
          <button
            aria-label="Cerrar"
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors text-2xl"
            onClick={() => setTrabajoSeleccionado(null)}
          >
            ×
          </button>
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full sm:w-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center">
              <img
                src={trabajoSeleccionado.image}
                alt={trabajoSeleccionado.player}
                className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
      <SocialFloat />
      <WhatsAppFloat />
    </div>
  );
};

export default Trabajos;


