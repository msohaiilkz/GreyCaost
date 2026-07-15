import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { nav } from "../data/site";
import { serviceGroups, serviceBySlug } from "../data/services";

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const linkColor = solid ? "text-navy-700" : "text-white";
  const onServices = pathname.startsWith("/services");

  const isActive = (item) => {
    if (item.to === "/") return pathname === "/";
    if (item.to === "/services") return onServices;
    if (item.to === "/contact") return pathname === "/contact";
    return false;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-navy-900/5 bg-white/90 shadow-sm shadow-navy-900/5 backdrop-blur-lg"
          : "bg-gradient-to-b from-navy-950/70 via-navy-950/30 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo variant={solid ? "full" : "white"} className="h-20 w-auto" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) =>
            item.mega ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  to={item.to}
                  className={`relative flex items-center gap-1 py-2 text-sm font-medium transition-colors hover:text-royal-500 ${linkColor}`}
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={`transition-transform ${megaOpen ? "rotate-180" : ""}`}>
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {isActive(item) && <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-violet-500 to-royal-400" />}
                </Link>

                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 14 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-4"
                    >
                      <div className="overflow-hidden rounded-2xl border border-navy-900/5 bg-white shadow-2xl shadow-navy-900/15">
                        <div className="grid grid-cols-3 gap-1 p-4">
                          {serviceGroups.map((group) => (
                            <div key={group.label} className="rounded-xl p-2">
                              <p className="mb-2 flex items-center gap-2 px-2 font-display text-xs font-bold uppercase tracking-widest text-royal-500">
                                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                                {group.label}
                              </p>
                              <ul>
                                {group.slugs.map((slug) => (
                                  <li key={slug}>
                                    <Link
                                      to={`/services/${slug}`}
                                      className={`group/mi flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-mist ${
                                        pathname === `/services/${slug}` ? "bg-mist text-navy-700" : "text-ink"
                                      }`}
                                    >
                                      <span className="group-hover/mi:text-navy-700">{serviceBySlug[slug].title}</span>
                                      <span className="translate-x-1 opacity-0 transition-all group-hover/mi:translate-x-0 group-hover/mi:opacity-100 text-royal-400">→</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <Link to="/services" className="flex items-center justify-center gap-2 border-t border-navy-900/5 bg-mist/60 py-3 text-sm font-semibold text-royal-500 transition-colors hover:bg-mist">
                          View all services <span>→</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-royal-500 ${linkColor}`}
              >
                {item.label}
                {isActive(item) && <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-violet-500 to-royal-400" />}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-navy-700 to-royal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-royal-500/25 transition-all hover:shadow-xl hover:shadow-royal-500/40"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Get in Touch</span>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu" className={`lg:hidden ${linkColor}`}>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <div className="max-h-[70vh] space-y-1 overflow-y-auto px-5 py-4">
              {nav.filter((n) => !n.mega).map((item) => (
                <Link key={item.label} to={item.to} className="block rounded-lg px-3 py-2 font-medium text-navy-700 hover:bg-mist">
                  {item.label}
                </Link>
              ))}
              <p className="px-3 pb-1 pt-3 font-display text-xs font-bold uppercase tracking-widest text-royal-500">Services</p>
              {serviceGroups.map((group) => (
                <div key={group.label} className="mb-2">
                  <p className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted">{group.label}</p>
                  {group.slugs.map((slug) => (
                    <Link key={slug} to={`/services/${slug}`} className="block rounded-lg px-5 py-1.5 text-sm text-ink hover:bg-mist">
                      {serviceBySlug[slug].title}
                    </Link>
                  ))}
                </div>
              ))}
              <Link to="/contact" className="mt-2 block rounded-full bg-gradient-to-r from-navy-700 to-royal-500 px-5 py-3 text-center font-semibold text-white">
                Get in Touch
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
