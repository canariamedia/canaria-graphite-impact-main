import PortfolioLightbox from "./PortfolioLightbox";
import { Button } from "@/components/ui/button";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";

const PortfolioSection = () => {
  const futbolItems = [
    {
      id: 'f1',
      image: portfolio1,
      title: 'Cheuquepal vs Progreso'
    },
    {
      id: 'f2',
      image: portfolio2,
      title: 'Bonifazi vs Miramar'
    },
    {
      id: 'f3',
      image: portfolio3,
      title: 'De León vs Cerrito'
    },
    {
      id: 'f4',
      image: portfolio4,
      title: 'Lucas Jorge vs Progreso'
    },
    {
      id: 'f5',
      image: portfolio5,
      title: 'Agustín vs IRM'
    },
    {
      id: 'f6',
      image: portfolio6,
      title: 'Balatti vs MVD'
    },
    {
      id: 'f7',
      image: portfolio7,
      title: 'Caballero vs MVD'
    },
    {
      id: 'f8',
      image: portfolio8,
      title: 'Da Silva vs Juventud'
    },
    {
      id: 'f9',
      image: portfolio9,
      title: 'Gentilio vs Peñarol'
    },
    {
      id: 'f10',
      image: portfolio10,
      title: 'Bonifazi vs Danubio'
    }
  ];

  const basquetItems = [
    {
      id: 'b1',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
      title: 'Diseño de muestra'
    },
    {
      id: 'b2',
      image: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&q=80',
      title: 'Diseño de muestra'
    },
    {
      id: 'b3',
      image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80',
      title: 'Diseño de muestra'
    }
  ];

  return (
    <section id="trabajos" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
          Mirá lo que hacemos
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Acá tenés algunos ejemplos de trabajos que hicimos para jugadores y representantes
        </p>

        {/* Fútbol Portfolio */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 gradient-text">⚽ Fútbol</h3>
          <PortfolioLightbox items={futbolItems} title="Fútbol" />
          <div className="text-center mt-8">
            <a 
              href="https://wa.me/59897128073?text=Hola%20Canaria%20Media!%20Quiero%20algo%20así%20para%20mi%20perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" className="border-primary hover:bg-primary/10">
                Quiero esto para mi perfil
              </Button>
            </a>
          </div>
        </div>

        {/* Básquetbol Portfolio */}
        <div>
          <h3 className="text-3xl font-bold mb-8 gradient-text">🏀 Básquetbol</h3>
          <PortfolioLightbox items={basquetItems} title="Básquetbol" />
          <div className="text-center mt-8">
            <a 
              href="https://wa.me/59897128073?text=Hola%20Canaria%20Media!%20Quiero%20potenciar%20mi%20perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" className="border-primary hover:bg-primary/10">
                Quiero esto para mi perfil
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
