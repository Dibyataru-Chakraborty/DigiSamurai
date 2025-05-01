"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Section_5() {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Student",
      company: "Microsoft",
      image: "/path/to/image1.jpg",
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et sem ac erat tincidunt auctor ac ut libero. Proin sed congue elit, eget dictum dolor. Cras dignissim ornare risus ut commodo.”",
    },
    {
      name: "John Smith",
      role: "Engineer",
      company: "Google",
      image: "/path/to/image2.jpg",
      text: "“Suspendisse potenti. Nullam vehicula, justo at fermentum tincidunt, ligula sapien tincidunt arcu, non tincidunt justo sapien nec eros.”",
    },
    {
      name: "Alice Johnson",
      role: "Designer",
      company: "Apple",
      image: "/path/to/image3.jpg",
      text: "“Praesent nec magna at ipsum facilisis tincidunt. Integer vel libero id justo tincidunt tincidunt.”",
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

  return (
    <section className="py-16 relative bg-gray-100">
      <div className="container mx-auto text-center space-y-16">
        {/* Static content */}
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8 text-left">
          {/* Left section */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-black text-6xl tracking-tight pl-4">
              Industries we
            </h2>
            <h1 className="text-[#6B4B48] leading-tight mt-1 text-6xl tracking-tight pl-4">
              Served
            </h1>
            <div className="flex space-x-6 mt-6 justify-end p-5">
              <div className="w-20 h-20 border border-red-500 rotate-12"></div>
              <div className="w-20 h-20 border border-red-500 rotate-45"></div>
              <div className="w-20 h-20 border border-red-500 -rotate-12"></div>
            </div>
          </div>
          {/* Right section */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6 border-l border-[#6B4B48] pl-6">
            <ul className="list-disc list-inside text-sm font-semibold leading-snug space-y-1">
              <li>Information Technology</li>
              <li>Power &amp; Energy</li>
              <li>Banking</li>
              <li>Financial Services</li>
              <li>Telecom</li>
              <li>Government</li>
              <li>Construction</li>
              <li>Automobile</li>
            </ul>
            <ul className="list-disc list-inside text-sm font-semibold leading-snug space-y-1">
              <li>Health &amp; Safety</li>
              <li>PSU</li>
              <li>Law Enforcement</li>
              <li>Defense</li>
              <li>Textile</li>
              <li>Mining</li>
              <li>Battery</li>
              <li>E-Commerce</li>
              <li>BPO</li>
            </ul>
          </div>
        </div>

        {/* Carousel */}
        <div className="pt-5">
          <span
            className="text-5xl bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
            }}
          >
            Valuable Testimonials
          </span>
        </div>
        <div className="mt-10 text-white rounded-3xl px-6 py-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 max-w-4xl mx-auto" style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(243, 81, 83) 0%, rgb(255, 0, 5) 35%, rgb(128, 0, 0) 50%, rgb(67 4 4) 100%)",
            }}>
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
