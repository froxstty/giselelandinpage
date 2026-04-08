import heroBg from "@/assets/hero-bg.jpg";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5512981003319?text=Olá Gisele! Gostaria de saber mais sobre imóveis disponíveis.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Gisele Henrique · Corretora de Imóveis
        </p>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Encontre o imóvel ideal com quem entende de{" "}
          <span className="text-gradient-gold italic">exclusividade</span>
        </h1>

        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          Atendimento personalizado em Jacareí e região, com foco em segurança, confiança e as melhores oportunidades do mercado imobiliário.
        </p>

        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-base">
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
          <p className="font-body text-xs text-muted-foreground mt-4 tracking-wide">
            Consultoria gratuita e sem compromisso
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
