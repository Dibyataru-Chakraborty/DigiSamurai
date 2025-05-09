import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Section_2({ heading, services }) {

  return (
    <>
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-8 py-16 w-full p-6 lg:w-5/6">
          <div
            className="w-full h-[3px] mx-auto max-w-7xl"
            style={{ backgroundColor: "#997677" }}
          ></div>
          <div className="mx-auto px-4 py-10">
            <h2
              className="text-center mb-12 xl:text-6xl text-4xl font-bold py-5 bg-clip-text text-transparent"
              style={{
                fontFamily: "Josefin Sans",
                backgroundImage:
                  "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
              }}
            >
              {heading}
            </h2>
            <div className="lg:max-w-5xl mx-auto lg:px-8">
              <HoverEffect items={services} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
