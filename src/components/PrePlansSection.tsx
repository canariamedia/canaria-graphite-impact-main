import { Button } from "@/components/ui/button";

const PrePlansSection = () => {
  const scrollToPlans = () => {
    const planesSection = document.getElementById("planes");
    if (planesSection) {
      planesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-black/40">
      <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-2">
          ¿Te gustó lo que viste hasta acá?
        </h2>
        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto px-2">
          Nuestros planes están pensados para potenciar tu imagen sin vueltas.
        </p>
        <Button
          onClick={scrollToPlans}
          className="mt-2 sm:mt-4 bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105 w-full sm:w-auto px-8 py-6 sm:py-2 min-h-[48px] text-sm sm:text-base"
        >
          Ver planes
        </Button>
      </div>
    </section>
  );
};

export default PrePlansSection;

