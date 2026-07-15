import { Helmet } from "react-helmet-async";
import { company } from "../data/site";

/**
 * Per-page SEO — title, description, canonical, Open Graph.
 */
export default function Seo({ title, description, path = "" }) {
  const fullTitle = title
    ? `${title} — ${company.legal}`
    : `${company.legal} — Project Finance & Advisory`;
  const desc =
    description ||
    "Greycoast Capital bridges visionary projects with capital and expertise across Energy, Marine, Aviation, Infrastructure and more.";
  const url = `https://greycoast-capital.com${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
