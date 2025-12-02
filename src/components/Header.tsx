import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // Si estamos en otra página, navegar a home primero
    if (location.pathname !== "/") {
      navigate("/");
      // Esperar un poco para que la navegación se complete antes de hacer scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTrabajosClick = () => {
    if (location.pathname === "/trabajos") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("trabajos");
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate("/trabajos");
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (id?: string) => {
    if (id) {
      scrollToSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 bg-background/80 backdrop-blur-sm border-b border-border/50 fade-in">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => {
              scrollToTop();
              setIsMobileMenuOpen(false);
            }} 
            className="hover:opacity-80 transition-all duration-300 hover:scale-105 rounded-lg p-1"
          >
            <img src={logo} alt="Canaria Media" className="h-10 sm:h-12" />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 text-sm font-semibold">
            <button 
              onClick={scrollToTop} 
              className="hover:text-muted-foreground transition-all duration-300 rounded-lg px-3 py-1.5 hover:bg-accent/10 hover:scale-105"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('nuestro-impacto')} 
              className="hover:text-muted-foreground transition-all duration-300 rounded-lg px-3 py-1.5 hover:bg-accent/10 hover:scale-105"
            >
              Nuestro impacto
            </button>
            {/* TODO: Rehabilitar sección de Básquet cuando lancemos ese servicio */}
            {/* <button 
              onClick={() => scrollToSection('basquetbol')} 
              className="hover:text-muted-foreground transition-all duration-300 rounded-lg px-3 py-1.5 hover:bg-accent/10 hover:scale-105"
            >
              Básquetbol
            </button> */}
            <button 
              onClick={() => scrollToSection('planes')} 
              className="hover:text-muted-foreground transition-all duration-300 rounded-lg px-3 py-1.5 hover:bg-accent/10 hover:scale-105"
            >
              Planes
            </button>
            <button 
              onClick={handleTrabajosClick}
              className="hover:text-muted-foreground transition-all duration-300 rounded-lg px-3 py-1.5 hover:bg-accent/10 hover:scale-105"
            >
              Trabajos
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="hover:text-muted-foreground transition-all duration-300 rounded-lg px-3 py-1.5 hover:bg-accent/10 hover:scale-105"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/80 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full pt-20 px-6">
              <button
                onClick={() => {
                  scrollToTop();
                  setIsMobileMenuOpen(false);
                }}
                className="text-white text-left py-4 text-lg font-semibold border-b border-white/10 hover:text-white/80 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => handleNavClick('nuestro-impacto')}
                className="text-white text-left py-4 text-lg font-semibold border-b border-white/10 hover:text-white/80 transition-colors"
              >
                Nuestro impacto
              </button>
              {/* TODO: Rehabilitar sección de Básquet cuando lancemos ese servicio */}
              {/* <button
                onClick={() => handleNavClick('basquetbol')}
                className="text-white text-left py-4 text-lg font-semibold border-b border-white/10 hover:text-white/80 transition-colors"
              >
                Básquetbol
              </button> */}
              <button
                onClick={() => handleNavClick('planes')}
                className="text-white text-left py-4 text-lg font-semibold border-b border-white/10 hover:text-white/80 transition-colors"
              >
                Planes
              </button>
              <button
                onClick={handleTrabajosClick}
                className="text-white text-left py-4 text-lg font-semibold border-b border-white/10 hover:text-white/80 transition-colors"
              >
                Trabajos
              </button>
              <button
                onClick={() => handleNavClick('contacto')}
                className="text-white text-left py-4 text-lg font-semibold border-b border-white/10 hover:text-white/80 transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
