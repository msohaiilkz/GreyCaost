import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Img from "../components/Img";
import Reveal from "../components/Reveal";
import AnimatedText from "../components/anim/AnimatedText";
import Breadcrumb from "../components/Breadcrumb";
import { serviceGroups, serviceBySlug } from "../data/services";

export default function Services() {
  return (
    <div className="bg-white">
      <Seo
        title="Advisory & Financing Services"
        description="Explore Greycoast Capital's full range of advisory and project financing services — from corporate finance and capital markets to energy, marine, aviation and climate financing."
        path="/services"
      />

      {/* Header — clean & light */}
      <section className="relative overflow-hidden bg-white pb-16 pt-40 text-center">
        <div className="pointer-events-none absolute -right-24 -top-10 h-80 w-80 rounded-full bg-royal-300/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5">
          <Reveal from="up">
            <Breadcrumb className="mb-5 justify-center" items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-royal-500">What we do</p>
            <AnimatedText text="Our Services" as="h1" highlight="Services" className="mt-4 font-display text-4xl font-extrabold text-navy-700 sm:text-5xl" />
            <p className="mt-5 text-muted">
              Comprehensive project finance and advisory solutions — bridging visionary projects
              with the capital and expertise they need to thrive.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Groups */}
      <div className="mx-auto max-w-7xl space-y-16 px-5 py-20 lg:px-8">
        {serviceGroups.map((group) => (
          <div key={group.label}>
            <Reveal from="up">
              <h2 className="mb-8 inline-block font-display text-2xl font-bold text-navy-700">
                {group.label}
                <span className="mt-2 block h-1 w-14 rounded-full" style={{ background: "linear-gradient(90deg,var(--color-violet-500),var(--color-royal-400))" }} />
              </h2>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.slugs.map((slug, i) => {
                const s = serviceBySlug[slug];
                return (
                  <Reveal key={slug} from="up" delay={(i % 3) * 0.08}>
                    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 250, damping: 20 }}>
                      <Link
                        to={`/services/${slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-navy-900/5 ring-1 ring-navy-900/5 transition-shadow hover:shadow-xl"
                      >
                        <div className="relative overflow-hidden">
                          <Img file={s.image} alt={s.title} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/0 to-transparent" />
                          <h3 className="absolute bottom-4 left-5 right-5 font-display text-lg font-bold text-white">{s.title}</h3>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <p className="line-clamp-3 text-sm text-muted">{s.intro[0]}</p>
                          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-500">
                            Learn more
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
