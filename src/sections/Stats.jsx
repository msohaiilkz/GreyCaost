import { motion } from "framer-motion";
import { staggerParent, staggerChild } from "../components/Reveal";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import Img from "../components/Img";
import AnimatedText from "../components/anim/AnimatedText";
import { stats } from "../data/site";
import { asset, video } from "../lib/assets";

// Line-art icons (SS #3 jaise)
const icons = {
  chart: (
    <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 40V8M6 40h36" />
      <path d="M12 30l8-8 6 5 12-14" />
      <circle cx="12" cy="30" r="1.6" fill="currentColor" /><circle cx="20" cy="22" r="1.6" fill="currentColor" />
      <circle cx="26" cy="27" r="1.6" fill="currentColor" /><circle cx="38" cy="13" r="1.6" fill="currentColor" />
    </svg>
  ),
  clients: (
    <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="15" r="6" />
      <path d="M13 38c0-6 5-10 11-10s11 4 11 10" />
      <path d="M20 21l3 3 6-6" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="16" r="5" /><circle cx="11" cy="19" r="4" /><circle cx="37" cy="19" r="4" />
      <path d="M15 38c0-5 4-9 9-9s9 4 9 9M4 37c0-4 3-7 7-7M44 37c0-4-3-7-7-7" />
    </svg>
  ),
  dollar: (
    <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="18" />
      <path d="M29 17c-1.5-2-4-3-6-3-3.5 0-6 2-6 4.5S19 22 24 23s7 2 7 5-3 4.5-6.5 4.5c-2.5 0-5-1-6.5-3M24 11v26" />
    </svg>
  ),
};

export default function Stats() {
  const videoSrc = video(stats.video);

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden py-28 lg:py-32">
      {/* Full-bleed video background */}
      <div className="absolute inset-0 -z-10">
        {videoSrc ? (
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster={asset(stats.bg) || undefined}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Img file={stats.bg} alt="" className="h-full w-full object-cover" aria-hidden />
        )}
        {/* light overlay so video dikhe + text readable */}
        <div className="absolute inset-0 bg-navy-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-navy-950/50" />
      </div>

      {/* Title (top-left, jaise SS) */}
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal from="left">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">Why Greycoast</p>
          <AnimatedText text={stats.title} as="h2" className="mt-3 font-display text-4xl font-extrabold text-white drop-shadow-lg sm:text-5xl lg:text-6xl" />
          <p className="mt-5 max-w-xl text-base text-white/80">
            A track record built on trusted partnerships, expert teams and capital delivered — the numbers that define how we climb alongside our clients.
          </p>
        </Reveal>
      </div>

      {/* Stats row (bottom — icon badge + number + label) */}
      <div className="mx-auto mt-16 w-full max-w-7xl px-5 lg:px-8">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-2 gap-x-6 gap-y-12 border-t border-white/15 pt-12 lg:grid-cols-4"
        >
          {stats.items.map((s) => (
            <motion.div key={s.label} variants={staggerChild} className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-lg shadow-black/20 backdrop-blur-md">
                {icons[s.icon]}
              </div>
              <p className="mt-5 font-display text-5xl font-extrabold leading-none text-white drop-shadow-md sm:text-6xl">
                <StatCounter value={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} />
              </p>
              <p className="mt-2 font-display text-sm font-semibold uppercase tracking-wider text-white/85">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
