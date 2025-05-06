// components/Section_1.js
import Image from "next/image";
import illustration from "@/assets/img/About_Illustration.png";

export default function Section_1() {
  return (
    <section className="pt-16 bg-white">
      <div className="container mx-auto text-left">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mx-16">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2
              className="text-xl lg:text-2xl font-bold mb-6"
              style={{ fontFamily: "Jura" }}
            >
              At Digi Samurai, we are passionate about innovation and
              excellence. Our team of dedicated experts is committed to
              delivering exceptional cybersecurity and data science services,
              while upholding the highest ethical standards.
            </h2>
            <div className="w-full">
              <Image
                alt="Team working on security solutions"
                className="w-full h-auto max-w-[700px] mx-auto"
                src={illustration}
                priority
              />
            </div>
          </div>
          <div className="w-full lg:w-3/4 pl-0 lg:pl-4 text-center lg:text-right">
            <p className="mt-4 text-4xl lg:text-6xl xl:text-8xl text-center" style={{color: "#7B4C4C", fontFamily: "Josefin Sans"}}>
              Secure. Protect. Thrive.
            </p>
            <p className="mt-4 text-xl lg:text-2xl xl:text-3xl font-[Jura]">
              Digi Samurai, established in 2023, operates across all 360 domains
              of cyber and information security. We provide comprehensive
              security solutions and have successfully partnered with numerous
              clients across India. Our expertise spans a broad range of
              cybersecurity areas, ensuring that we deliver effective protection
              and strategic insights tailored to each client’s needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
