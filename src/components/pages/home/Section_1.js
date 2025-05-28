"use client";
import Image from "next/image";
import illustration from "@/assets/img/Illustration.png";
import Design1 from "@/assets/logo/Design1.png";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Section_1() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto text-left">
        <div className="flex flex-col xl:flex-row items-center justify-center space-y-8 xl:space-y-0 xl:space-x-8 mx-16">
          <div className="xl:w-1/2 w-full text-center xl:text-left">
            <h2
              className="text-3xl lg:text-6xl font-bold"
              style={{ fontFamily: "Josefin Sans" }}
            >
              Establishing new Benchmarks in Digital Protection
              <span style={{ color: "#AE9191" }}>
                {" "}
                through our team of committed professionals.
              </span>
            </h2>

            <div className="flex flex-col lg:flex-row justify-start mt-4 font-[Jura] items-center lg:items-end">
              {/* Decorative Image */}
              <div className="relative items-center lg:w-1/2">
                <Image
                  alt="Decorative small image"
                  className="rounded-lg"
                  src={Design1}
                  width={200}
                  height={200}
                />
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-3/4 pl-0 lg:pl-4 text-center lg:text-left">
                <p className="mt-4 text-lg lg:text-xl">
                  We are committed to delivering trusted cybersecurity and
                  compliance solutions through a combination of advanced
                  technologies, proven methodologies, and industry best
                  practices.
                </p>
                <p className="mt-4 text-lg lg:text-xl">
                  Our focus is on protecting critical assets, mitigating risks,
                  and ensuring adherence to global regulatory standards with
                  precision and reliability.
                </p>
              </div>
            </div>
          </div>
          <Image
            alt="Team working on security solutions"
            className="w-full lg:w-1/2 sm:w-3/4"
            src={illustration}
            width={400}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
