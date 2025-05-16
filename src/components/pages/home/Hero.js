"use client";

import Image from "next/image";
import Slider from "react-slick";

import hero from "@/assets/img/Hero.png";
import hero2 from "@/assets/img/Hero2.png";
import hero3 from "@/assets/img/Hero3.png";
import hero4 from "@/assets/img/Hero4.png";
import msme from "@/assets/logo/MSME.png";
import iso9001 from "@/assets/logo/ISO9001.jpg";
import iso200001 from "@/assets/logo/ISO200001.jpg";
import iso27001 from "@/assets/logo/ISO27001.jpg";
import iso27701 from "@/assets/logo/ISO27701.jpg";
import iso22301 from "@/assets/logo/ISO22301.jpg";

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
  {
    image: hero3.src, // Replace with another image if available
    title: "Your expertise, always within easy reach",
    subtitle:
      "Harness innovative strategies and advanced practices to effectively safeguard your assets and maintain a competitive advantage, ensuring you stay ahead in the dynamic and rapidly evolving digital landscape.",
  },
  {
    image: hero4.src, // Replace with another image if available
    title: "Transform challenges into opportunities",
    subtitle:
      "Unlock customized solutions crafted to meet your unique needs and propel your business forward. We turn potential obstacles into strategic advantages, helping you thrive in an ever-evolving landscape.",
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
    SwipeDirection: "left",
  };

  return (
    <>
      <section className="relative min-h-[350px] md:min-h-[650px] lg:h-screen overflow-hidden text-white bg-[#010102]">
        {/* Background Carousel */}
        <Slider {...settings}>
          {slides.map((slide, index) => {
            const isLastTwo = index >= slides.length - 2;
            return (
              <div key={index}>
                <div
                  className="min-h-[200px] md:min-h-[600px] lg:h-screen bg-cover bg-center flex items-center justify-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div
                    className={`container px-4 sm:px-14 ${
                      isLastTwo
                        ? "text-right xl:pl-[36rem] lg:pl-72 md:pl-60 pl-4 lg:w-5/6"
                        : "text-start 2xl:pr-96 lg:pr-72 md:pr-60 pr-4 lg:w-5/6"
                    }`}
                  >
                    <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-[Josefin Sans]">
                      {slide.title}
                    </h1>
                    <p
                      className={`mt-4 text-sm sm:text-lg md:text-2xl font-[Josefin_Sans] ${
                        isLastTwo ? "" : "max-w-3xl"
                      }`}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>

        {/* Certification Section Fixed at Bottom */}
        <div className="absolute bottom-4 left-0 right-0 w-full flex flex-col items-center px-4 sm:px-8 z-10">
          <div className="w-full sm:w-5/6 h-[2px] bg-white mb-3"></div>
          <p className="text-xs sm:text-lg md:text-2xl font-[Josefin_Sans] mb-2">
            We are certified by
          </p>
          <div className="pt-6 flex justify-between w-full max-w-6xl min-w-4xl">
            {[iso27001, iso27701, iso22301, iso200001, iso9001, msme].map(
              (logo, index) => {
                const isMsme = logo === msme;

                const width = isMsme ? 120 : 67;
                const height = isMsme ? 70 : 64;

                return (
                  <div
                    key={index}
                    className={`relative w-[${width}px] h-[${height}px] flex items-center justify-center mx-2`}
                  >
                    <Image
                      src={logo}
                      alt={`Certification ${index + 1}`}
                      className="object-contain filter brightness-100 bg-white rounded-lg h-full"
                      width={width}
                      height={height}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
}
