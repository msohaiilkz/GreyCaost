import { motion } from "framer-motion";

/**
 * Word-by-word reveal (premium text animation — 21st.dev / Aceternity style).
 * Har word neeche se rise + fade hota hai, staggered.
 *
 * <AnimatedText text="bridging potential" as="h1" className="..." highlight="potential" />
 * highlight -> us word ko gradient-text milta hai.
 */
export default function AnimatedText({
  text,
  as = "span",
  className = "",
  delay = 0,
  stagger = 0.055,
  once = true,
  highlight,
}) {
  const words = text.split(" ");
  const Tag = motion[as] ?? motion.span;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const child = {
    hidden: { y: "0.6em", opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const highlights = highlight ? highlight.toLowerCase().split(" ") : [];

  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.4 }}
      aria-label={text}
    >
      {words.map((w, i) => {
        const isHi = highlights.includes(w.toLowerCase().replace(/[.,]/g, ""));
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden>
            <motion.span variants={child} className={`inline-block ${isHi ? "gradient-text" : ""}`}>
              {w}
            </motion.span>
            {i < words.length - 1 && " "}
          </span>
        );
      })}
    </Tag>
  );
}
