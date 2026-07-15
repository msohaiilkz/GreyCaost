import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { hero } from "../data/site";
import { asset, video } from "../lib/assets";
import AnimatedText from "../components/anim/AnimatedText";

export default function Hero() {
  const videoSrc = video(hero.video);
  const posterSrc = asset("hero-poster.jpg");

  return (
    <section id="home" className="relative flex h-screen min-h-[620px] items-center justify-center overflow-hidden">
      {/* Background video (fallback: branded gradient) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900 via-navy-800 to-royal-600" />
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc || undefined}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* readability overlay */}
        <div className="absolute inset-0 bg-navy-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30" />
      </div>

      {/* Centered content */}
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center">
        <h1 className="font-display text-5xl font-extrabold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
          {hero.headline.map((line, i) => (
            <AnimatedText
              key={i}
              text={line}
              as="span"
              className="block"
              delay={0.25 + i * 0.28}
              stagger={0.07}
              highlight={i === 1 ? "opportunities" : undefined}
            />
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="mt-10"
        >
          <Link
            to={hero.cta.to}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-white/80 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-navy-900"
          >
            <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
            <span className="relative z-10">{hero.cta.label}</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/60 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
