import Reveal, { LineReveal } from "./Reveal";

const steps = [
  { phase: "01", title: "Discovery", desc: "Deep immersion into your world — audience, competitors, and aspirations." },
  { phase: "02", title: "Strategy", desc: "Defining positioning, personality, and the narrative your brand will own." },
  { phase: "03", title: "Design", desc: "Translating strategy into visual identity — logo, typography, color, texture." },
  { phase: "04", title: "Refinement", desc: "Iterative perfection through collaboration, until every detail sings." },
  { phase: "05", title: "Delivery", desc: "Complete brand guidelines, assets, and templates for seamless rollout." },
];

const DesignProcess = () => {
  return (
    <section id="process" className="py-32 md:py-48 bg-background">
      <div className="max-w-[1000px] mx-auto px-8">
        <Reveal variant="slideReveal">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans mb-20">
            The Process
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border" />
          {steps.map((step, i) => (
            <Reveal key={step.phase} variant="fadeLeft" delay={i * 0.15} duration={0.8}>
              <div className="relative pl-12 pb-16 last:pb-0">
                <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full border border-foreground bg-background" />
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-sans">
                  {step.phase}
                </span>
                <h3 className="text-xl md:text-2xl font-serif mt-2 mb-3 text-foreground">
                  {step.title}
                </h3>
                <LineReveal delay={i * 0.15 + 0.2} className="mb-3 max-w-[200px]" />
                <p className="text-sm font-sans text-muted-foreground leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
