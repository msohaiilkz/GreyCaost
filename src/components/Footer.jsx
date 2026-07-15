import { Link } from "react-router-dom";
import Img from "./Img";
import Logo from "./Logo";
import Reveal from "./Reveal";
import { company } from "../data/site";
import { serviceGroups, serviceBySlug } from "../data/services";

export default function Footer() {
  return (
    <footer id="contact-footer" className="relative">
      {/* ===== Get in touch — full lighthouse image (no crop) ===== */}
      <GetInTouch />

      {/* ===== Dark link bar ===== */}
      <div className="relative bg-navy-900 text-white/80">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
          <div>
            <Logo variant="white" to="/" className="h-16 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Bridging visionary projects with the capital and expertise they need to thrive.
            </p>
          </div>
          {serviceGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-white">{group.label}</p>
              <ul className="space-y-2 text-sm">
                {group.slugs.slice(0, 6).map((slug) => (
                  <li key={slug}>
                    <Link to={`/services/${slug}`} className="text-white/60 transition-colors hover:text-white">
                      {serviceBySlug[slug].title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/50 sm:flex-row lg:px-8">
            <p>© {company.legal}. All rights reserved.</p>
            <p>{company.address.join(" ")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function GetInTouch() {
  const info = (
    <>
      <h2 className="font-display text-4xl font-extrabold text-navy-700 sm:text-5xl">Get in touch</h2>
      <span className="mt-4 block h-1 w-16 rounded-full" style={{ background: "linear-gradient(90deg,var(--color-violet-500),var(--color-royal-400))" }} />
      <div className="mt-6 space-y-2 text-navy-800">
        <p>
          Email :{" "}
          <a href={`mailto:${company.email}`} className="font-medium text-royal-500 underline-offset-4 hover:underline">
            {company.email}
          </a>
        </p>
        <p>Address : {company.address[0]}</p>
        <p>{company.address[1]}</p>
      </div>
      <Link
        to="/contact"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy-700 to-royal-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-royal-500/25 transition-all hover:shadow-xl"
      >
        Contact Us <span>→</span>
      </Link>
    </>
  );

  return (
    <section className="relative bg-mist">
      {/* Desktop: full natural image (no crop) + text overlay on light left side */}
      <div className="relative hidden lg:block">
        <Img file="lighthouse.png" alt="Greycoast Capital lighthouse" aria-hidden className="block h-auto w-full" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-white/90 via-white/45 to-transparent" />
          <div className="relative mx-auto flex h-full max-w-7xl items-center px-8">
            <Reveal from="right" className="pointer-events-auto max-w-md">{info}</Reveal>
          </div>
        </div>
      </div>

      {/* Mobile: cover banner with text OVER the image */}
      <div className="relative flex min-h-[560px] items-center overflow-hidden lg:hidden">
        <Img file="lighthouse.png" alt="Greycoast Capital lighthouse" aria-hidden className="absolute inset-0 h-full w-full object-cover object-[72%_center]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/68 to-white/88" />
        <div className="relative w-full px-6 py-12">
          <Reveal from="up" className="max-w-md">{info}</Reveal>
        </div>
      </div>
    </section>
  );
}
