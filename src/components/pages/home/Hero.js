import Image from "next/image";
import hero from "@/assets/img/Hero.png";
import msme from "@/assets/img/MSME.png";
import iso9001 from "@/assets/img/ISO9001.png";
import iso200001 from "@/assets/img/ISO200001.png";
import iso27001 from "@/assets/img/ISO27001.png";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      <div
        className="absolute inset-0 opacity-35"
        style={{ backgroundColor: "#7B4C4C" }}
      />

      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-[Josefin Sans]">
          Empowering businesses with cutting-edge security, compliance, and
          forensic solutions
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-sm sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl font-[Josefin_Sans] max-w-3xl">
          Committed to proactively mitigating cyber threats, ensuring data
          integrity, and fostering a security-first culture through innovation,
          education and ethical practices.
        </p>

        {/* Certification section pinned to bottom */}
        <div className="absolute bottom-4 left-0 right-0 w-full flex flex-col items-center px-4 sm:px-8">
          {/* Horizontal Line */}
          <div className="w-full sm:w-5/6 h-[2px] bg-white mb-3"></div>

          {/* "We are certified by" text */}
          <p className="text-xs sm:text-lg md:text-2xl font-[Josefin_Sans] mb-2">
            We are certified by
          </p>

          {/* Certification Logos */}
           <div className="flex justify-between w-full max-w-6xl min-w-4xl">
             {[iso9001, iso200001, iso27001, msme].map((logo, index) => (
              <div
                key={index}
                className="relative w-[120px] h-[70px]"
              >
                <Image
                  src={logo}
                  alt={`Certification ${index + 1}`}
                  className="object-contain filter brightness-100 bg-white rounded-lg h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

