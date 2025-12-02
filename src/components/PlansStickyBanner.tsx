import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const PlansStickyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClosed) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

      // Mostrar cuando el usuario haya scrolleado el 70%
      if (scrollPercentage >= 70 && !isClosed) {
        setIsVisible(true);
      } else if (scrollPercentage < 70) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar al cargar

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClosed]);

  const scrollToPlans = () => {
    const planesSection = document.getElementById("planes");
    if (planesSection) {
      planesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false);
  };

  if (!isVisible || isClosed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-20 md:pb-4 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <div className="bg-black/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl p-3 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 animate-in slide-in-from-bottom duration-300">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-white text-sm md:text-base font-medium">
              ¿Querés mejorar tu imagen este mes?
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
            <Button
              onClick={scrollToPlans}
              className="flex-1 sm:flex-none bg-white text-black hover:bg-white/90 transition-all duration-300 text-sm md:text-base whitespace-nowrap min-h-[44px]"
            >
              Ver planes
            </Button>
            <button
              onClick={handleClose}
              className="text-white/60 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Cerrar banner"
            >
              <X size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansStickyBanner;

