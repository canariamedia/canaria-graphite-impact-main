import { useState } from "react";
import { X } from "lucide-react";
interface PortfolioItem {
  id: string;
  image: string;
  title: string;
}
interface PortfolioLightboxProps {
  items: PortfolioItem[];
  title: string;
}
const PortfolioLightbox = ({
  items,
  title
}: PortfolioLightboxProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(item => <button key={item.id} onClick={() => setSelectedImage(item.image)} className="group relative overflow-hidden border-2 border-border/50 rounded-xl transition-all duration-300 hover:border-accent hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/20 active:scale-[0.98]">
            <div className="aspect-[4/5] relative">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:w-full " />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 my-[1080px]" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h4 className="text-lg font-bold">{item.title}</h4>
            </div>
          </button>)}
      </div>

      {selectedImage && <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 bg-accent/80 p-2 hover:bg-accent transition-all duration-300 rounded-xl hover:scale-110 hover:shadow-lg active:scale-95" aria-label="Cerrar">
            <X size={24} />
          </button>
          <img src={selectedImage} alt="Vista ampliada" className="max-w-full max-h-[90vh] object-contain" onClick={e => e.stopPropagation()} />
        </div>}
    </>;
};
export default PortfolioLightbox;