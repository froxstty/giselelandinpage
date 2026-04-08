import giselePortrait from "@/assets/gisele-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-gold/20 rounded-2xl transition-all duration-500 group-hover:border-gold/40" />
            <img
              src={giselePortrait}
              alt="Gisele Henrique - Corretora de Imóveis"
              className="w-full rounded-xl object-cover aspect-[4/5]"
              loading="lazy"
              width={800}
              height={1024}
            />
          </div>

          <div>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
              Sobre
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Gisele Henrique
            </h2>
            <div className="gold-divider !mx-0 mb-8" />

            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Sou Gisele Henrique, especialista no mercado imobiliário de Jacareí e região. Meu objetivo é conectar você às melhores oportunidades, com um atendimento personalizado, transparente e focado nas suas necessidades.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Seja para morar ou investir, ofereço suporte completo para que você tome decisões seguras e assertivas. Cada cliente é único, e cada jornada imobiliária merece atenção exclusiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
