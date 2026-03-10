import Reveal from "./Reveal";

const reviews = [
  {
    quote: "Atelier didn't just redesign our brand — they redefined how we see ourselves. The result was nothing short of transformational.",
    name: "Elena Marchetti",
    role: "CEO, Maison Luxe",
  },
  {
    quote: "Their restraint is their superpower. Every decision felt inevitable, like the brand had always existed this way.",
    name: "James Thornton",
    role: "Founder, Thornton & Co",
  },
  {
    quote: "Working with Atelier is like collaborating with artists who happen to understand business better than most strategists.",
    name: "Yuki Tanaka",
    role: "Creative Director, Kaze Studio",
  },
];

const Reviews = () => {
  return (
    <section className="py-32 md:py-48 bg-background">
      <div className="max-w-[1200px] mx-auto px-8">
        <Reveal variant="slideReveal">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans mb-20">
            Client Voices
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {reviews.map((r, i) => (
            <Reveal key={r.name} variant="clipDown" delay={i * 0.15} duration={1}>
              <div className="bg-background p-8 md:p-10 h-full">
                <p className="text-base md:text-lg font-serif italic leading-relaxed text-foreground mb-8">
                  "{r.quote}"
                </p>
                <div>
                  <p className="text-sm font-sans font-medium text-foreground">{r.name}</p>
                  <p className="text-[11px] text-muted-foreground font-sans mt-1">{r.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
