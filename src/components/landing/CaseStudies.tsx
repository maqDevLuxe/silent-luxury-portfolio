import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const cases = [
  { image: caseStudy1, title: "Maison Luxe", category: "Fragrance · Identity" },
  { image: caseStudy2, title: "Semilure", category: "Fashion House · Stationery" },
  { image: caseStudy3, title: "Untmuny", category: "Cosmetics · Packaging" },
];

const CaseImage = ({ image, title, category, index }: { image: string; title: string; category: string; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <Reveal variant={index % 2 === 0 ? "fadeLeft" : "fadeRight"} duration={1.1} className="mb-8 md:mb-16">
      <div ref={ref} className="overflow-hidden">
        <motion.img
          style={{ scale, y }}
          src={image}
          alt={title}
          className="w-full h-[50vh] md:h-[80vh] object-cover"
          loading="lazy"
        />
      </div>
      <Reveal variant="clipUp" delay={0.2}>
        <div className="flex justify-between items-end mt-5 px-1">
          <h3 className="text-xl md:text-2xl font-serif text-foreground">{title}</h3>
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-sans">{category}</span>
        </div>
      </Reveal>
    </Reveal>
  );
};

const CaseStudies = () => {
  return (
    <section id="work" className="py-32 md:py-48 bg-background">
      <div className="max-w-[1400px] mx-auto px-8">
        <Reveal variant="slideReveal">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans mb-20">
            Selected Work
          </p>
        </Reveal>

        {cases.map((c, i) => (
          <CaseImage key={c.title} {...c} index={i} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
