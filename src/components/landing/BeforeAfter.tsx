import Reveal from "./Reveal";
import beforeImg from "@/assets/before-rebrand.jpg";
import afterImg from "@/assets/after-rebrand.jpg";

const BeforeAfter = () => {
  return (
    <section className="py-32 md:py-48 bg-secondary">
      <div className="max-w-[1400px] mx-auto px-8">
        <Reveal variant="slideReveal">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans mb-20">
            Transformation
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          <Reveal variant="clipUp" duration={1.2}>
            <div className="bg-secondary p-4">
              <div className="overflow-hidden">
                <img src={beforeImg} alt="Before rebranding" className="w-full aspect-square object-cover grayscale" />
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mt-4">Before</p>
            </div>
          </Reveal>

          <Reveal variant="clipUp" delay={0.25} duration={1.2}>
            <div className="bg-secondary p-4">
              <div className="overflow-hidden">
                <img src={afterImg} alt="After rebranding" className="w-full aspect-square object-cover" />
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mt-4">After</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
