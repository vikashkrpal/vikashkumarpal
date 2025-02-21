export default async function sitemap() {
  const staticUrls = [
    "/seo-insights/",
    "/contact/",
    "/testimonials/",
    "/privacy-policy/",
    "/terms-and-conditions/",
    "/services/",
    "/industries/",
    "/consulting/",
    "/case-study/",
    "/portfolio/",
    "/seo-approach/",
    "/work-with-me/",
    "/about/",
    "/book-a-strategy-call/",
  ];

  const timestamps = getUpdatedDates(staticUrls.length);
  return [
    ...staticUrls.map((url, index) => ({
      url: `https://vikashkumarpal.com${url}`,
      lastModified: timestamps[index],
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  ];
}

function getUpdatedDates(count) {
  const now = new Date();
  const updatedDates = [];
  let baseTime = new Date();
  baseTime.setHours(15, 30, 0, 0);

  for (let i = 0; i < count; i++) {
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(baseTime.getHours()).padStart(2, "0");
    const minutes = String(baseTime.getMinutes()).padStart(2, "0");
    const seconds = String(baseTime.getSeconds()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
    updatedDates.push(formattedDate);
    baseTime = new Date(baseTime.getTime() + 7 * 60 * 1000);
  }

  return updatedDates;
}
