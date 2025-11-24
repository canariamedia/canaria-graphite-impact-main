import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('plans');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contacto" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center fade-in-up">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-12 leading-tight gradient-text">
          Si tenés talento,
          <br />
          hacé que se note.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-base px-10 py-6 h-auto"
            onClick={scrollToPlans}
          >
            Ver planes
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-base px-10 py-6 h-auto border-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://wa.me/59897128073" target="_blank" rel="noopener noreferrer">
              Escribinos por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
