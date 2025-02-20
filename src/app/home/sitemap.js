export default async function sitemap() {
  return [
    {
      url: "https://vikashkumarpal.com/",
      lastModified: getUpdatedDate(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}

// Function to update only the date while keeping the time constant
function getUpdatedDate() {
  const now = new Date();
  const fixedTime = "00:30:12"; // Keeping the time constant (HH:MM:SS)

  // Extract current date
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Month is 0-based
  const day = String(now.getDate()).padStart(2, "0");

  // Construct the new date string with fixed time
  const updatedDate = `${year}-${month}-${day}T${fixedTime}+05:30`;

  return updatedDate;
}
