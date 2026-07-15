// ============================================================
// GREYCOAST CAPITAL — Services content (from brand screenshots)
// Ek naya service add karna ho? Neeche array me object daal do — page auto ban jayega.
// ============================================================

export const services = [
  // ---------- ADVISORY OVERVIEW ----------
  {
    slug: "advisory-services",
    title: "Advisory Services",
    group: "Advisory",
    image: "advisory-overview.jpg",
    intro: [
      `Our Advisory Services are designed to provide you with expert guidance and strategic insight to navigate the complexities of today's business environment. With over 5 years of experience, our team is committed to delivering solutions that drive growth, optimize performance, and achieve your long-term goals.`,
      `Our approach is collaborative and personalized, ensuring that our solutions are tailored to your unique needs and challenges. Partner with us to leverage our expertise and achieve sustainable success in a rapidly evolving market.`,
    ],
    listTitle: "Our Advisory Services Include",
    items: [
      { label: "Strategic Planning" },
      { label: "Financial Advisory" },
      { label: "Risk Management" },
      { label: "Market Analysis" },
      { label: "Operational Efficiency" },
    ],
  },

  // ---------- CORE SERVICES ----------
  {
    slug: "corporate-finance",
    title: "Corporate Finance Advisory",
    group: "Advisory",
    image: "corporate-finance.jpg",
    intro: [
      `Our Corporate Finance Advisory practice is built to help corporations, institutions, and project developers navigate the complexities of capital structuring, strategic transactions, and financing engagement. We provide clarity, confidence, and execution support in environments where financial decisions shape long-term success.`,
    ],
    listTitle: "Our Corporate Financing Solutions Includes:",
    items: [
      { label: "Capital Structuring", desc: "Designing debt, equity, and hybrid financing models aligned with corporate strategy." },
      { label: "M&A Advisory", desc: "Supporting mergers, acquisitions, divestitures, and cross-border ventures with robust financial frameworks." },
      { label: "Balance Sheet Optimization", desc: "Debt restructuring, recapitalization, and capital efficiency strategies." },
      { label: "Global Financing Solutions", desc: "Leveraging networks across development banks, private equity, and institutional investors worldwide." },
    ],
  },
  {
    slug: "trade-finance",
    title: "Trade Finance Advisory",
    group: "Advisory",
    image: "trade-finance.jpg",
    intro: [
      `Our Trade Finance services are designed to facilitate and optimize your international and domestic trade transactions. We understand that navigating the complexities of trade finance is crucial for smooth operations, reduced risk, and enhanced cash flow.`,
      `Our team of experts provides tailored solutions to meet your specific trade finance needs, offering both flexibility and security in your financial transactions. Whether you're importing or exporting, we ensure you have the tools and support to manage your trade operations effectively.`,
      `Leverage Greycoast Capital's Trade Finance expertise to optimize your trade transactions and drive global business success.`,
    ],
    listTitle: "Our Trade Finance Advisory Solutions Include:",
    items: [
      { label: "Letter of Credit" },
      { label: "Guarantees" },
      { label: "Trade Credit Insurance" },
      { label: "Invoice Financing" },
      { label: "Supply Chain Financing" },
      { label: "Documentary Collections" },
    ],
  },
  {
    slug: "credit-line",
    title: "Credit Line",
    group: "Advisory",
    image: "credit-line.jpg",
    intro: [
      `At Greycoast Capital, we understand that liquidity is the lifeblood of growth. Our Credit Line services are designed to provide corporations, institutions, and project developers with reliable, flexible access to capital – ensuring that opportunities are seized and challenges are met with confidence.`,
      `Our Credit Line Facilitation services are designed to simplify and enhance your access to credit, providing the support you need to maintain liquidity and seize growth opportunities.`,
    ],
    listTitle: "Our Credit Line Solutions Include:",
    items: [
      { label: "Working Capital Solutions", desc: "Tailored credit lines to support day-to-day operations and expansion." },
      { label: "Bridge Financing", desc: "Short-term facilities to cover immediate needs while long-term financing is secured." },
      { label: "Global Reach", desc: "Access to international banking partners, institutional lenders, and private capital networks." },
      { label: "Trade & Supply Chain Finance", desc: "Credit lines that strengthen procurement, logistics, and vendor relationships." },
    ],
  },

  // ---------- CAPITAL MARKET ----------
  {
    slug: "capital-market",
    title: "Capital Market Advisory",
    group: "Capital Market",
    image: "capital-market.jpg",
    intro: [
      `Our Capital Market Advisory services are designed to help corporations, institutions, and project developers access, structure, and optimize financing through global capital markets. We provide strategic guidance that ensures transactions are not only successful, but also aligned with long-term growth and investor confidence.`,
    ],
    listTitle: "Our Expertise:",
    items: [
      { label: "Equity Capital Markets (ECM)", desc: "Advisory on IPOs, follow-on offerings, rights issues, private placements, and convertible instruments." },
      { label: "Debt Capital Markets (DCM)", desc: "Structuring bonds, syndicated loans, and hybrid instruments to meet diverse financing needs." },
      { label: "Cross-Border Transactions", desc: "Navigating international exchanges, regulatory frameworks, and investor pools." },
      { label: "Investor Positioning", desc: "Crafting valuation strategies, roadshow materials, and investor engagement plans." },
      { label: "Market Intelligence", desc: "Delivering insights into trends, pricing, and investor appetite to optimize timing and structure." },
    ],
  },

  // ---------- PROJECT FINANCING OVERVIEW (dark) ----------
  {
    slug: "project-financing",
    title: "Project Financing",
    group: "Project Financing",
    image: "project-financing.jpg",
    dark: true,
    intro: [
      `At Greycoast Capital, we specialize in delivering comprehensive financing solutions for large-scale industrial, commercial, and infrastructure projects. Our Project Financing practice is built to align visionary developments with sustainable capital, ensuring that complex initiatives are transformed into bankable realities.`,
    ],
    listTitle: "Our Specialized Financing Solutions Includes:",
    items: [
      { label: "Port & Infrastructure Financing", desc: "Structuring capital for ports, logistics hubs, transport networks, and urban development." },
      { label: "Equipment Financing", desc: "Tailored solutions for industrial machinery, manufacturing systems, and advanced technology assets." },
      { label: "Vessel & Marine Finance", desc: "Financing for shipping fleets, offshore platforms, and maritime infrastructure." },
      { label: "Aviation Financing", desc: "Capital pathways for aircraft acquisition, airport development, and aviation infrastructure." },
      { label: "Energy Financing", desc: "Financing for power generation, transmission, and industrial energy facilities." },
      { label: "Renewables", desc: "Structuring bankable solutions for solar, wind, hydrogen, and energy storage projects." },
      { label: "Climate Finance", desc: "Supporting renewable energy, carbon reduction, and sustainability-driven projects." },
      { label: "Transition Finance", desc: "Funding the shift to a low-carbon economy." },
      { label: "Special Situations Financing", desc: "Capital solutions for complex challenges." },
    ],
  },

  // ---------- PROJECT FINANCING SUB-SERVICES ----------
  {
    slug: "port-infrastructure",
    title: "Port & Infrastructure",
    group: "Project Financing",
    image: "port-infrastructure.jpg",
    video: "port-video.mp4",
    intro: [
      `At Greycoast Capital, we recognize that ports and infrastructure are the backbone of global commerce and economic development. Our Port & Infrastructure Financing practice is dedicated to structuring capital solutions for large-scale projects that enhance connectivity, enable trade, and strengthen communities.`,
    ],
    listTitle: "Our Expertise:",
    items: [
      { label: "Port Development", desc: "Financing for container terminals, logistics hubs, and maritime gateways." },
      { label: "Transport Infrastructure", desc: "Capital pathways for highways, rail networks, airports, and urban transit systems." },
      { label: "Urban Development", desc: "Structuring investments in smart cities, industrial zones, and public utilities." },
      { label: "Logistics & Supply Chain Assets", desc: "Supporting warehouses, distribution centers, and intermodal facilities." },
      { label: "Cross-Border Projects", desc: "Advisory and financing for infrastructure that links regions and drives international trade." },
    ],
  },
  {
    slug: "equipment-financing",
    title: "Equipment Financing",
    group: "Project Financing",
    image: "equipment.jpg",
    intro: [
      `We understand that access to the right equipment is critical for industrial and commercial success. Our Equipment Financing solutions are designed to provide flexible, tailored capital pathways that enable businesses to acquire, upgrade, and scale the machinery and technology they need to stay competitive.`,
    ],
    listTitle: "Our Expertise:",
    items: [
      { label: "Industrial Machinery", desc: "Financing for heavy equipment, manufacturing systems, and production lines." },
      { label: "Technology Assets", desc: "Capital solutions for advanced robotics, automation, and semiconductor equipment." },
      { label: "Transportation & Logistics Equipment", desc: "Structured financing for fleets, cargo handling systems, and specialized vehicles." },
      { label: "Medical & Scientific Equipment", desc: "Supporting hospitals, labs, and med-tech innovators with sustainable financing." },
      { label: "Energy & Infrastructure Equipment", desc: "Financing turbines, power systems, and construction machinery for large-scale projects." },
    ],
  },
  {
    slug: "vessel-marine",
    title: "Vessel & Marine Finance",
    group: "Project Financing",
    image: "vessel-marine.jpg",
    intro: [
      `At Greycoast Capital, we understand that the maritime industry is the backbone of global commerce. Our Vessel & Marine Finance practice is dedicated to providing specialized financing solutions that support shipowners, port operators, and offshore developers in building, expanding, and modernizing their fleets and infrastructure.`,
    ],
    listTitle: "Our Expertise:",
    items: [
      { label: "Fleet Acquisition & Expansion", desc: "Financing for new vessels, fleet renewal, and modernization programs." },
      { label: "Port & Terminal Infrastructure", desc: "Capital pathways for container terminals, dry docks, and logistics hubs." },
      { label: "Offshore Projects", desc: "Financing for offshore energy platforms, subsea operations, and marine engineering ventures." },
      { label: "Machinery & Equipment Financing", desc: "Structured solutions for shipbuilding, dockyard equipment, and specialized marine machinery." },
      { label: "Cross-Border Advisory", desc: "Facilitating international financing structures aligned with global maritime trade flows." },
    ],
  },
  {
    slug: "aviation-finance",
    title: "Aviation Finance",
    group: "Project Financing",
    image: "aviation.jpg",
    intro: [
      `At Greycoast Capital, we understand that aviation is a cornerstone of global connectivity and commerce. Our Aviation Financing practice is dedicated to providing specialized capital solutions for airlines, airport operators, and aviation infrastructure developers – ensuring that ambitious projects are transformed into bankable realities.`,
    ],
    listTitle: "Our Expertise:",
    items: [
      { label: "Aircraft Financing", desc: "Structuring debt, lease, and sale-and-leaseback solutions for fleet acquisition, renewal, and modernization." },
      { label: "Airport Infrastructure", desc: "Financing terminals, runways, cargo facilities, and aviation logistics hubs." },
      { label: "Leasing & Structured Products", desc: "Tailored operating and finance lease arrangements to optimize capital efficiency." },
      { label: "Machinery & Equipment Financing", desc: "Solutions for ground handling, maintenance, and specialized aviation equipment." },
      { label: "Cross-Border Advisory", desc: "Facilitating international financing structures aligned with global aviation standards and investor pools." },
    ],
  },
  {
    slug: "energy-financing",
    title: "Energy Financing",
    group: "Project Financing",
    image: "energy.jpg",
    intro: [
      `We provide specialized financing solutions for power generation, transmission, and industrial energy facilities. Our Energy Financing practice is designed to support projects that drive industrial growth, strengthen infrastructure, and accelerate the global energy transition.`,
    ],
    listTitle: "Our Expertise:",
    items: [
      { label: "Power Generation", desc: "Financing for conventional and renewable energy plants, including solar, wind, hydrogen, and hybrid facilities." },
      { label: "Transmission & Distribution", desc: "Capital pathways for grid expansion, smart grids, and cross-border energy networks." },
      { label: "Industrial Energy Facilities", desc: "Structured financing for refineries, industrial power systems, and large-scale energy infrastructure." },
      { label: "Sustainable Energy Projects", desc: "Supporting initiatives that reduce carbon footprints and enhance energy efficiency." },
      { label: "Emerging Market Energy Solutions", desc: "Advisory and financing for projects in high-growth regions with expanding energy demand." },
    ],
  },
  {
    slug: "renewables-financing",
    title: "Renewables Financing",
    group: "Project Financing",
    image: "renewables.jpg",
    intro: [
      `At Greycoast Capital, we are committed to accelerating the global energy transition by providing bankable financing solutions for renewable energy projects. Our Renewables Financing practice supports developers, corporations, and institutions in structuring capital for solar, wind, hydrogen, geothermal, and energy storage initiatives – ensuring clean energy ambitions are matched with sustainable financial pathways.`,
    ],
    listTitle: "Our Expertise:",
    items: [
      { label: "Solar Projects", desc: "Financing utility-scale solar farms, rooftop installations, and hybrid solar systems." },
      { label: "Wind Energy", desc: "Structuring capital for onshore and offshore wind projects, including grid integration." },
      { label: "Hydrogen Initiatives", desc: "Supporting green hydrogen production, storage, and distribution facilities." },
      { label: "Geothermal Energy", desc: "Financing geothermal plants and infrastructure that harness earth's natural heat for sustainable power." },
      { label: "Energy Storage", desc: "Capital solutions for battery systems, pumped hydro, and advanced storage technologies." },
      { label: "Integrated Solutions", desc: "Advisory for projects combining multiple renewable technologies to maximize efficiency and resilience." },
    ],
  },
  {
    slug: "climate-finance",
    title: "Climate Finance",
    group: "Project Financing",
    image: "climate.jpg",
    intro: [
      `We believe financing climate initiatives is not only about sustainability – it is about building resilient economies and unlocking long-term value. Our Climate Finance practice is dedicated to structuring capital for projects that reduce emissions, enhance efficiency, and accelerate the global transition to a low-carbon economy.`,
    ],
    listTitle: "Our Expertise:",
    items: [
      { label: "Carbon Reduction Programs", desc: "Capital pathways for carbon capture, utilization, and storage (CCUS) technologies." },
      { label: "Green Infrastructure", desc: "Financing sustainable transport, smart cities, and eco-friendly industrial zones." },
      { label: "Energy Efficiency Solutions", desc: "Supporting retrofits, clean technologies, and industrial upgrades that lower emissions." },
      { label: "Green Bonds", desc: "Debt instruments dedicated to financing environmentally beneficial projects." },
      { label: "Sustainability-Linked Loans", desc: "Facilities tied to achieving ESG or climate performance targets." },
      { label: "Blended Finance", desc: "Leveraging public and private capital to de-risk climate investments." },
      { label: "Impact Investment Structures", desc: "Financing aligned with measurable social and environmental outcomes." },
    ],
  },
  {
    slug: "esg-advisory",
    title: "ESG Advisory",
    group: "Project Financing",
    image: "esg.jpg",
    intro: [
      `At Greycoast Capital, we recognize that environmental, social, and governance (ESG) considerations are no longer optional – they are central to how investors, regulators, and stakeholders evaluate projects and corporations. Our ESG Advisory services help clients integrate sustainability metrics into financing strategies, ensuring that capital flows are aligned with both profitability and responsibility.`,
    ],
    listTitle: "Our Expertise:",
    items: [
      { label: "ESG Integration", desc: "Embedding ESG principles into corporate finance, project financing, and investment structures." },
      { label: "Sustainability Reporting", desc: "Advisory on frameworks such as GRI, SASB, TCFD, and ISSB to meet global disclosure standards." },
      { label: "ESG Ratings & Investor Readiness", desc: "Preparing corporations for rating agency assessments and investor ESG due diligence." },
      { label: "Impact Measurement", desc: "Designing KPIs and metrics to track environmental and social outcomes alongside financial returns." },
      { label: "Sustainable Finance Instruments", desc: "Structuring green bonds, sustainability-linked loans, and blended finance aligned with ESG targets." },
      { label: "Governance Advisory", desc: "Strengthening board oversight, compliance, and transparency to meet investor expectations." },
    ],
  },
  {
    slug: "transition-finance",
    title: "Transition Finance",
    group: "Project Financing",
    image: "transition.jpg",
    intro: [
      `At Greycoast Capital, we recognize that the path to a sustainable future requires bridging traditional industries with low-carbon solutions. Our Transition Finance practice is designed to support companies and projects that are actively shifting toward greener operations, providing capital structures that enable transformation while maintaining competitiveness.`,
    ],
    listTitle: "Our Expertise:",
    items: [
      { label: "Decarbonization Pathways", desc: "Financing for industrial sectors (steel, cement, chemicals, shipping, aviation) to reduce emissions." },
      { label: "Energy Transition Projects", desc: "Supporting the shift from fossil fuels to renewables, including hybrid and transitional energy systems." },
      { label: "Efficiency Upgrades", desc: "Financing retrofits, clean technologies, and operational improvements that lower carbon intensity." },
      { label: "Sustainable Supply Chains", desc: "Structuring finance for logistics, transport, and procurement systems aligned with ESG goals." },
      { label: "Transition Instruments", desc: "Advisory on transition bonds, sustainability-linked loans, and blended finance structures tailored to industries in transformation." },
    ],
  },
  {
    slug: "special-situations",
    title: "Special Situations",
    group: "Project Financing",
    image: "special-situations.jpg",
    intro: [
      `At Greycoast Capital, we understand that not all financing needs fit into conventional frameworks. Our Special Situations Financing practice is designed to provide flexible, innovative capital solutions for projects and companies facing unique or challenging circumstances. Whether it's distressed assets, restructuring, or urgent bridge financing, we deliver structures that enable resilience and opportunity.`,
    ],
    listTitle: "Our Expertise:",
    items: [
      { label: "Distressed Asset Financing", desc: "Unlocking value from underperforming or distressed assets with tailored capital solutions." },
      { label: "Restructuring Support", desc: "Advisory and financing for corporate turnarounds, recapitalizations, and balance sheet optimization." },
      { label: "Bridge & Interim Financing", desc: "Short-term capital pathways to sustain operations or bridge to long-term funding." },
      { label: "Expansion into New Markets", desc: "Financing for cross-border ventures and entry into emerging economies." },
      { label: "Strategic Joint Ventures", desc: "Capital structuring for partnerships that drive growth and diversification." },
      { label: "Cross-Border Advisory", desc: "Navigating international financing structures for complex, multi-jurisdictional projects." },
    ],
  },
];

// Quick lookup by slug
export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

// Grouped for the navbar mega-menu
export const serviceGroups = [
  {
    label: "Advisory",
    slugs: ["advisory-services", "corporate-finance", "trade-finance", "credit-line"],
  },
  {
    label: "Capital Market",
    slugs: ["capital-market"],
  },
  {
    label: "Project Financing",
    slugs: [
      "project-financing",
      "port-infrastructure",
      "equipment-financing",
      "vessel-marine",
      "aviation-finance",
      "energy-financing",
      "renewables-financing",
      "climate-finance",
      "esg-advisory",
      "transition-finance",
      "special-situations",
    ],
  },
];
