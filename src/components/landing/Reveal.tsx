import React, { useRef, ReactNode, useEffect, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";

type RevealVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "clipUp" | "clipDown" | "scaleUp" | "blur" | "slideReveal";

const variants: Record<RevealVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  clipUp: {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
    visible: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
  },
  clipDown: {
    hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 },
    visible: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(20px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  slideReveal: {
    hidden: { opacity: 0, y: 120, rotateX: 25 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  },
};

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const Reveal = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.9,
  className = "",
  once = true,
}: RevealProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={variants[variant]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={{ perspective: variant === "slideReveal" ? 800 : undefined }}
    >
      {children}
    </motion.div>
  );
};

// Staggered text line reveal
export const TextReveal = ({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// Animated counter
export const CountUp = ({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Counter from={0} to={value} />
          {suffix}
        </motion.span>
      ) : (
        <span>0{suffix}</span>
      )}
    </span>
  );
};

const Counter = ({ from, to }: { from: number; to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span ref={ref}>
      {inView && <AnimatedNumber to={to} nodeRef={ref} />}
      {!inView && <span>{from}</span>}
    </motion.span>
  );
};

const AnimatedNumber = ({ to, nodeRef }: { to: number; nodeRef: React.RefObject<HTMLSpanElement | null> }) => {
  const [display, setDisplay] = React.useState(0);
  
  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
  }, [to]);
  
  return <span>{display}</span>;
};

// Horizontal line reveal
export const LineReveal = ({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={`h-px bg-border ${className}`}
      initial={{ scaleX: 0, transformOrigin: "left" }}
      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  );
};

export default Reveal;
