import Link from "next/link";

export default function Section_2({courses}) {

  return (
    <section className="pt-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="py-10 text-center">
          <h2
            className="xl:text-6xl text-4xl font-bold py-5 bg-clip-text text-transparent"
            style={{
              fontFamily: "Josefin Sans",
              backgroundImage:
                "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
            }}
          >
            Available Programs
          </h2>
        </div>
        {courses && courses.length > 0 ? (
          courses.map((course, index) => (
            <div key={index} className="py-10">
              <div
                className="flex flex-col lg:flex-row mx-auto bg-red-100 rounded-xl shadow-2xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative space-y-4 lg:space-y-0 lg:space-x-6"
                style={{ boxShadow: "0 8px 10px rgb(0 0 0 / 0.1)" }}
              >
                <div className="flex-1">
                  <h2
                    className="text-xl sm:text-2xl lg:text-6xl text-[#4a0a0a] mb-2 sm:mb-4"
                    style={{ fontFamily: "Josefin Sans" }}
                  >
                    {course.title}
                  </h2>

                  <p className="text-gray-900 text-sm sm:text-base lg:text-2xl font-[Jura] mb-4">
                    {course.description}
                  </p>

                  <ul className="list-disc list-inside text-gray-900 text-sm sm:text-base lg:text-2xl font-[Jura] space-y-1 mb-6">
                    {course.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="lg:absolute top-4 right-6 text-sm sm:text-base lg:text-2xl text-gray-700 font-[Jura] lg:text-right">
                  <p>Duration: {course.duration}</p>
                  <p>Level: {course.level}</p>
                </div>

                <div className="absolute bottom-8 right-8">
                  <Link
                    href={course.link}
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
          ))
        ) : (
          <div className="text-center lg:text-5xl text-4xl font-semibold text-gray-500 py-8 w-full">
            🚧 Coming Soon 🚧
          </div>
        )}
      </div>
    </section>
  );
}
