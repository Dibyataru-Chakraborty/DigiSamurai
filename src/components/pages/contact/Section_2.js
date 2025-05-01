export default function Section_2() {
  return (
    <section className="pb-16 bg-gray-100 ">
      <div className="container mx-auto px-8 py-16 w-full  p-6">
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
        <div className="mt-4 flex justify-center space-x-16 text-[#7f2a1f] lg:text-7xl text-5xl">
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </section>
  );
}
