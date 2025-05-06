import ourmissionourvison from "@/assets/img/ourmissionourvison.png";

export default function Section_2() {
  return (
    <section className="pb-16 bg-white">
      <div className="container mx-auto px-8 py-16">
        <div className="bg-cover bg-center rounded-[100px] lg:p-24 p-8 flex flex-col gap-16" style={{ backgroundImage: `url(${ourmissionourvison.src})` }}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
            <div className="md:w-1/2" style={{fontFamily: "Josefin Sans"}}>
              <p className="lg:text-7xl text-4xl font-normal text-black mb-0">Our</p>
              <p className="font-montserrat lg:text-9xl text-7xl font-bold text-[#6B4B4B] leading-tight -mt-2">
                Mission
              </p>
            </div>
            <div className="md:w-1/2 lg:border-l border-[#6B4B4B] xl:pl-8 md:pl-12">
              <p
                className="xl:text-4xl text-2xl leading-relaxed mb-0 text-center bg-clip-text text-transparent"
                style={{
                  fontFamily: "Jura",
                  backgroundImage:
                    "linear-gradient(90deg,rgba(255, 0, 5, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                }}
              >
                “Protecting your business with tailored, proactive
                <span>cybersecurity</span> solutions that stay one step ahead of
                emerging threats.”
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
            <div className="md:w-1/2 text-center">
              <p
                className="bg-clip-text text-transparent xl:text-4xl text-2xl leading-relaxed mb-0"
                style={{
                  fontFamily: "Jura",
                  backgroundImage:
                    "linear-gradient(90deg,rgba(255, 0, 5, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                }}
              >
                &quot;Partner with us for <span>tailored cybersecurity</span>{" "}
                expertise,
                <span>proactive protection</span>, and unwavering commitment to
                <span>securing your</span> digital future.&quot;
              </p>
            </div>
            <div className="md:w-1/2 lg:border-l border-[#6B4B4B] pl-8 md:pl-12 text-right">
              <p className="lg:text-7xl text-4xl font-normal text-black mb-0">Our</p>
              <p className="font-montserrat lg:text-9xl text-7xl font-bold text-[#6B4B4B] leading-tight -mt-2">
                Vision
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
