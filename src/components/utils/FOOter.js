import Image from "next/image";
import Footer from "@/assets/img/Footer.svg";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export default function FOOter() {
  return (
    <section className="relative">
      {/* SVG background layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Footer}
          alt="Logo"
          className="w-full h-auto"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Text content layer - aligned left */}
      <div
        className="relative w-fit h-auto bg-white text-transparent bg-clip-text 2xl:pl-32 xl:pl-28 md:pl-32 pl-1 flex flex-col justify-start py-0 xl:py-10 lg:py-6 md:py-2 sm:py-1"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(0, 0, 0, 1) 0%, rgba(255, 0, 0, 1) 77%)",
        }}
      >
        <div className="text-base sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold tracking-tight pl-4 sm:pl-6 md:pl-10 lg:pl-16 xl:pl-24 2xl:pl-32">
          Innovation
        </div>
        <div className="text-base sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold tracking-tight pl-14 sm:pl-16 md:pl-60 lg:pl-72 2xl:pl-96">
          Excellence
        </div>
        <div className="text-base sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold tracking-tight pl-6 sm:pl-10 md:pl-16 lg:pl-28 2xl:pl-40">
          Integrity
        </div>
      </div>

    </section>
  );
}
