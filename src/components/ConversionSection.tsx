import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5512981003319?text=Olá Gisele! Gostaria de saber mais sobre imóveis disponíveis.";

const ConversionSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
          Próximo Passo
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Pronto para encontrar o imóvel ideal?
        </h2>
        <div className="gold-divider mb-8" />
        <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Fale diretamente comigo e receba um atendimento exclusivo com as melhores opções disponíveis.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-base">
          <MessageCircle className="w-5 h-5" />
          Chamar no WhatsApp agora
        </a>
      </div>
    </section>
  );
};

export default ConversionSection;
