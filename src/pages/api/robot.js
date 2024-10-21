import Config from '../../config'

export default function handler(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(`
   # Welcome to the robots.txt of Vikash Kumar Pal

        User-agent: *
        Allow: /
        Disallow: /thank-you/
        Disallow: /404-error/
        Disallow: /services/%5Bslug%5D*
        Disallow: /services/[slug]*
        Disallow: /consulting/%5Bslug%5D*
        Disallow: /consulting/[slug]*
        Disallow: /industries/%5Bslug%5D*
        Disallow: /industries/[slug]*
        Disallow: /case-study/%5Bslug%5D*
        Disallow: /case-study/[slug]*
        Disallow: /seo-insights/%5Bslug%5D*
        Disallow: /seo-insights/[slug]*
        Disallow: /seo-insights/category/%5Bslug%5D*
        Disallow: /seo-insights/category/[slug]*
        Disallow: /author/%5Bslug%5D*
        Disallow: /author/[slug]*
        Sitemap: ${Config.appUrl}/sitemap.xml
        
        # Created by Vikash Kumar Pal
        # SEO is not just about rankings. It's about giving search engines the right information.

  `);
}
