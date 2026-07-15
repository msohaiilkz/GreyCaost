import Seo from "../components/Seo";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Stats from "../sections/Stats";
import Clients from "../sections/Clients";
import AdvisoryPreview from "../sections/AdvisoryPreview";

export default function Home() {
  return (
    <>
      <Seo
        title=""
        description="Greycoast Capital — bridging potential with opportunities in the markets of your choice. Project finance & advisory across Energy, Marine, Aviation, Infrastructure and more."
        path="/"
      />
      <Hero />
      <About />
      <Stats />
      <Clients />
      <AdvisoryPreview />
    </>
  );
}
