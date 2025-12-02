import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  // Enlace de WhatsApp - debe coincidir con el del botón principal en FinalCTA
  const whatsappLink = "https://wa.me/MI_NUMERO_CON_PREFIJO?text=Quiero%20impulsar%20mi%20imagen%20con%20Canaria%20Media";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-6 right-4 sm:right-6 z-50 bg-[#25D366] p-4 rounded-full hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/50 active:scale-95 shadow-lg min-w-[56px] min-h-[56px] flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
};

export default WhatsAppFloat;
