// components/CardHoverEffectDemo.js
import academicscourses from "@/assets/img/academicscourses.png";
import Image from "next/image";
import Link from "next/link";

export default function Section_2() {
  return (
    <section className="pb-16 bg-white">
      <div className="container mx-auto px-8 py-16 w-full  p-6">
        <div
          className="w-full h-[3px] mx-auto max-w-7xl"
          style={{ backgroundColor: "#997677" }}
        ></div>
        <div className="mx-auto px-4 py-10">
          <h2
            className="text-center mb-12 xl:text-6xl text-5xl font-bold py-5 bg-clip-text text-transparent"
            style={{
              fontFamily: "Josefin Sans",
              backgroundImage:
                "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
            }}
          >
            Our certified courses
          </h2>
          <div className="flex justify-center items-center lg:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:max-w-6xl w-full">
              <div className="bg-pink-100 rounded-2xl shadow-lg shadow-pink-300/50 overflow-hidden  px-4 py-4">
                <Image
                  alt="Top view of hands typing on a laptop keyboard on a wooden desk"
                  className="w-full rounded-t-2xl object-cover"
                  height={300}
                  src={academicscourses}
                  width={600}
                />
                <div className="py-8 text-center">
                  <h2
                    className="lg:text-6xl text-3xl text-gray-900 mb-6"
                    style={{ fontFamily: "Josefin Sans" }}
                  >
                    Cyber Security
                  </h2>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/academics/cybersecurity"
                      download
                      className="bg-red-700 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 mx-auto shadow-md hover:bg-red-800 transition justify-center group relative overflow-hidden"
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

              <div className="bg-pink-100 rounded-2xl shadow-lg shadow-pink-300/50 overflow-hidden px-4 py-4">
                <Image
                  alt="Top view of hands typing on a laptop keyboard on a wooden desk"
                  className="w-full rounded-t-2xl object-cover"
                  height={300}
                  src={academicscourses}
                  width={600}
                />
                <div className="py-8 text-center">
                  <h2
                    className="lg:text-6xl text-3xl text-gray-900 mb-6"
                    style={{ fontFamily: "josefin Sans" }}
                  >
                    Data Science
                  </h2>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/academics/datascience"
                      download
                      className="bg-red-700 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 mx-auto shadow-md hover:bg-red-800 transition justify-center group relative overflow-hidden"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
