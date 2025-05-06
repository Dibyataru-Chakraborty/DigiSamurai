// components/Hero.js

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center flex items-center justify-center h-96"
      style={{ backgroundImage: "linear-gradient(0deg,rgba(255, 0, 5, 1) 0%, rgba(0, 0, 0, 1) 136%)" }}
    >

      {/* Content aligned to left with minimum margin */}
      <div className="absolute bottom-10 w-full flex flex-col container mx-auto justify-center items-start text-left text-white px-6 brightness-100">
        <h1 className="lg:text-9xl text-5xl font-semibold font-[Josefin Sans]">
          Cybersecurity
        </h1>
      </div>
    </section>
  );
}
