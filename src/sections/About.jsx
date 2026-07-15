import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import Logo from "../components/Logo";
import AnimatedText from "../components/anim/AnimatedText";
import { asset } from "../lib/assets";
import { about } from "../data/site";

export default function About() {
  const logoImg = asset("logo-full.png");

  return (
    <section id="about" className="blue-wash scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Logo side */}
        <Reveal from="right" className="flex justify-center">
          <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }}>
            {logoImg ? (
              <img src={logoImg} alt="Greycoast Capital" className="w-64 lg:w-80" />
            ) : (
              <Logo variant="full" to={null} className="scale-[2.2]" />
            )}
          </motion.div>
        </Reveal>

        {/* Text side */}
        <div>
          <div>
            <AnimatedText
              text={about.title}
              as="h2"
              className="font-display text-3xl font-bold text-navy-700 sm:text-4xl"
            />
            <Reveal from="none" delay={0.15}>
              <span
                className="mt-3 block h-1 w-16 rounded-full"
                style={{ background: "linear-gradient(90deg, var(--color-violet-500), var(--color-royal-400))" }}
              />
            </Reveal>
          </div>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} from="up" delay={0.05 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
            <Reveal from="up" delay={0.15}>
              <p>
                <span className="font-semibold text-navy-700">{about.promise.label}</span> {about.promise.text}
              </p>
            </Reveal>
          </div>

          <Reveal from="up" delay={0.2} className="mt-8">
            <Button to="/contact" variant="outline">Contact Us</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
