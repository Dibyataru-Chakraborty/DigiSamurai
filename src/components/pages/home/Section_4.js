// components/Section_4.js

export default function Section_4() {
  return (
    <section className="py-16 relative  bg-gray-100">
      <div className="container mx-auto text-center items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mx-16" style={{
        fontFamily: "Josefin Sans",
      }}>
        <h2 className="text-5xl font-bold text-red-600 bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
          }}>
          2500+ Projects Completed
        </h2>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border-t border-b border-black">
          <div className="border-r border-black px-4">
            <div className="my-8 space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="text-5xl md:font-bold">3500+</div>
              <div className="text-3xl">Customers served</div>
            </div>
          </div>
          <div className="border-r border-black px-4">
            <div className="my-8 space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="text-5xl md:font-bold">350+</div>
              <div className="text-3xl">Cybersecurity experts</div>
            </div>
          </div>
          <div className="border-r border-black px-4">
            <div className="my-8 space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="text-5xl md:font-bold">100+</div>
              <div className="text-3xl">Trained specialists</div>
            </div>
          </div>
          <div className="px-4">
            <div className="my-8 space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="text-5xl md:font-bold">150%</div>
              <div className="text-3xl">Customer retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
