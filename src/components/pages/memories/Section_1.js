"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section_1({ eventData }) {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Get selected year's events
  const selectedYearGroup = eventData.find(
    (group) => String(group.year) === String(selectedYear)
  );

  const flatEvents = selectedYearGroup
    ? selectedYearGroup.months.flatMap((monthGroup) =>
        monthGroup.events.map((event) => ({
          ...event,
          date: monthGroup.month,
        }))
      )
    : [];

  const containerRef = useRef([]);
  if (containerRef.current.length !== flatEvents.length) {
    containerRef.current = new Array(flatEvents.length);
  }

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    //   if (ref) {
    //     gsap.from(ref, {
    //       opacity: 0,
    //       y: 50,
    //       duration: 1,
    //       ease: "power3.out",
    //       scrollTrigger: {
    //         trigger: ref,
    //         start: "top 80%",
    //         toggleActions: "play reverse play reverse",
    //       },
    //     });
    //   }
    // });

    containerRef.current.forEach((ref) => { 
      if (ref) {
      // Set initial state first
      gsap.set(ref, { opacity: 0, y: 50 });

      gsap.to(ref, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }
  });
  }, [flatEvents]);

  return (
    <section className="pt-7 bg-white">
      <div className="container mx-auto text-left lg:w-5/6">
        {/* Year Tabs */}
        <div className="flex justify-center items-center space-x-6 pb-14 text-gray-500 select-none">
          {eventData.map((yearGroup, index) => (
            <button
              key={index}
              onClick={() => setSelectedYear(yearGroup.year)}
              className={`cursor-pointer transition-colors font-mono ${
                yearGroup.year === String(selectedYear)
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
        {flatEvents && flatEvents.length > 0 ? (
          <>
            {flatEvents.map((event, eventIndex) => (
              <div
                ref={(el) => (containerRef.current[eventIndex] = el)}
                key={eventIndex}
                className="border-b border-gray-300 px-6 pt-6 pb-8"
              >
                <h2
                  className="xl:text-5xl text-3xl font-bold text-center mb-12 bg-clip-text text-transparent"
                  style={{
                    fontFamily: "Josefin Sans",
                    backgroundImage:
                      "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
                  }}
                >
                  {event.title}
                </h2>
                <div
                  className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-6 xl:text-3xl text-xl"
                  style={{ fontFamily: "Jura" }}
                >
                  <div className="md:w-1/3 lg:w-4/5 font-mono mb-4 md:mb-0">
                    <p className="mb-2 font-bold">{event.date}</p>
                    <p>{event.description}</p>
                  </div>
                  <div
                    className={`w-full ${
                      event.image.length > 1 ? "overflow-x-auto" : ""
                    } overflow-y-hidden no-scrollbar`}
                  >
                    <div
                      className={`flex items-center gap-6 ${
                        event.image.length > 2 ? "animate-scroll" : ""
                      } lg:${event.image.length === 1 ? "justify-center" : ""}`}
                    >
                      {event.image.map((img, index) => (
                        <Image
                          key={index}
                          alt="Gallery"
                          src={img.src}
                          width={200}
                          height={267}
                          className="w-[200px] h-[267px] object-contain"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="text-center lg:text-5xl text-4xl font-semibold text-gray-500 py-8 w-full">
            🚧 Coming Soon 🚧
          </div>
        )}
      </div>
    </section>
  );
}
