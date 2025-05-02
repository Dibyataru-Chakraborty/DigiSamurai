// components/Hero.js
import hero from "@/assets/img/AboutHero.png";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center flex items-center justify-center h-96"
      style={{ backgroundImage: `url(${hero.src})` }}
    >

      {/* Content aligned to left with minimum margin */}
      <div className="absolute bottom-10 w-full flex flex-col container mx-auto justify-center items-start text-left text-white px-6 brightness-100">
        <h1 className="lg:text-9xl text-5xl font-semibold font-[Josefin Sans]">
          About Us
        </h1>
      </div>
    </section>
  );
}
