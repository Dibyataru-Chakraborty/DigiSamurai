// components/Section_1.js
import Image from "next/image";
import illustration from "@/assets/img/Illustration.png";
import Design1 from "@/assets/img/Design1.png";

export default function Section_1() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-left">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mx-16">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2
              className="text-3xl lg:text-6xl font-bold m"
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
                  Our enthusiasm for innovation and perfection drives us to be a
                  leading firm in cybersecurity and compliance solutions.
                </p>
                <p className="mt-4 text-lg lg:text-xl">
                  We employ state-of-the-art technologies and sophisticated
                  procedures to secure all assets and guarantee regulatory
                  compliance.
                </p>
              </div>
            </div>
          </div>
          <Image
            alt="Team working on security solutions"
            className="w-full md:w-1/2"
            src={illustration}
            width={400}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
