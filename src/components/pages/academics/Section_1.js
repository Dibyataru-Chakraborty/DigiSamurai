export default function Section_1() {
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
            Why learn at Digi Samurai
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-around gap-12 font-[Jura]">
          <div className="flex flex-col items-center max-w-xl text-center">
            <i className="fas fa-users text-7xl mb-4" />
            <h3 className="text-4xl font-bold mb-2">Large Community</h3>
            <p className="text-2xl mt-4">
              Join our vibrant learning community of students, alumni, and
              educators.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xl text-center">
            <i className="fas fa-flag text-7xl mb-4" />
            <h3 className="text-4xl font-bold mb-2">
              Comprehensive Curriculum
            </h3>
            <p className="text-2xl mt-4">
              Enhance your technical skills with our linear, world-class,
              project-based curriculum.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-12 font-[Jura]">
          <div className="flex flex-col items-center max-w-xl text-center">
            <i className="fas fa-star text-7xl mb-4" />
            <h3 className="text-4xl font-bold mb-2">
              Extensive Certifications
            </h3>
            <p className="text-2xl mt-4">
              Earn industry-recognized, verifiable certifications in high-demand
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
