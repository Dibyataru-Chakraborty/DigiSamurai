"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";
import Image from "next/image";

export default function Section_3({ sections = [] }) {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="bg-white">
      <div className="container mx-auto px-8 py-16 w-full p-6">
        {Array.isArray(sections) && sections.length > 0 ? (
          sections.map((block, index) => {
            const isEven = index % 2 === 0;
            const heading = block?.heading || "";
            const items = Array.isArray(block?.items) ? block.items : [];

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  isEven ? "" : "md:flex-row-reverse"
                } items-center md:items-start justify-center md:justify-between gap-6 md:gap-20 mb-12`}
              >
                {/* Heading */}
                <h2
                  className="text-red-600 font-semibold text-4xl md:text-6xl leading-tight md:leading-snug text-center md:text-left w-full md:w-auto pt-10"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  {heading}
                </h2>

                {/* Logos */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-20 mb-12 w-full">
                  {/* Scrollable logo list */}
                  <div className="w-full lg:w-5/6 md:w-auto overflow-x-auto overflow-y-hidden no-scrollbar">
                    <div className="flex gap-4 sm:gap-6 md:gap-8 animate-scroll px-2 sm:px-4">
                      {items.length > 0 ? (
                        items.map((item, idx) =>
                          item?.logo && item?.name ? (
                            <div
                              key={idx}
                              className="flex flex-col items-center justify-center min-w-[120px] sm:min-w-[140px] md:min-w-[160px]"
                            >
                              <Image
                                alt={item.name}
                                src={item.logo}
                                width={160}
                                height={160}
                                className="object-contain h-[80px] sm:h-[100px] md:h-[120px]"
                              />
                              <p className="text-center text-xs sm:text-sm mt-2 font-medium">
                                {item.name}
                              </p>
                            </div>
                          ) : null
                        )
                      ) : (
                        null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          null
        )}
      </div>
    </section>
  );
}
