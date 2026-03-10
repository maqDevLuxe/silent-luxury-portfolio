import Reveal, { CountUp } from "./Reveal";

const metrics = [
  { value: 200, suffix: "+", label: "Brands Crafted" },
  { value: 14, suffix: "", label: "Design Awards" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 12, suffix: "", label: "Countries Served" },
];

const ImpactMetrics = () => {
  return (
    <section className="py-32 md:py-48 bg-background">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {metrics.map((m, i) => (
            <Reveal key={m.label} variant="scaleUp" delay={i * 0.12} duration={0.8}>
              <div className="bg-background py-12 md:py-20 text-center">
                <span className="text-4xl md:text-6xl font-serif text-foreground">
                  <CountUp value={m.value} suffix={m.suffix} />
                </span>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mt-4">
                  {m.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
