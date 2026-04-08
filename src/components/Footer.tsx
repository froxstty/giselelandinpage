import { MessageCircle, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5512981003319?text=Olá Gisele! Gostaria de saber mais sobre imóveis disponíveis.";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-display text-xl font-bold mb-1">Gisele Henrique</h3>
          <p className="font-body text-sm text-muted-foreground flex items-center gap-1.5 justify-center md:justify-start">
            <MapPin className="w-3.5 h-3.5" />
            Jacareí e região
          </p>
        </div>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold text-xs">
          <MessageCircle className="w-4 h-4" />
          Falar no WhatsApp
        </a>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border">
        <p className="font-body text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Gisele Henrique. Todos os direitos reservados. | CRECI 308783 - F
        </p>
      </div>
    </footer>
  );
};

export default Footer;
