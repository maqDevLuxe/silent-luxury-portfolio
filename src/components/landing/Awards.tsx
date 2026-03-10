import Reveal, { LineReveal } from "./Reveal";

const awards = [
  { year: "2024", title: "Brand Identity of the Year", org: "D&AD" },
  { year: "2024", title: "Gold — Visual Identity", org: "Awwwards" },
  { year: "2023", title: "Best of Show", org: "Type Directors Club" },
  { year: "2023", title: "Platinum — Packaging", org: "A' Design Award" },
  { year: "2022", title: "Grand Prix — Branding", org: "Cannes Lions" },
  { year: "2022", title: "FWA of the Year", org: "FWA" },
];

const Awards = () => {
  return (
    <section className="py-32 md:py-48 bg-secondary">
      <div className="max-w-[1000px] mx-auto px-8">
        <Reveal variant="slideReveal">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans mb-16">
            Recognition
          </p>
        </Reveal>

        {awards.map((a, i) => (
          <Reveal key={`${a.year}-${a.title}`} variant="fadeUp" delay={i * 0.08} duration={0.6}>
            <div className="flex items-center justify-between py-5 border-b border-border group cursor-default">
              <div className="flex items-center gap-6 md:gap-10">
                <span className="text-xs text-muted-foreground font-sans">{a.year}</span>
                <h3 className="text-base md:text-lg font-serif text-foreground group-hover:italic transition-all duration-300">
                  {a.title}
                </h3>
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-sans">
                {a.org}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Awards;
