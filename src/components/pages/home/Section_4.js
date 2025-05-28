"use client";

import CountUp from "react-countup";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Section_4() {
  const stats = [
    { value: 3500, suffix: "+", label: "Customers served" },
    { value: 350, suffix: "+", label: "Cybersecurity experts" },
    { value: 100, suffix: "+", label: "Trained specialists" },
    { value: 150, suffix: "%", label: "Customer retention" },
  ];

  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-16 relative bg-white">
      <div
        className="container mx-auto flex flex-col lg:w-5/6 text-center items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8"
        style={{
          fontFamily: "Josefin Sans",
        }}
      >
        <h2
          className="text-5xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(255, 0, 5, 1) 0%, rgba(0, 0, 0, 1) 82%)",
          }}
        >
          2500+ Projects Completed
        </h2>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:border-t lg:border-b lg:border-black">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`px-4 ${index !== stats.length - 1 ? "lg:border-r lg:border-black" : ""}`}
            >
              <div className="my-8">
                <div className="text-5xl md:font-bold">
                  <CountUp end={stat.value}/>
                  {stat.suffix}
                </div>
                <div className="text-3xl">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
