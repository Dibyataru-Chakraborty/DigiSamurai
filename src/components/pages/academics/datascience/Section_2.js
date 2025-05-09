import Link from "next/link";

export default function Section_2() {
  const courses = [];

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
            <div
              key={index}
              className="mx-auto bg-red-100 rounded-xl shadow-2xl px-8 py-8 relative my-11"
              style={{ boxShadow: "0 8px 10px rgb(0 0 0 / 0.1)" }}
            >
              <h2
                className="text-2xl lg:text-6xl text-[#4a0a0a] mb-4"
                style={{ fontFamily: "Josefin Sans" }}
              >
                {course.title || "Untitled Course"}
              </h2>
              <div className="absolute top-8 right-8 text-right text-sm lg:text-2xl text-gray-700 font-[Jura]">
                <p>Duration: {course.duration || "Not Available"}</p>
                <p>Level: {course.level || "Not Available"}</p>
              </div>
              <p className="text-gray-900 text-sm lg:text-2xl font-[Jura] mb-6">
                {course.description || "Description coming soon."}
              </p>
              <ul className="list-disc list-inside text-gray-900 text-sm lg:text-2xl font-[Jura] space-y-1 mb-8">
                {course.features && course.features.length > 0 ? (
                  course.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))
                ) : (
                  <li>No features available</li>
                )}
              </ul>
              <div className="absolute bottom-8 right-8">
                <Link
                  href={course.link || "#"}
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
