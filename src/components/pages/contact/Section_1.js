"use client";

import Link from "next/link";
import { useState } from "react";

export default function Section_1() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const url =
        "https://docs.google.com/forms/d/e/1FAIpQLSeb6VuOaP3N_GDJV2XNTqphMFLchM2Zs3tXx5eLQcn8CFnV7g/formResponse";

      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSubmitted(true);
      form.reset();

      // Show success toast
      document.getElementById("toast-success").style.display = "flex";
      setTimeout(() => {
        document.getElementById("toast-success").style.display = "none";
      }, 3000); // hide after 3 seconds
    } catch (error) {
      console.error("Form submission error:", error);

      // Show error toast
      document.getElementById("toast-danger").style.display = "flex";
      setTimeout(() => {
        document.getElementById("toast-danger").style.display = "none";
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-white flex flex-col items-center justify-center text-center">
      <div
        id="toast-success"
        className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
        role="alert"
        style={{ display: "none" }}
      >
        <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">Successfully submitted.</div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      <div
        id="toast-danger"
        className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
        role="alert"
        style={{ display: "none" }}
      >
        <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
          </svg>
          <span className="sr-only">Error icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">
          Unable to send your query.
        </div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-danger"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      <div className="container mx-auto w-full lg:w-5/6">
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
                Ready to secure your digital future? Partner with our
                cybersecurity experts for strategic guidance, proactive defence,
                and end-to-end support. Get in touch today and discover how we
                can help you stay ahead of evolving cyber threats.
              </p>
            </div>
            <div
              className="flex flex-col gap-8 mx-auto md:mx-0 text-[#6b1a1a] text-2xl lg:text-3xl pt-16 xl:pt-60"
              style={{ fontFamily: "Josefin Sans" }}
            >
              <div className="flex items-start gap-3">
                <i className="fas fa-phone-alt text-2xl mt-1" />
                <div className="leading-tight text-start">
                  <Link href={"tel:+918910632224"}>+918910632224</Link> <br />
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
              <form
                className="flex flex-col gap-4 text-start lg:min-h-[400] overflow-auto"
                onSubmit={handleSubmit}
              >
                <label className="text-lg font-normal" htmlFor="name">
                  Name
                </label>
                <input
                  name="entry.1630859055"
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
                  name="entry.1134503459"
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
                  name="entry.979963924"
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
                <textarea
                  name="entry.787586561"
                  required
                  id="message"
                  placeholder="Message"
                  type="text"
                  className="resize-y border border-gray-300 rounded-md px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600 overflow-hidden"
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
              className="bg-gray-300 w-full h-96 flex justify-center items-center text-gray-700 text-sm mt-5"
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
