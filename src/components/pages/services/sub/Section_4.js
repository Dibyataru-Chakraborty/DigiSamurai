"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";
import team from "@/assets/img/team.png";
import Image from "next/image";
import Link from "next/link";

export default function Section_4() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="pb-16 bg-white">
      <div className="max-w-7xl px-10 mx-auto rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row rounded-xl overflow-hidden">
          <div className="md:w-1/2 bg-[rgb(155,127,127)] bg-opacity-80 p-10 flex flex-col items-center justify-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
            <p className="text-white text-center lg:text-2xl leading-relaxed mb-6 font-[Jura] font-semibold">
              Ready to enhance your security and safeguard your business with
              our team of experts to provide trusted guidance, proactive
              solutions, and comprehensive support?
            </p>
            <Link href="/contact">
              <button className="bg-[#f9d9d9] text-[#b33a3a] text-sm rounded-full py-2 px-6 w-max mx-auto md:mx-0">
                Contact us now
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 mask-l-from-50% mask-l-to-90%">
            <Image
              alt="Team of six people sitting around a white table with laptops and a TV screen on the wall in a meeting room"
              className="w-full h-full object-cover"
              height={300}
              src={team}
              width={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
