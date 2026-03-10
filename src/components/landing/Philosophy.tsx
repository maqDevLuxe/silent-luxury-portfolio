import Reveal, { TextReveal } from "./Reveal";

const Philosophy = () => {
  return (
    <section className="py-32 md:py-48 bg-background">
      <div className="max-w-[900px] mx-auto px-8 text-center">
        <Reveal variant="blur" duration={0.6}>
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans mb-12">
            Philosophy
          </p>
        </Reveal>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.15] text-foreground">
          <TextReveal text="A brand is not what you say it is." delay={0} />
          <br />
          <em className="italic">
            <TextReveal text="It's what they feel." delay={0.3} />
          </em>
        </h2>
        <Reveal variant="fadeUp" delay={0.5} duration={1}>
          <p className="mt-10 text-sm md:text-base font-sans text-muted-foreground leading-relaxed max-w-[600px] mx-auto">
            We believe in the power of restraint. Every detail is intentional,
            every whitespace is earned. Our work lives at the intersection of
            strategic thinking and poetic expression.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Philosophy;
