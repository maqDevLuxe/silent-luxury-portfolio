import Reveal, { TextReveal } from "./Reveal";

const ContactFooter = () => {
  return (
    <section id="contact" className="py-32 md:py-48 bg-foreground">
      <div className="max-w-[900px] mx-auto px-8 text-center">
        <Reveal variant="blur" duration={0.6}>
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary-foreground/40 font-sans mb-10">
            Start a Conversation
          </p>
        </Reveal>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground leading-[1.1]">
          <TextReveal text="Let's build something" />
          <br />
          <em className="italic">
            <TextReveal text="extraordinary" delay={0.3} />
          </em>
        </h2>

        <Reveal variant="scaleUp" delay={0.5}>
          <a
            href="mailto:hello@atelier.studio"
            className="inline-block mt-12 text-xs tracking-[0.2em] uppercase border border-primary-foreground/30 px-10 py-4 text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all duration-300 font-sans"
          >
            Inquire Now
          </a>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.6}>
          <div className="mt-32 pt-10 border-t border-primary-foreground/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <span className="font-serif text-lg tracking-wider text-primary-foreground">
                ATELIER
              </span>
              <div className="flex gap-8">
                {["Instagram", "Behance", "Dribbble"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300 font-sans"
                  >
                    {s}
                  </a>
                ))}
              </div>
              <span className="text-[10px] tracking-[0.15em] text-primary-foreground/30 font-sans">
                © 2024 Atelier Studio
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactFooter;
