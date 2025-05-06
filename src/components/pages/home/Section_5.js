"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Section_5() {
  const testimonials = [
    {
      name: "SAYAK MANDAL",
      role: "SOC Analyst",
      company: "ProcessIT Global Pvt. Ltd",
      image: "/path/to/image1.jpg",
      text: "“Completing the cybersecurity training at Digi Samurai was a game-changer for my career. The program offers hands-on learning with expert instructors who bring real-world experience to every lesson. Thanks to their practical approach and strong curriculum, I secured a great job in cybersecurity shortly after graduating. I highly recommend Digi Samurai to anyone serious about entering the field.”",
    },
    {
      name: "Rohan Nandi",
      role: "Auditor",
      company: "Singhi & Co.",
      image: "/path/to/image2.jpg",
      text: "“I recently completed the cybersecurity training at Digi Samurai, and it was one of the best decisions for my career. The program combines practical, hands-on experience with expert instruction, making complex topics easy to grasp. The instructors are knowledgeable and bring real-world insights into every lesson. Thanks to their guidance, I landed a great cybersecurity job soon after finishing the course. If you're serious about a career in cybersecurity, Digi Samurai is the place to start.”",
    },
    {
      name: "Raktima Auddi",
      role: "Auditor",
      company: "Singhi & Co.",
      image: "/path/to/image3.jpg",
      text: "“Digi Samurai’s hands-on cybersecurity training was a game-changer for my career. The expert instructors made complex concepts easy to grasp, and their real-world insights helped me land a great job soon after completing the course. Highly recommended for practical, high-quality training.”",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]);

  return (
    <section className="py-16 relative bg-white">
      <div className="container mx-auto text-center space-y-16">
        {/* Static content */}
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8 text-left">
          {/* Left section */}
          <div className="md:w-1/2 mb-6 md:mb-0 pr-24" style={{ fontFamily: "Josefin Sans" }}>
            <h2 className="text-black tracking-tight pl-4 text-6xl xl:text-8xl font-semibold">
              Industries we
            </h2>
            <h1 className="text-[#6B4B48] leading-tight mt-1 tracking-tight pl-4 text-6xl xl:text-9xl font-semibold">
              Served
            </h1>
            <div className="flex lg:space-x-12 space-x-4 mt-6 justify-end pr-0 xl:pr-6">
              {[12, 45, -12].map((deg, i) => (
                <div
                  key={i}
                  className="w-24 h-24 border border-red-500"
                  style={{ transform: `rotate(${deg}deg)` }}
                />
              ))}
            </div>
          </div>

          {/* Right section */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6 border-l border-[#6B4B48] pl-6 xl:pl-11" style={{ fontFamily: "Josefin Sans" }}>
            <ul className="list-disc list-inside leading-snug space-y-1 lg:text-4xl text-xl text-red-500 font-semibold">
              {[
                "Information Technology",
                "Power & Energy",
                "Banking",
                "Financial Services",
                "Telecom",
                "Government",
                "Construction",
                "Automobile",
              ].map((item, index) => (
                <li key={index}>
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg,#f35153 0%, #FF0005 35%, #800000 50%, #000000 100%)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <ul className="list-disc list-inside leading-snug space-y-1 lg:text-4xl text-xl text-red-500 font-semibold">
              {[
                "Health & Safety",
                "PSU",
                "Law Enforcement",
                "Defense",
                "Textile",
                "Mining",
                "Battery",
                "E-Commerce",
                "BPO",
              ].map((item, index) => (
                <li key={index}>
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg,#f35153 0%, #FF0005 35%, #800000 50%, #000000 100%)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Carousel */}
        <div className="pt-5">
          <span
            className="text-5xl bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#f35153 0%, #FF0005 35%, #800000 50%, #000000 100%)",
            }}
          >
            Valuable Testimonials
          </span>
        </div>

        <div
          className="mt-10 text-white rounded-3xl px-6 py-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 max-w-4xl mx-auto"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(255, 0, 5, 1) 0%, rgba(0, 0, 0, 1) 100%)",
          }}
        >
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="text-white text-2xl"
          >
            <FaChevronLeft />
          </button>

          <div className="flex items-center space-x-6 flex-1">
            <Image
              src={testimonials[currentIndex].image}
              alt={`${testimonials[currentIndex].name}'s photo`}
              className="w-20 h-20 rounded-full object-cover"
              width={80}
              height={80}
            />
            <div className="text-left">
              <p className="font-mono text-lg font-semibold">
                {testimonials[currentIndex].role}
              </p>
              <p className="mt-2 text-sm leading-relaxed font-mono">
                {testimonials[currentIndex].text}
              </p>
              <p className="mt-4 font-mono text-sm font-light">
                ~ {testimonials[currentIndex].name},{" "}
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="text-white text-2xl"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
