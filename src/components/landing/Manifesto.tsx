import Reveal, { TextReveal } from "./Reveal";

const Manifesto = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-foreground">
      <div className="max-w-[900px] mx-auto px-8 text-center">
        <Reveal variant="blur" duration={0.6}>
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary-foreground/40 font-sans mb-12">
            Manifesto
          </p>
        </Reveal>
        <blockquote className="text-2xl md:text-4xl lg:text-5xl font-serif leading-[1.2] text-primary-foreground italic">
          <TextReveal text={`"We don't decorate.`} delay={0} />
          <br />
          <TextReveal text="We distill. We strip away the noise" delay={0.2} />
          <br />
          <TextReveal text={`until only truth remains —`} delay={0.4} />
          <br />
          <TextReveal text={`then we make that truth beautiful."`} delay={0.6} />
        </blockquote>
        <Reveal variant="fadeUp" delay={0.8}>
          <p className="mt-10 text-xs tracking-[0.3em] uppercase text-primary-foreground/40 font-sans">
            — The Atelier Collective
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Manifesto;
