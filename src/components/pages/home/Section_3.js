"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Section_3() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:w-5/6 lg:text-left font-bold ">
        <div
          className="w-full h-[3px]"
          style={{ backgroundColor: "#997677" }}
        ></div>

        <div className="px-2 flex flex-col lg:flex-row items-center justify-center mt-[6rem] space-y-8 lg:space-y-0 lg:space-x-8 mx-4 lg:mx-16">
          <div className="text-left">
            <h1
              className="text-5xl bg-clip-text text-transparent-bold"
              style={{ fontFamily: "Josefin Sans" }}
            >
              Pioneering <br></br>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#f35153 0%, #FF0005 35%, #800000 50%, #000000 100%)",
                }}
              >
                Organisational Autonomy
              </span>{" "}
              at every scale
            </h1>
          </div>
          <div
            className="text-right max-w-md mt-4 lg:mt-0"
            style={{ fontFamily: "Jura" }}
          >
            <p className="text-lg text-gray-700">
              We are a trusted and forward-thinking cybersecurity
              partner—empowering organizations and individuals to operate
              securely in a rapidly evolving digital world.
            </p>
          </div>
        </div>

        <div
          className="mt-[6rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
          style={{ fontFamily: "Jura" }}
        >
          {[
            {
              title: "Revolutionise",
              description:
                "Redefining industry standards with cutting-edge security solutions that set new benchmarks in digital safety and operational integrity.",
              number: "01",
            },
            {
              title: "Innovate",
              description:
                "Integrating the latest advancements in technology to stay ahead of emerging threats.",
              number: "02",
            },
            {
              title: "Skill-up",
              description:
                "Offer unique and comprehensive educational programs, to elevate the expertise of cybersecurity professionals.",
              number: "03",
            },
            {
              title: "Partnership",
              description:
                "Building lasting client relationships through reliable service, tailored solutions, and a deep commitment to shared security goals.",
              number: "04",
            },
          ].map((item, index) => (
            <div key={index}>
              <h2 className="text-4xl font-bold">{item.title}</h2>{" "}
              {/* Added custom margin top */}
              <div
                className="w-full h-[3px] mt-8"
                style={{ backgroundColor: "#997677" }}
              ></div>
              <div className="flex flex-col lg:flex-row mt-8 space-y-4 lg:space-y-0 lg:space-x-8">
                <div className="text-left">
                  <p className="text-6xl" style={{ color: "#AE9191" }}>
                    {item.number}
                  </p>
                </div>
                <div className="text-left max-w-md">
                  <p className="text-base text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
