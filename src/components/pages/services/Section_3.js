import AcademicsFooter from "@/assets/img/AcademicsFooter.png";

export default function Section_3() {
  return (
    <section
      className="relative bg-cover bg-center h-[30rem] flex items-center justify-center"
      style={{ backgroundImage: `url(${AcademicsFooter.src})` }}
    >

      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <h1 className="text-lg sm:text-xl md:text-3xl font-[Jura] font-medium leading-relaxed">
          <span className="text-6xl sm:text-9xl text-red-500 block text-left leading-none h-12">
            “
          </span>
          We lead the way in delivering bespoke cybersecurity and compliance
          solutions that safeguard your business and streamline your regulatory
          processes. Partner with us to build robust security frameworks,
          enhance your team’s capabilities, and leverage the latest innovations
          to stay secure and competitive in an ever-evolving digital landscape.
          <span className="text-6xl sm:text-9xl text-red-500 block text-right leading-none h-11">
            ”
          </span>
        </h1>
      </div>
    </section>
  );
}
