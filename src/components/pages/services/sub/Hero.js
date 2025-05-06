// components/pages/services/sub/Hero.js

import Link from "next/link";

export default function Hero({ title, heading, broucher, service_request }) {

  return (
    <section
      className="relative bg-cover bg-center flex items-center justify-center lg:h-96 h-[500px]"
      style={{
        backgroundImage:
          "linear-gradient(0deg,rgba(255, 0, 5, 1) 0%, rgba(0, 0, 0, 1) 136%)",
      }}
    >
      {/* Content aligned to left with minimum margin */}
      <div className="absolute bottom-10 w-full flex flex-col container mx-auto justify-center items-start text-left text-white px-6 brightness-100">
        <h1 className="lg:text-8xl text-5xl font-semibold font-[Josefin Sans]">
          {title}
        </h1>
        <div className="w-full px-6 flex flex-col sm:flex-row items-center justify-between pt-10">
          <h1 className="text-white text-center sm:text-left text-lg sm:text-xl max-w-xl leading-tight font-semibold">
            {heading}
          </h1>
          <div className="mt-4 sm:mt-0 flex space-x-4">
            <Link href={service_request}>
              <button className="bg-[#f9d9d7] text-[#a80000] rounded-full px-8 py-3 text-sm sm:text-base font-medium hover:brightness-90 transition">
                Request Service
              </button>
            </Link>
            {/* Download Brochure Button */}
            <Link
              href={broucher}
              download
              className="bg-red-800 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 mx-auto shadow-md hover:bg-red-800 transition justify-center group relative overflow-hidden"
            >
              <span className="group-hover:translate-x-40 transition duration-500">
                Download Brochure
              </span>
              <div className="absolute inset-0 flex items-center justify-center -translate-x-40 group-hover:translate-x-0 transition duration-500 z-10">
                <i className="fas fa-download"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
