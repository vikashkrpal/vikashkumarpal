import Config from '../../config'

export default function handler(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(`
    User-agent: *
    Disallow:
    Sitemap: ${Config.appUrl}/sitemap.xml

  `);
}