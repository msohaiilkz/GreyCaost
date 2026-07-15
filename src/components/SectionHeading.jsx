import Reveal from "./Reveal";
import AnimatedText from "./anim/AnimatedText";

/**
 * Section heading with word-by-word reveal + accent underline.
 */
export default function SectionHeading({ children, align = "left", className = "", highlight }) {
  const text = typeof children === "string" ? children : "";

  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <AnimatedText
        text={text}
        as="h2"
        highlight={highlight}
        className="relative inline-block font-display text-3xl font-bold text-navy-700 sm:text-4xl"
      />
      <Reveal from="none" delay={0.15}>
        <span
          className={`mt-3 block h-1 w-16 rounded-full ${align === "center" ? "mx-auto" : ""}`}
          style={{ background: "linear-gradient(90deg, var(--color-violet-500), var(--color-royal-400))" }}
        />
      </Reveal>
    </div>
  );
}
