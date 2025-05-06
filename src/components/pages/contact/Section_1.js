"use client";

import Link from "next/link";

export default function Section_1() {

  return (
    <section className="py-16 bg-white flex flex-col items-center justify-center text-center">
      <div className="container mx-auto w-full">
        <h2 className="xl:text-6xl text-4xl font-bold ">
          <span
            className="bg-clip-text text-transparent"
            style={{
              fontFamily: "Josefin Sans",
              backgroundImage:
                "linear-gradient(90deg,#f35153 0%, #FF0005 35%, #800000 50%, #000000 100%)",
            }}
          >
            Connect with US
          </span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center md:space-x-8 pt-10">
          {/* Left side content */}
          <div className="flex flex-col gap-10 md:w-1/2">
            <div
              className="bg-red-100 rounded-3xl p-8 text-center mx-auto md:mx-0"
              style={{ boxShadow: "0 0 40px 20px #f9d9d9" }}
            >
              <p className="text-[#3a1a1a] lg:text-4xl text-2xl leading-relaxed font-[Jura]">
                Ready to enhance your security and safeguard your business? Our
                team of experts is here to provide trusted guidance, proactive
                solutions, and comprehensive support. Contact us today to
                discover how we can help protect your organization against
                evolving cyber threats.
              </p>
            </div>
            <div
              className="flex flex-col gap-8 mx-auto md:mx-0 text-[#6b1a1a] text-2xl lg:text-4xl pt-16"
              style={{ fontFamily: "Josefin Sans" }}
            >
              <div className="flex items-start gap-3">
                <i className="fas fa-phone-alt text-2xl mt-1" />
                <div className="leading-tight text-start">
                  <Link href={"tel:+918910632224"}>+918910632224</Link>{" "}
                  <br/>
                  <Link href={"tel:+917595887833"}>+917595887833</Link>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <i className="far fa-envelope text-2xl" />
                <div className="leading-tight text-start">
                  <Link href={"mailto:connect@digisamurai.co.in"}>
                    connect@digisamurai.co.in
                  </Link>{" "}
                  <br />
                  <Link href={"mailto:info.digisamurai@gmail.com"}>
                    info.digisamurai@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-2xl mt-1" />
                <p className="leading-tight text-start">
                  Block A, Sibani Apartment,
                  <br />
                  Palpara, Reckjoani More, Rajarhat,
                  <br />
                  Kolkata -700135
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-0 h-[2px] md:h-0 bg-red-950 my-5 md:my-0"></div>
          {/* Right side content */}
          <div className="flex flex-col gap-6 md:w-1/2 lg:mx-auto md:mx-0">
            {/* Form section with border */}
            <section className="flex flex-col gap-6 border-2 border-gray-300 rounded-3xl p-8">
              <form className="flex flex-col gap-4 text-start lg:h-96 overflow-auto">
                <label className="text-lg font-normal" htmlFor="name">
                  Name
                </label>
                <input
                  required
                  id="name"
                  type="text"
                  placeholder="john Doe"
                  className="border border-gray-300 rounded-md px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600"
                />
                <label className="text-lg font-normal" htmlFor="email">
                  Email
                </label>
                <input
                  required
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="border border-gray-300 rounded-md px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600"
                />
                <label className="text-lg font-normal" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  required
                  id="phone"
                  type="tel"
                  minLength={10}
                  maxLength={10}
                  placeholder="+91 1234567890"
                  className="border border-gray-300 rounded-md px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600"
                />
                <label className="text-lg font-normal" htmlFor="message">
                  Message
                </label>
                <input
                  required
                  id="message"
                  placeholder="Message"
                  type="text"
                  className="border border-gray-300 rounded-md px-3 py-2 text-lg placeholder:text-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-red-600 overflow-hidden"
                />
                <button
                  type="submit"
                  className="bg-red-600 text-white text-lg rounded-md py-2 mt-1"
                >
                  Submit
                </button>
              </form>
            </section>

            {/* Map placeholder outside the border */}
            <div
              className="bg-gray-300 w-full h-96 flex justify-center items-center text-gray-700 text-sm"
              aria-label="Map placeholder"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6370553992074!2d88.47618707587318!3d22.630024630862003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89faafdec1a07%3A0xe98db650bf9622f4!2sDigi%20Samurai!5e0!3m2!1sen!2sin!4v1746124981618!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
