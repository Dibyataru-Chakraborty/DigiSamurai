import Link from "next/link";

export default function Section_2() {
  return (
    <section className="pb-16 bg-white">
      <div className="container mx-auto px-8 py-16 w-full p-6">
        <div
          className="w-full h-[3px] mx-auto max-w-7xl"
          style={{ backgroundColor: "#997677" }}
        ></div>
        <div className="mx-auto px-4 py-10">
          <h2
            className="text-6xl font-bold text-center py-5 bg-clip-text text-transparent"
            style={{
              fontFamily: "Josefin Sans",
              backgroundImage:
                "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
            }}
          >
            To keep updated, follow us on
          </h2>
        </div>
        <div className="mt-4 flex justify-center space-x-16 text-[#7f2a1f] lg:text-7xl text-2xl sm:text-5xl">
          <Link href={"https://www.linkedin.com/in/digisamurai/"}><i className="fab fa-linkedin-in"></i></Link>
          <Link href={"https://www.youtube.com/@digi_samurai"}></Link><i className="fab fa-youtube"></i>
          <Link href={"https://www.facebook.com/digisamurais"}></Link><i className="fab fa-facebook-f"></i>
          <Link href={""}></Link><i className="fab fa-x-twitter"></i>
          <Link href={"https://www.instagram.com/digi.samurai_/"}></Link><i className="fab fa-instagram"></i>
        </div>
      </div>
    </section>
  );
}
