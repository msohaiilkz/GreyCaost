import { motion } from "framer-motion";

const directions = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 80, y: 0 },
  right: { x: -80, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-triggered reveal — ab zyada dramatic (bigger move + slight scale + blur).
 * <Reveal from="up" delay={0.1}>...</Reveal>
 */
export default function Reveal({
  children,
  from = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  as = "div",
  amount = 0.2,
  ...rest
}) {
  const offset = directions[from] ?? directions.up;
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -80px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

// Stagger container + child helpers
export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const staggerChild = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
