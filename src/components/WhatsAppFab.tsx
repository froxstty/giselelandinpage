import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5512981003319?text=Olá Gisele! Gostaria de saber mais sobre imóveis disponíveis.";

const WhatsAppFab = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      style={{
        backgroundColor: "#25D366",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
      }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" style={{ color: "#fff" }} />
    </a>
  );
};

export default WhatsAppFab;
