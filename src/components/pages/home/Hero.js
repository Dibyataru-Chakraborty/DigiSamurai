"use client";

import Image from "next/image";
import Slider from "react-slick";

import hero from "@/assets/img/Hero.png";
import hero2 from "@/assets/img/Hero2.png";
import msme from "@/assets/img/MSME.png";
import iso9001 from "@/assets/img/ISO9001.png";
import iso200001 from "@/assets/img/ISO200001.png";
import iso27001 from "@/assets/img/ISO27001.png";
import iso27701 from "@/assets/img/ISO27701.png";
import iso22301 from "@/assets/img/ISO22301.png";

const slides = [
  {
    image: hero.src,
    title: "Comprehensive Insights, Simplified",
    subtitle:
      "Digi Samurai commands 360-degree mastery in information security and IT domains, turning complex challenges into powerful, actionable strategies for unparalleled success.",
  },
  {
    image: hero2.src, // Replace with another image if available
    title: "Your partner in long term sustainable success",
    subtitle:
      "Achieve your strategic goals and ensure lasting success with our expert guidance, unwavering commitment, and innovative solution tailored to your unique needs.",
  },
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  return (
    <section className="relative h-screen overflow-hidden text-white">
      {/* Background Carousel */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="h-screen bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="text-start container px-4 sm:px-6 2xl:pr-96 lg:pr-72 md:pr-60 pr-4"> 
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-[Josefin Sans]">
                  {slide.title}
                </h1>
                <p className="mt-6 text-sm sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl font-[Josefin_Sans] max-w-3xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Certification Section Fixed at Bottom */}
      <div className="absolute bottom-4 left-0 right-0 w-full flex flex-col items-center px-4 sm:px-8 z-10">
        <div className="w-full sm:w-5/6 h-[2px] bg-white mb-3"></div>
        <p className="text-xs sm:text-lg md:text-2xl font-[Josefin_Sans] mb-2">
          We are certified by
        </p>
        <div className="flex justify-between w-full max-w-6xl min-w-4xl">
          {[iso27001, iso27701, iso22301, iso200001, iso9001,, msme].map((logo, index) => (
            <div key={index} className="relative 2xl:w-[120px] 2xl:h-[70px] sm:w-[80px] sm:h-[60px] w-[60px] h-[40px] flex items-center justify-center mx-2">
              <Image
                src={logo}
                alt={`Certification ${index + 1}`}
                className="object-contain filter brightness-100 bg-white rounded-lg h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
