import Reveal, { LineReveal } from "./Reveal";

const publications = [
  "VOGUE", "WALLPAPER*", "MONOCLE", "KINFOLK", "CEREAL", "DEZEEN"
];

const FeaturedIn = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="max-w-[1400px] mx-auto px-8">
        <Reveal variant="blur" duration={0.8}>
          <p className="text-center text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans mb-14">
            As Featured In
          </p>
        </Reveal>
        <LineReveal className="mb-14" />
        <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-20 gap-y-8">
          {publications.map((pub, i) => (
            <Reveal key={pub} variant="clipUp" delay={i * 0.1} duration={0.7}>
              <span className="text-lg md:text-xl font-serif tracking-[0.15em] text-muted-foreground/60 hover:text-foreground transition-colors duration-300 cursor-default">
                {pub}
              </span>
            </Reveal>
          ))}
        </div>
        <LineReveal className="mt-14" delay={0.5} />
      </div>
    </section>
  );
};

export default FeaturedIn;
