import Reveal, { LineReveal } from "./Reveal";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Complete visual identity systems that define how your brand looks, feels, and communicates across every touchpoint.",
  },
  {
    number: "02",
    title: "Naming & Verbal",
    description: "Strategic naming, taglines, and brand voice development that resonate with your audience on an emotional level.",
  },
  {
    number: "03",
    title: "Brand Strategy",
    description: "Deep audience research, positioning, and strategic frameworks that give your brand an unfair advantage in the market.",
  },
];

const CoreServices = () => {
  return (
    <section id="services" className="py-32 md:py-48 bg-secondary">
      <div className="max-w-[1400px] mx-auto px-8">
        <Reveal variant="slideReveal">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans mb-20">
            Services
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <Reveal
              key={service.number}
              variant="clipUp"
              delay={i * 0.2}
              duration={1}
            >
              <div className="bg-secondary p-8 md:p-12 group cursor-default h-full">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-sans">
                  {service.number}
                </span>
                <LineReveal delay={i * 0.2 + 0.3} className="my-4" />
                <h3 className="text-2xl md:text-3xl font-serif mt-6 mb-5 text-foreground group-hover:italic transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
