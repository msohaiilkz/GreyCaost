import { useState } from "react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import AnimatedText from "../components/anim/AnimatedText";
import Breadcrumb from "../components/Breadcrumb";
import { company } from "../data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: backend / email service wire karna hai (EmailJS / API endpoint)
    setSent(true);
  };

  return (
    <div className="bg-white">
      <Seo
        title="Contact Us"
        description="Get in touch with Greycoast Capital Pte Ltd — 1 Marina Boulevard, Level 20, Singapore. Email info@greycoast-capital.com"
        path="/contact"
      />

      <section className="relative overflow-hidden bg-white pb-16 pt-40 text-center">
        <div className="pointer-events-none absolute -right-24 -top-10 h-80 w-80 rounded-full bg-royal-300/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />
        <Reveal from="up" className="relative mx-auto max-w-2xl px-5">
          <Breadcrumb className="mb-5 justify-center" items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-royal-500">Get in touch</p>
          <AnimatedText
            text="Let's build something bankable"
            as="h1"
            highlight="bankable"
            className="mt-4 font-display text-4xl font-extrabold text-navy-700 sm:text-5xl"
          />
          <p className="mt-5 text-muted">
            Tell us about your project and our team will get back to you with tailored financing and advisory pathways.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <Reveal from="right">
            <h2 className="font-display text-2xl font-bold text-navy-700">Contact details</h2>
            <p className="mt-3 text-muted">
              Reach out and our team will respond within one business day.
            </p>

            <div className="mt-8 space-y-4">
              <div className="hover-glow flex items-start gap-4 rounded-2xl border border-navy-900/5 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-royal-500/10 text-xl text-royal-500">✉</span>
                <div>
                  <p className="text-sm font-semibold text-navy-700">Email</p>
                  <a href={`mailto:${company.email}`} className="text-muted hover:text-royal-500">{company.email}</a>
                </div>
              </div>
              <div className="hover-glow flex items-start gap-4 rounded-2xl border border-navy-900/5 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-royal-500/10 text-xl text-royal-500">📍</span>
                <div>
                  <p className="text-sm font-semibold text-navy-700">Office</p>
                  <p className="text-muted">{company.address.join(" ")}</p>
                </div>
              </div>
              <div className="hover-glow flex items-start gap-4 rounded-2xl border border-navy-900/5 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-royal-500/10 text-xl text-royal-500">🕑</span>
                <div>
                  <p className="text-sm font-semibold text-navy-700">Working hours</p>
                  <p className="text-muted">Mon – Fri · 9:00 AM – 6:00 PM (SGT)</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal from="left">
            <form onSubmit={handleSubmit} className="rounded-2xl bg-mist p-6 sm:p-8 ring-1 ring-navy-900/5">
              {sent && (
                <div className="mb-6 rounded-lg bg-royal-500/10 px-4 py-3 text-sm text-royal-600">
                  Thank you! Your message has been noted. (Backend abhi wire karna baaki hai.)
                </div>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <Field label="Phone" name="phone" />
              </div>
              <div className="mt-5">
                <Field label="How can we help?" name="message" textarea required />
              </div>
              <div className="mt-6">
                <Button href="#" variant="solid" size="lg" onClick={handleSubmit}>Send Message</Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", textarea = false, required = false }) {
  const cls =
    "mt-1.5 w-full rounded-lg border border-navy-900/10 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-royal-400 focus:ring-2 focus:ring-royal-400/20";
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy-700">
        {label}{required && <span className="text-violet-500"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} rows={4} required={required} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}
