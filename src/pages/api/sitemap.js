import { DOMParser, XMLSerializer } from 'xmldom'; // Import xmldom

export default async function handler(req, res) {
    const { slug } = req.query; // Capture the slug from the request URL
    console.log(`Received request for slug: ${slug}`); // Log slug value

    try {
        const response = await fetch(`https://admin.vikashkumarpal.com/${slug}.xml`); // Fetch with slug
        if (!response.ok) {
            console.error('Failed to fetch the sitemap:', response.statusText);
            return res.status(404).send('Sitemap not found');
        }
        const xmlData = await response.text();

        // Parse XML using xmldom
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'application/xml');

        // Modify <loc> elements by removing 'admin'
        const locElements = xmlDoc.getElementsByTagName('loc');
        Array.from(locElements).forEach((loc) => {
            const originalUrl = loc.textContent;
            loc.textContent = originalUrl.replace('https://admin.', 'https://');
        });

        // Remove all <lastmod> elements
        const lastmodElements = xmlDoc.getElementsByTagName('lastmod');
        Array.from(lastmodElements).forEach((lastmod) => {
            lastmod.parentNode.removeChild(lastmod);
        });

        // Serialize XML back to string
        const serializer = new XMLSerializer();
        const modifiedXml = serializer.serializeToString(xmlDoc);

        // Set headers and return modified XML
        res.setHeader('Content-Type', 'application/xml');
        res.status(200).send(modifiedXml);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Internal Server Error');
    }
}
