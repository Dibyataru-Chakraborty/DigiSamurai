"use client";

import { useState } from "react";
import Image from "next/image";

const eventData = [
  {
    year: 2023,
    events: [
      {
        date: "15th August",
        title: "Event ABC",
        description:
          "Event ABC details for 2023. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: [
          {
            // src: "https://storage.googleapis.com/a1aa/image/d0239115-9edb-4520-c213-7a68ac80cbef.jpg",
            alt: "Image 1",
            width: 120,
            height: 120,
          },
        ],
      },
      {
        date: "1st November",
        title: "Event DEF",
        description:
          "Event DEF for 2023. Pellentesque habitant morbi tristique senectus.",
        images: [
          {
            // src: "https://storage.googleapis.com/a1aa/image/f283b5b7-70b7-484a-8146-b47d41cd21c2.jpg",
            alt: "Image 2",
            width: 80,
            height: 120,
          },
        ],
      },
    ],
  },
  {
    year: 2024,
    events: [
      {
        date: "25th December",
        title: "Event XYZ",
        description:
          "Event XYZ details for 2024. Cras et sem ac erat tincidunt auctor.",
        images: [
          {
            // src: "https://storage.googleapis.com/a1aa/image/d0239115-9edb-4520-c213-7a68ac80cbef.jpg",
            alt: "Square",
            width: 120,
            height: 120,
          },
          {
            // src: "https://storage.googleapis.com/a1aa/image/f283b5b7-70b7-484a-8146-b47d41cd21c2.jpg",
            alt: "Rectangle",
            width: 80,
            height: 120,
          },
          {
            // src: "https://storage.googleapis.com/a1aa/image/d853fd58-fa27-43f2-e6ab-9c3d0a38250f.jpg",
            alt: "Thin Rectangle",
            width: 20,
            height: 120,
          },
        ],
      },
    ],
  },
  {
    year: 2025,
    events: [
      {
        date: "25th December",
        title: "Event XYZ",
        description:
          "Event XYZ details for 2024. Cras et sem ac erat tincidunt auctor.",
        images: [
          {
            // src: "https://storage.googleapis.com/a1aa/image/d0239115-9edb-4520-c213-7a68ac80cbef.jpg",
            alt: "Square",
            width: 120,
            height: 120,
          },
          {
            // src: "https://storage.googleapis.com/a1aa/image/f283b5b7-70b7-484a-8146-b47d41cd21c2.jpg",
            alt: "Rectangle",
            width: 80,
            height: 120,
          },
          {
            // src: "https://storage.googleapis.com/a1aa/image/d853fd58-fa27-43f2-e6ab-9c3d0a38250f.jpg",
            alt: "Thin Rectangle",
            width: 20,
            height: 120,
          },
        ],
      },
    ],
  },
];

export default function Section_1() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const selectedYearGroup = eventData.find(
    (group) => group.year === selectedYear
  );

  return (
    <section className="pt-7 bg-gray-100">
      <div className="container mx-auto text-left">
        {/* Year Tabs */}
        <div className="flex justify-center items-center space-x-6 pb-14 text-gray-500 select-none">
          {eventData.map((yearGroup, index) => (
            <button
              key={index}
              onClick={() => setSelectedYear(yearGroup.year)}
              className={`cursor-pointer transition-colors font-mono ${
                yearGroup.year === selectedYear
                  ? "text-red-600 font-semibold xl:text-6xl text-4xl"
                  : "xl:text-4x text-xl hover:text-red-400"
              }`}
              style={{ fontFamily: "Jura" }}
            >
              {yearGroup.year}
            </button>
          ))}
        </div>

        {/* Filtered Events */}
        {selectedYearGroup && (
          <div>
            {selectedYearGroup.events.map((event, eventIndex) => (
              <div
                key={eventIndex}
                className="border-b border-gray-300 px-6 pt-6 pb-8"
              >
                <h2
                  className="xl:text-6xl text-3xl font-bold text-center mb-12 bg-clip-text text-transparent"
                  style={{
                    fontFamily: "Josefin Sans",
                    backgroundImage:
                      "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
                  }}
                >
                  {event.title}
                </h2>
                <div
                  className="flex flex-col sm:flex-row sm:space-x-6 xl:text-3xl text-xl"
                  style={{ fontFamily: "Jura" }}
                >
                  <div className="sm:w-1/3 font-mono mb-4 sm:mb-0">
                    <p className="mb-2 font-semibold">{event.date}</p>
                    <p>{event.description}</p>
                  </div>
                  <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
                    <div className="flex gap-6 animate-scroll">
                      {event.images.map((img, index) => (
                        <Image
                          key={index}
                          alt={img.alt}
                          src={img.src}
                          width={img.width}
                          height={img.height}
                          className="object-contain"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
