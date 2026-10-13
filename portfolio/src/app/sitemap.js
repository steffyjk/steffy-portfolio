const SITE = "https://www.steffy.in";

export default function sitemap() {
  return [
    { url: SITE, changeFrequency: "weekly", priority: 1 },
    ...["/skills", "/projects", "/experience", "/contact"].map((path) => ({
      url: SITE + path,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    ...["/terms", "/refund"].map((path) => ({
      url: SITE + path,
      changeFrequency: "yearly",
      priority: 0.3,
    })),
  ];
}
