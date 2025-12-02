import { Instagram, Linkedin } from "lucide-react";

const SocialFloat = () => {
  return (
    <div className="fixed bottom-32 sm:bottom-8 right-4 sm:right-8 z-40 flex flex-col gap-3 sm:gap-4">
      <a 
        href="https://www.instagram.com/canaria.media/?hl=en" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-accent/80 backdrop-blur-sm p-3 rounded-xl hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50 active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Instagram"
      >
        <Instagram size={24} className="text-foreground" />
      </a>
      <a 
        href="https://www.linkedin.com/company/canaria-media/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-accent/80 backdrop-blur-sm p-3 rounded-xl hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50 active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} className="text-foreground" />
      </a>
    </div>
  );
};

export default SocialFloat;
