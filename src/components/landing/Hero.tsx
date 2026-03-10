import { motion } from "framer-motion";
import heroLogo from "@/assets/hero-logo.png";
import { TextReveal } from "./Reveal";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden px-6">
      <motion.div
        initial={{ scale: 0.6, opacity: 0, rotate: -90 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <img
          src={heroLogo}
          alt="Atelier brand logo"
          className="w-28 h-28 md:w-40 md:h-40 animate-slow-rotate"
        />
      </motion.div>

      <div className="text-center max-w-5xl">
        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif leading-[0.95] tracking-tight text-foreground">
          <TextReveal text="We craft brands" delay={0.3} />
          <br />
          <em className="font-serif italic">
            <TextReveal text="that whisper" delay={0.6} />
          </em>
        </h1>

        <motion.p
          initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-sm md:text-base font-sans text-muted-foreground tracking-[0.15em] uppercase"
        >
          Premium Brand Identity Studio — Est. 2014
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-muted-foreground/40"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
