import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Scroll parallax — child scroll ke saath thoda move hota hai (modern depth effect).
 */
export default function Parallax({ children, offset = 60, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
