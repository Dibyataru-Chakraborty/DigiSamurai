// components/Hero.js
import hero from "@/assets/img/AboutHero.png";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-96 flex items-center justify-center"
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 opacity-35" style={{ backgroundColor: "#7B4C4C" }} />

      {/* Content aligned to left with minimum margin */}
      <div className="absolute bottom-10 w-full flex flex-col container mx-auto justify-center items-start text-left text-white px-6 brightness-100">
        <h1 className="text-9xl font-semibold font-[Josefin Sans]">
          About Us
        </h1>
      </div>
    </section>
  );
}
