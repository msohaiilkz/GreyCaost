import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Img from "../components/Img";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { advisoryPreview } from "../data/site";

export default function AdvisoryPreview() {
  return (
    <section id="services" className="scroll-mt-24 bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <Reveal from="up">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-royal-500">What we offer</p>
          </Reveal>
          <SectionHeading className="mt-3">{advisoryPreview.title}</SectionHeading>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {advisoryPreview.cards.map((card, i) => {
            const shown = card.links.slice(0, 3);
            const more = card.links.length - shown.length;
            return (
              <Reveal key={card.title} from="up" delay={i * 0.12} className="h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="hover-glow group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-navy-900/5 ring-1 ring-navy-900/5"
                >
                  {/* Image head */}
                  <div className="relative h-48 overflow-hidden">
                    <Img file={card.image} alt={card.title} className="h-full w-full object-cover transition-transform duration-[700ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/20 to-transparent" />
                    <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                      {card.links.length} {card.links.length > 1 ? "solutions" : "advisory"}
                    </span>
                    <h3 className="absolute bottom-4 left-6 font-display text-xl font-bold text-white drop-shadow">{card.title}</h3>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-muted">{card.blurb}</p>

                    {/* fixed min-height so cards stay balanced */}
                    <ul className="mt-5 min-h-[104px] space-y-2.5">
                      {shown.map((link) => (
                        <li key={link.slug}>
                          <Link
                            to={`/services/${link.slug}`}
                            className="group/li inline-flex items-center gap-2 text-sm text-navy-700 transition-colors hover:text-royal-500"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 transition-transform group-hover/li:scale-150" />
                            <span className="underline-offset-4 group-hover/li:underline">{link.label}</span>
                          </Link>
                        </li>
                      ))}
                      {more > 0 && (
                        <li className="text-sm font-medium text-royal-500/80">+{more} more</li>
                      )}
                    </ul>

                    <Link
                      to="/services"
                      className="mt-auto inline-flex items-center gap-2 border-t border-navy-900/5 pt-4 text-sm font-semibold text-royal-500 transition-colors hover:text-royal-600"
                    >
                      Explore all
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
