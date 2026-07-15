// Demo images (Unsplash) — sirf tab use hoti hain jab src/assets me asli file na ho.
// Client jab final images de dega, ye apne aap replace ho jayengi.
const P = "https://images.unsplash.com/photo-";
const Q = "?auto=format&fit=crop&w=1200&q=75";

export const demoImages = {
  // ---- Home ----
  "stats-bg.jpg": P + "1522163182402-834f871fd851" + Q,       // mountains / climb
  "advisory-services.jpg": P + "1522071820081-009f0129c71c" + Q, // team meeting
  "advisory-capital.jpg": P + "1611974789855-9c2a0a7236a3" + Q,  // stock market
  "advisory-project.jpg": P + "1600880292089-90a7e086ee0c" + Q,  // business handshake
  "lighthouse.png": P + "1507525428034-b723cf961d3e" + Q,        // coast / lighthouse vibe

  // ---- Service pages ----
  "advisory-overview.jpg": P + "1553877522-43269d4ea984" + Q,    // advisory
  "corporate-finance.jpg": P + "1573164713988-8665fc963095" + Q, // corporate
  "trade-finance.jpg": P + "1494412574643-ff11b0a5c1c3" + Q,     // port containers
  "credit-line.jpg": P + "1556740738-b6a63e27c4df" + Q,          // small business
  "capital-market.jpg": P + "1611974789855-9c2a0a7236a3" + Q,    // stock market
  "project-financing.jpg": P + "1521737604893-d14cc237f11d" + Q, // handshake
  "port-infrastructure.jpg": P + "1577086664693-894d8405334a" + Q, // port aerial
  "equipment.jpg": P + "1581094794329-c8112a89af12" + Q,         // machinery
  "vessel-marine.jpg": P + "1605908502724-9093a79a1b39" + Q,     // cargo ship
  "aviation.jpg": P + "1436491865332-7a61a109cc05" + Q,          // airplane
  "energy.jpg": P + "1473341304170-971dccb5ac1e" + Q,            // power grid
  "renewables.jpg": P + "1466611653911-95081537e5b7" + Q,        // wind / solar
  "climate.jpg": P + "1441974231531-c6227db76b6e" + Q,           // landscape
  "esg.jpg": P + "1518531933037-91b2f5f229cc" + Q,               // green
  "transition.jpg": P + "1518005020951-eccb494ad742" + Q,        // green city
  "special-situations.jpg": P + "1522163182402-834f871fd851" + Q, // climb / help
};

export function demoImage(file) {
  return demoImages[file] ?? null;
}
