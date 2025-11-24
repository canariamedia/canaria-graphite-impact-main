import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/59897128073?text=Hola%20Canaria%20Media!%20Quiero%20más%20info"
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-24 right-8 z-50 bg-[#25D366] p-4 rounded-full hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 shadow-lg"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
};

export default WhatsAppFloat;
