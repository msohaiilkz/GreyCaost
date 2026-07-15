// ============================================================
// GREYCOAST CAPITAL — Site-level content
// ============================================================

export const company = {
  name: "Greycoast Capital",
  legal: "Greycoast Capital Pte Ltd",
  email: "info@greycoast-capital.com",
  address: ["1 Marina Boulevard, Level 20,", "Singapore 018989"],
};

export const hero = {
  headline: ["Bridging Potential", "With Opportunities", "In the Markets of", "Your Choice"],
  cta: { label: "Learn More", to: "/services" },
  video: "hero-video.mp4",
};

export const about = {
  title: "About Us",
  paragraphs: [
    `At Greycoast Capital, we are more than advisory – we are partners in progress. Our mission is to bridge visionary projects with the capital and expertise they need to thrive, across industries that shape the future of economies and societies.`,
    `We provide comprehensive project finance and advisory solutions for a wide spectrum of sectors: Energy, Marine, Aviation, Infrastructure, Deep-Tech, Med-Tech, Semiconductors, Real Assets, and Industrial & Commercial projects. Whether it's pioneering renewable energy, advancing medical technologies, scaling semiconductor manufacturing, or building critical infrastructure, Greycoast Capital ensures that bold ideas are matched with sustainable financing pathways.`,
    `With a global outlook, we align institutional investors, private capital, and strategic partners to deliver bankable, scalable, and resilient projects.`,
  ],
  promise: {
    label: "Our Promise:",
    text: `To act as trusted advisors and financing partners, transforming ambitious visions into tangible assets that power industries, communities, and innovation worldwide.`,
  },
};

export const stats = {
  title: "Partner in Success",
  bg: "stats-bg.jpg",
  video: "partner-video.mp4",
  items: [
    { value: 5, suffix: "+", label: "Business Years", icon: "chart" },
    { value: 35, suffix: "+", label: "Satisfied Clients", icon: "clients" },
    { value: 10, suffix: "+", label: "Top Professionals", icon: "team" },
    { value: 1, suffix: "B+", label: "Capital Raising", prefix: "", icon: "dollar" },
  ],
};

export const clients = {
  title: "Our Clients",
  logos: [
    { name: "Centum", file: "centum.png" },
    { name: "R.P.P. Infra Projects Limited", file: "rpp-infra.png" },
    { name: "Globaleye", file: "globaleye.png" },
    { name: "Petrovietnam PVTrans", file: "petrovietnam.png" },
    { name: "Bainbridge Navigation", file: "bainbridge.png" },
    { name: "Apollo Engineers", file: "lk.jpeg" },
    // TODO: PVT Logistics logo aane par uncomment karo
    // { name: "PVT Logistics", file: "pvt-logistics.png" },
  ],
};

// Home "Advisory Services" 3-card preview (SS #5)
export const advisoryPreview = {
  title: "Advisory Services",
  cards: [
    {
      title: "Services",
      image: "advisory-services.jpg",
      blurb: "Discover how Greycoast Capital's advisory expertise can unlock your project's potential.",
      links: [
        { label: "Corporate Finance", slug: "corporate-finance" },
        { label: "Trade Finance", slug: "trade-finance" },
        { label: "Credit Line", slug: "credit-line" },
      ],
    },
    {
      title: "Capital Market",
      image: "advisory-capital.jpg",
      blurb: "Navigating markets, unlocking capital, driving growth.",
      links: [{ label: "Capital Market Advisory", slug: "capital-market" }],
    },
    {
      title: "Project Financing",
      image: "advisory-project.jpg",
      blurb: "Powering industries with tailored capital solutions.",
      links: [
        { label: "Port & Infrastructure Financing", slug: "port-infrastructure" },
        { label: "Equipment Financing", slug: "equipment-financing" },
        { label: "Vessel & Marine Finance", slug: "vessel-marine" },
        { label: "Aviation Financing", slug: "aviation-finance" },
        { label: "Energy Financing", slug: "energy-financing" },
        { label: "Climate Finance", slug: "climate-finance" },
        { label: "Renewables Financing", slug: "renewables-financing" },
        { label: "Transition Financing", slug: "transition-finance" },
        { label: "ESG Advisory", slug: "esg-advisory" },
        { label: "Special Situations", slug: "special-situations" },
      ],
    },
  ],
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/services", mega: true },
  { label: "Clients", to: "/#clients" },
  { label: "Contact", to: "/contact" },
];
