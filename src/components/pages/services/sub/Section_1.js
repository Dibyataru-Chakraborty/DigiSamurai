export default function Section_1({ points, heading }) {
  return (
    <section className="pt-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2
            className="xl:text-6xl text-4xl font-bold py-5 text-[#F0E1E1]"
            style={{
              fontFamily: "Josefin Sans",
            }}
          >
            {heading}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center md:items-center">
          {/* Left: List */}
          <ul className="list-disc list-inside text-black lg:text-4xl text-2xl space-y-1 font-[Jura]">
            {points?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {/* Right: Heading */}
          <div className="mt-6 md:mt-0 text-center md:text-right md:max-w-lg w-full md:pl-10">
            <h2
              className="lg:text-7xl text-4xl py-5 bg-clip-text text-transparent leading-tight"
              style={{
                fontFamily: "Josefin Sans",
                backgroundImage:
                  "linear-gradient(90deg,rgba(255, 0, 5, 1) 0%, rgba(0, 0, 0, 1) 82%)",
              }}
            >
              Why entrust <br className="md:active" />
              <span className="font-bold">Digi Samurai</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
