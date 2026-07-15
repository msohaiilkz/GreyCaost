import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden font-display font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-400 focus-visible:ring-offset-2";

const sizes = {
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

const variants = {
  // Gradient fill + glow + shine sweep (premium)
  solid:
    "rounded-full bg-gradient-to-r from-navy-700 to-royal-500 text-white shadow-lg shadow-royal-500/25 hover:shadow-xl hover:shadow-royal-500/40",
  // Outlined with sweep fill on hover
  outline:
    "rounded-full border-2 border-navy-700 text-navy-700 hover:text-white uppercase tracking-[0.12em]",
  // On dark backgrounds
  ghostLight:
    "rounded-full border-2 border-white/70 text-white hover:text-navy-900 uppercase tracking-[0.12em]",
};

export default function Button({
  to,
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
  ...rest
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const inner = (
    <>
      {/* sweep fill for outline variants */}
      {variant !== "solid" && (
        <span
          className={`absolute inset-0 -z-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
            variant === "ghostLight" ? "bg-white" : "bg-navy-700"
          }`}
        />
      )}
      {/* diagonal shine sweep for solid */}
      {variant === "solid" && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  const motionProps = { whileHover: { y: -2 }, whileTap: { scale: 0.97 } };

  if (to) {
    return (
      <motion.span {...motionProps} className="inline-block">
        <Link to={to} className={classes} {...rest}>{inner}</Link>
      </motion.span>
    );
  }

  return (
    <motion.a href={href} className={classes} {...motionProps} {...rest}>
      {inner}
    </motion.a>
  );
}
