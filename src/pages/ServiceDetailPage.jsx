import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Img from "../components/Img";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Reveal, { staggerParent, staggerChild } from "../components/Reveal";
import AnimatedText from "../components/anim/AnimatedText";
import Breadcrumb from "../components/Breadcrumb";
import { serviceBySlug, services } from "../data/services";
import { asset, video } from "../lib/assets";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = serviceBySlug[slug];
  if (!service) return <Navigate to="/services" replace />;

  const videoSrc = service.video ? video(service.video) : null;

  const idx = services.findIndex((s) => s.slug === slug);
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];

  return (
    <article className="bg-white">
      <Seo title={service.title} description={service.intro[0]?.slice(0, 155)} path={`/services/${service.slug}`} />

      {/* ===================== HERO — clean & light ===================== */}
      <section className="relative overflow-hidden bg-white pb-16 pt-32 lg:pt-40">
        {/* soft decorative wash (subtle, light) */}
        <div className="pointer-events-none absolute -right-32 -top-16 h-96 w-96 rounded-full bg-royal-300/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal from="right">
            <Breadcrumb
              className="mb-6"
              items={[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: service.title },
              ]}
            />
            <Logo variant="full" to={null} className="mb-7 h-14 w-auto" />
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-royal-500">
              <span className="h-px w-8 bg-royal-400" />
              {service.group}
            </p>
            <AnimatedText
              text={service.title}
              as="h1"
              className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.08] text-navy-700 sm:text-5xl"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              {service.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button to="/contact" variant="solid">Talk to an Expert</Button>
            </div>
          </Reveal>

          <Reveal from="left">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="gc-gradient-border overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10"
            >
              {videoSrc ? (
                <video className="aspect-[4/3] w-full object-cover" autoPlay muted loop playsInline poster={asset(service.image) || undefined}>
                  <source src={videoSrc} type="video/mp4" />
                </video>
              ) : (
                <Img file={service.image} alt={service.title} className="aspect-[4/3] w-full object-cover" />
              )}
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ===================== EXPERTISE — light cards ===================== */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal from="up">
            <h2 className="font-display text-3xl font-bold text-navy-700 sm:text-4xl">
              {service.listTitle.replace(/:$/, "")}
            </h2>
            <span className="mt-4 block h-1 w-16 rounded-full" style={{ background: "linear-gradient(90deg,var(--color-violet-500),var(--color-royal-400))" }} />
          </Reveal>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {service.items.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                whileHover={{ y: -6 }}
                className="hover-glow group relative flex flex-col overflow-hidden rounded-2xl border border-navy-900/5 bg-white p-7 shadow-sm"
              >
                <span className="font-display text-3xl font-extrabold text-navy-900/10 transition-colors group-hover:text-royal-400/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-navy-700">{item.label}</h3>
                {item.desc && <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>}
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-violet-500 to-royal-400 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== CTA — clean ===================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <Reveal from="up">
            <h2 className="font-display text-2xl font-bold text-navy-700 sm:text-3xl">
              Ready to move your project forward?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted">
              Let's structure a bankable, scalable financing pathway tailored to your goals.
            </p>
            <div className="mt-8 flex justify-center">
              <Button to="/contact" variant="outline">Contact Us</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== PREV / NEXT ===================== */}
      <div className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="flex items-center justify-between border-t border-navy-900/10 pt-8">
          <Link to={`/services/${prev.slug}`} className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-navy-700">
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span className="hidden sm:inline">{prev.title}</span>
            <span className="sm:hidden">Prev</span>
          </Link>
          <Link to="/services" className="text-sm font-semibold text-royal-500 hover:text-royal-600">All Services</Link>
          <Link to={`/services/${next.slug}`} className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-navy-700">
            <span className="hidden sm:inline">{next.title}</span>
            <span className="sm:hidden">Next</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
