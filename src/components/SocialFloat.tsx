import { Instagram, Linkedin } from "lucide-react";

const SocialFloat = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <a 
        href="https://instagram.com/canariamedia" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-accent/80 backdrop-blur-sm p-3 hover:bg-accent transition-all duration-300 hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram size={24} className="text-foreground" />
      </a>
      <a 
        href="https://linkedin.com/company/canariamedia" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-accent/80 backdrop-blur-sm p-3 hover:bg-accent transition-all duration-300 hover:scale-110"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} className="text-foreground" />
      </a>
    </div>
  );
};

export default SocialFloat;
