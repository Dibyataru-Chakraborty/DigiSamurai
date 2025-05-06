// components/CardHoverEffectDemo.js
import SouravSir from "@/assets/img/SouravSir.png";
import PriyaMaam from "@/assets/img/PriyaMaam.png";
import Image from "next/image";
import LinkedinIcon from "@/assets/img/LinkedinIcon.png";
import Link from "next/link";

export default function Section_5() {
  return (
    <section className="pb-16 bg-white">
      <div className="container mx-auto px-8 py-16 w-full  p-6">
        <div
          className="w-full h-[3px] mx-auto max-w-7xl"
          style={{ backgroundColor: "#997677" }}
        ></div>
        <div className="mx-auto px-4 py-10">
          <h2
            className="text-6xl font-bold text-center mb-12 bg-clip-text text-transparent"
            style={{
              fontFamily: "Josefin Sans",
              backgroundImage:
                "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
            }}
          >
            Our leadership
          </h2>
          <div
            className="flex flex-col sm:flex-row justify-around items-center gap-8"
            style={{ fontFamily: "Jura" }}
          >
            <div className="flex flex-col items-center max-w-xs">
              <Image
                alt="Man in business suit sitting on black and red office chair with certificates on wall behind"
                className="rounded-xl object-cover h-full w-full"
                src={SouravSir}
              />
              <p className="text-3xl mt-4 text-center text-[#3a1a1a]">
                Sourav Bhaumik
              </p>
              <p className="text-center text-3xl text-[#3a1a1a]">Designation</p>
              <Link aria-label="LinkedIn profile of John Doe" href="https://www.linkedin.com/in/sourav-bhaumik-8732bb168/">
                <Image
                  src={LinkedinIcon}
                  alt="LinkedIn icon"
                  width={20}
                  height={20}
                  className="mx-auto mt-1"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <Image
                alt="Woman in business suit sitting on black and red office chair with certificates on wall behind"
                className="rounded-xl object-cover h-full w-full"
                src={PriyaMaam}
              />
              <p className="mt-4 text-center text-3xl text-[#3a1a1a]">
                Priya Bhaumik
              </p>
              <p className="text-center text-3xl text-[#3a1a1a]">Designation</p>
              <Link aria-label="LinkedIn profile of Jane Doe" href="#">
                <Image
                  src={LinkedinIcon}
                  alt="LinkedIn icon"
                  width={20}
                  height={20}
                  className="mx-auto mt-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
