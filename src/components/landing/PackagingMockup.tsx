import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mockupImg from "@/assets/packaging-mockup.jpg";

const PackagingMockup = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

  return (
    <section ref={ref} className="w-full overflow-hidden">
      <motion.img
        style={{ scale }}
        src={mockupImg}
        alt="Premium packaging mockup"
        className="w-full h-[60vh] md:h-[85vh] object-cover"
        loading="lazy"
      />
    </section>
  );
};

export default PackagingMockup;
