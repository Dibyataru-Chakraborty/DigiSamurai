// import fs from "fs";
// import path from "path";


// export function getGalleryData() {
//   const galleryRoot = path.join(process.cwd(), "../public", "events");

//   if (!fs.existsSync(galleryRoot)) return [];

//   const folders = fs
//     .readdirSync(galleryRoot)
//     .filter((f) => fs.statSync(path.join(galleryRoot, f)).isDirectory());

//   const data = []

//   folders.forEach((year) => {
//     const folderPath = path.join(galleryRoot, year);
//     const subItems = fs
//       .readdirSync(folderPath)
//       .filter((f) => fs.statSync(path.join(folderPath, f)).isDirectory());

//     // If it has subfolders → treat as Year > Events
//     if (subItems.length > 0) {
//       const yearObj = {
//         year: year,
//         events: subItems.map((eventName) => {
//           const eventPath = path.join(folderPath, eventName);
//           const images = fs
//             .readdirSync(eventPath)
//             .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
//             .map((file) => `/events/${year}/${date}/${eventName}/${file}`);

//           return {
//             title: eventName,
//             // date:
//             images,
//           };
//         }),
//       };
//       data.push(yearObj);
//     } else {
//       // If no subfolders → treat folder as year+event combined
//       const images = fs
//         .readdirSync(folderPath)
//         .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
//         .map((file) => `/events/${date}/${year}/${file}`);

//       if (images.length > 0) {
//         data.push({
//           year: year,
//           events: [
//             {
//               title: year,
//               images,
//             },
//           ],
//         });
//       }
//     }
//   });

//   return data;
// }

import fs from "fs";
import path from "path";

export function getGalleryData() {
  const galleryRoot = path.join(process.cwd(), "../public", "events");

  if (!fs.existsSync(galleryRoot)) return [];

  const years = fs
    .readdirSync(galleryRoot)
    .filter((year) => fs.statSync(path.join(galleryRoot, year)).isDirectory());

  const data = [];

  years.forEach((year) => {
    const yearPath = path.join(galleryRoot, year);
    const months = fs
      .readdirSync(yearPath)
      .filter((month) => fs.statSync(path.join(yearPath, month)).isDirectory());

    const events = [];

    months.forEach((month) => {
      const monthPath = path.join(yearPath, month);
      const eventFolders = fs
        .readdirSync(monthPath)
        .filter((event) => fs.statSync(path.join(monthPath, event)).isDirectory());

      eventFolders.forEach((eventTitle) => {
        const eventPath = path.join(monthPath, eventTitle);
        const images = fs
          .readdirSync(eventPath)
          .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
          .map((file) => `/events/${year}/${month}/${eventTitle}/${file}`);

        if (images.length > 0) {
          events.push({
            title: eventTitle,
            date: month,
            images,
          });
        }
      });
    });

    if (events.length > 0) {
      data.push({
        year,
        events,
      });
    }
  });

  return data;
}
