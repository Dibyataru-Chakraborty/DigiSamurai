import * as contentful from "contentful";

const contentfulclient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getEventData() {
  const res = await contentfulclient.getEntries({
    content_type: "year",
    include: 3,
  });
  
  const groupedByYear = {};

  res.items.forEach((yearItem) => {
    const year = yearItem.fields.year;
    const rawMonths = yearItem.fields.month;
    const months = Array.isArray(rawMonths)
      ? rawMonths
      : rawMonths
        ? [rawMonths]
        : [];

    if (!groupedByYear[year]) {
      groupedByYear[year] = {
        year,
        months: [],
      };
    }

    months.forEach((monthItem) => {
      const monthName = monthItem.fields.month;
      const events = monthItem.fields.events || [];

      const formattedEvents = events.map((eventItem) => {
        const imageGroups = (eventItem.fields.image || []).flatMap(
          (imgEntry) => {
            const groupDesc = imgEntry.fields.description || "";
            const nestedAssets = imgEntry.fields.image || [];

            return nestedAssets.map((asset) => ({
              src: "https:" + asset.fields.file.url,
              description: groupDesc,
            }));
          }
        );

        const firstGroup = imageGroups.length
          ? {
              description: imageGroups[0].description,
              image: imageGroups.map((img) => ({ src: img.src })),
            }
          : { description: "", image: [] };

        return {
          title: eventItem.fields.title,
          description: firstGroup.description,
          image: firstGroup.image,
        };
      });

      groupedByYear[year].months.push({
        month: monthName,
        events: formattedEvents,
      });
    });
  });

  const sortedYears = Object.values(groupedByYear).sort(
    (a, b) => a.year - b.year
  );

  sortedYears.forEach((yearObj) => {
    yearObj.months.sort(
      (a, b) => new Date(`2000 ${a.month}`) - new Date(`2000 ${b.month}`)
    );
  });

  return sortedYears;
}
