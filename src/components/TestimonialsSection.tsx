import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    text: "Atendimento impecável e muito profissional. A Gisele entendeu exatamente o que eu buscava e encontrou a casa perfeita.",
  },
  {
    name: "Ricardo L.",
    text: "Me ajudou a encontrar exatamente o que eu procurava. Todo o processo foi transparente e muito seguro.",
  },
  {
    name: "Camila & Pedro",
    text: "Experiência incrível do início ao fim. Profissionalismo e dedicação que fazem toda a diferença.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
          Depoimentos
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          O que dizem nossos clientes
        </h2>
        <div className="gold-divider mb-16" />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-8 rounded-xl bg-card border border-border text-left">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="font-body text-sm font-semibold text-foreground">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
