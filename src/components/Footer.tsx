import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <img src={logo} alt="Canaria Media" className="h-10" />
          
          <p className="text-xs text-muted-foreground text-center md:text-right">
            Todo el material visual se utiliza con autorización para fines de presentación.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
