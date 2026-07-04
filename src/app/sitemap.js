import locationsData from "@/data/locations.json";

export default async function sitemap() {
  const baseUrl = "https://srspackersandmovers.com";

  // Static pages
  const staticPaths = [
    "",
    "/about",
    "/contacts",
    "/faq",
    "/services",
    "/why-choose-us",
    "/track-shipment",
    "/clients",
    "/gallery",
    "/branches",
    "/blogs",
    "/cookie-policy",
    "/disclaimer",
    "/privacy-policy",
    "/refund-policy",
    "/terms-conditions"
  ];

  const staticEntries = staticPaths.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.8
  }));

  // Dynamic location pages
  const dynamicEntries = Object.keys(locationsData).map(slug => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6
  }));

  return [...staticEntries, ...dynamicEntries];
}
