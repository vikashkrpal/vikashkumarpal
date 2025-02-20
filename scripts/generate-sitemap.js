import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix for `__dirname` in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://vikashkumarpal.com";

const sitemaps = [
  "index",
  "services",
  "consulting",
  "industries",
  "post",
  "page",
  "case-study",
  "category",
  "authors",
];

const lastmod = new Date().toISOString(); 

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd">
  ${sitemaps
    .map(
      (sitemap) => `
  <sitemap>
    <loc>${BASE_URL}/${sitemap}/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`
    )
    .join("")}
</sitemapindex>`;

// Save the file inside the `public/` folder
const sitemapPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(sitemapPath, sitemapXml);

console.log("✅ Sitemap generated at: public/sitemap.xml");
