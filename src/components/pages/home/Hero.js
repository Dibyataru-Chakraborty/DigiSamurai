// components/Hero.js
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
      <div className="absolute inset-0 opacity-35" style={{ backgroundColor: "#7B4C4C" }} />
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-6 brightness-100">
        <div>
          <h1 className="text-4xl md:text-7xl font-semibold font-[Josefin Sans]">
            Empowering businesses with cutting-edge security, compliance, and forensic solutions
          </h1>
        </div>

        {/* Centering this paragraph in the middle */}
        <div className="mt-8 text-lg md:text-3xl font-[Josefin Sans] max-w-3xl">
          Committed to proactively mitigating cyber threats, ensuring data integrity, and fostering a security-first culture through innovation, education and ethical practices.
        </div>

        {/* Certification section moved down */}
        <div className="absolute bottom-10 w-full flex flex-col items-center">
          {/* Horizontal Line */}
          <div className="w-5/6 h-[3px] bg-white"></div>

          {/* "We are certified by" text */}
          <div className="md:text-3xl font-[Josefin Sans] max-w-3xl mb-2">
            We are certified by
          </div>

          {/* Certification logos */}
          <div className="flex justify-between w-full max-w-6xl min-w-4xl">
            <div className="relative w-[120px] h-[70px]">
              <Image src={iso9001} alt="ISO 9001 Certification" className="object-contain filter brightness-100 bg-white rounded-lg h-full"/>
            </div>
            <div className="relative w-[120px] h-[70px]">
              <Image src={iso200001} alt="ISO 20000-1 Certification" className="object-contain filter brightness-100 bg-white rounded-lg h-full" />
            </div>
            <div className="relative w-[120px] h-[70px]">
              <Image src={iso27001} alt="ISO 27001 Certification" className="object-contain filter brightness-100 bg-white rounded-lg h-full" />
            </div>
            <div className="relative w-[120px] h-[70px]">
              <Image src={msme} alt="MSME Certification" className="object-contain filter brightness-100 bg-white rounded-lg h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
