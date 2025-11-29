/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://miguelmort.tech",
  generateRobotsTxt: true, // genera automáticamente robots.txt
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/admin/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/admin"],
      },
    ],
    additionalSitemaps: ["https://miguelmort.tech/sitemap.xml"],
  },
};
