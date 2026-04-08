import { UserCheck, Search, ShieldCheck, TrendingUp } from "lucide-react";

const items = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada cliente recebe atenção exclusiva e dedicada, com um serviço sob medida para suas necessidades.",
  },
  {
    icon: Search,
    title: "Curadoria de Imóveis",
    description: "Seleção criteriosa dos melhores imóveis do mercado, garantindo opções alinhadas ao seu perfil.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança no Processo",
    description: "Transparência e acompanhamento completo em todas as etapas, do primeiro contato às chaves.",
  },
  {
    icon: TrendingUp,
    title: "Consultoria Estratégica",
    description: "Orientação especializada para compra, venda ou investimento, com análise de mercado detalhada.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
          Diferenciais
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Por que escolher a Gisele?
        </h2>
        <div className="gold-divider mb-16" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
