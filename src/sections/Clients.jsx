import Img from "../components/Img";
import Logo from "../components/Logo";
import SectionHeading from "../components/SectionHeading";
import { clients } from "../data/site";

export default function Clients() {
  // Duplicate list for seamless marquee loop
  const loop = [...clients.logos, ...clients.logos];

  return (
    <section id="clients" className="scroll-mt-20 overflow-hidden bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <Logo variant="full" to={null} className="h-14 w-auto" />
          <SectionHeading align="center">{clients.title}</SectionHeading>
        </div>
      </div>

      {/* Marquee */}
      <div className="group relative mt-14 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] items-center gap-14 pr-14 group-hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <div
              key={i}
              className="flex h-32 w-60 shrink-0 items-center justify-center rounded-2xl bg-white px-6 shadow-sm ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Img file={c.file} alt={c.name} className="max-h-24 max-w-[200px] object-contain" imgClassName="h-auto w-auto" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
