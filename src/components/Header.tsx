import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border/50 fade-in">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button onClick={scrollToTop} className="hover:opacity-80 transition-opacity">
          <img src={logo} alt="Canaria Media" className="h-12" />
        </button>
        
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <button 
            onClick={scrollToTop} 
            className="hover:text-muted-foreground transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('futbol')} 
            className="hover:text-muted-foreground transition-colors"
          >
            Fútbol
          </button>
          <button 
            onClick={() => scrollToSection('basquetbol')} 
            className="hover:text-muted-foreground transition-colors"
          >
            Básquetbol
          </button>
          <button 
            onClick={() => scrollToSection('planes')} 
            className="hover:text-muted-foreground transition-colors"
          >
            Planes
          </button>
          <button 
            onClick={() => scrollToSection('trabajos')} 
            className="hover:text-muted-foreground transition-colors"
          >
            Trabajos
          </button>
          <button 
            onClick={() => scrollToSection('contacto')} 
            className="hover:text-muted-foreground transition-colors"
          >
            Contacto
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
