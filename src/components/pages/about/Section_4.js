"use client";
import Image from "next/image";
import ISO_27001_2022 from "@/assets/Certificate/ISO-27001-2022.jpg";
import ISO_9001_2015 from "@/assets/Certificate/ISO-9001-2015.jpg";
import ISO_20000_1_2018 from "@/assets/Certificate/ISO-20000-1-2018.jpg";
import ISO_22301_2019 from "@/assets/Certificate/ISO-22301-2019.jpg";
import ISO_27701_2022 from "@/assets/Certificate/ISO-27701-2022.jpg";
import MSME_Registration from "@/assets/Certificate/MSME_Registration.jpg";

import CEH from "@/assets/logo/CEH.jpg";
import cfcs from "@/assets/logo/cfcs.jpg";
import CHFI from "@/assets/logo/CHFI.jpg";
import cipp from "@/assets/logo/cipp.jpg";
import cisa from "@/assets/logo/cisa.jpg";
import cism from "@/assets/logo/cism.jpg";
import cissp from "@/assets/logo/cissp.jpg";
import ECSA from "@/assets/logo/ECSA.jpg";
import fortinet from "@/assets/logo/fortinet.jpg";
import iso from "@/assets/logo/iso.jpg";
import oscp from "@/assets/logo/oscp.jpg";

import aditya_birla from "@/assets/logo/aditya_birla.png";
import webel from "@/assets/logo/webel.png";
import gkbopticals from "@/assets/logo/gkbopticals.png";
import peerless from "@/assets/logo/peerless.png";
import kolkatapolice from "@/assets/logo/kolkatapolice.png";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Section_4() {
  const certificates = [
    {
      alt: "Certificate of Registration ISO/IEC 27001:2022",
      src: ISO_27001_2022,
    },
    {
      alt: "Certificate of Registration Quality Management System ISO 9001:2015",
      src: ISO_9001_2015,
    },
    {
      alt: "Certificate of Registration ISO/IEC 20000-1:2018",
      src: ISO_20000_1_2018,
    },
    {
      alt: "Certificate of Registration ISO 22301:2019",
      src: ISO_22301_2019,
    },
    {
      alt: "Certificate of Registration ISO/IEC 27701:2022",
      src: ISO_27701_2022,
    },
    {
      alt: "MSME Registration Certificate",
      src: MSME_Registration,
    },
  ];

  const Team_certificates = [
    {
      alt: "Certificate for CEH (Certified Ethical Hacker)",
      src: CEH.src,
    },
    {
      alt: "Certificate for CFCS (Certified Financial Crime Specialist)",
      src: cfcs.src,
    },
    {
      alt: "Certificate for CHFI (Computer Hacking Forensic Investigator)",
      src: CHFI.src,
    },
    {
      alt: "Certificate for CIPP (Certified Information Privacy Professional)",
      src: cipp.src,
    },
    {
      alt: "Certificate for CISA (Certified Information Systems Auditor)",
      src: cisa.src,
    },
    {
      alt: "Certificate for CISM (Certified Information Security Manager)",
      src: cism.src,
    },
    {
      alt: "Certificate for CISSP (Certified Information Systems Security Professional)",
      src: cissp.src,
    },
    {
      alt: "Certificate for ECSA (EC-Council Certified Security Analyst)",
      src: ECSA.src,
    },
    {
      alt: "Certificate for Fortinet Certified Professional",
      src: fortinet.src,
    },
    {
      alt: "Certificate for ISO/IEC 27001:2013",
      src: iso.src,
    },
    {
      alt: "Certificate for OSCP (Offensive Security Certified Professional)",
      src: oscp.src,
    },
  ];

  const clientLogos = [
    {
      alt: "Client logo with blue emblem and text",
      src: kolkatapolice.src,
    },
    {
      alt: "Peerless Hospital and B.K. Roy Research Centre logo with red and blue colors",
      src: peerless.src,
    },
    {
      alt: "GKB Opticals logo with blue background and white text",
      src: gkbopticals.src,
    },
    {
      alt: "Webel Technology Limited logo with blue text and icon",
      src: webel.src,
    },
    {
      alt: "Aditya Birla EMIL logo with red and green colors and sun emblem",
      src: aditya_birla.src,
    },
  ];

  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-white">
      <div className="container mx-auto px-8 py-16 w-full p-6 lg:w-5/6">
        {/* Company Certifications Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-20 mb-12">
          <h2
            className="text-red-600 font-semibold text-4xl md:text-6xl leading-tight md:leading-snug text-center md:text-left w-full md:w-auto"
            style={{ fontFamily: "Josefin Sans" }}
          >
            Company
            <br />
            Certifications
          </h2>
          <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
            <div className="flex gap-6 animate-scroll">
              {certificates.map((cert, index) => (
                <Image
                  key={index}
                  alt={cert.alt}
                  src={cert.src}
                  width={200}
                  height={267}
                  className="w-[200px] h-[267px] object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Team Certifications Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-20 mb-12">
          <div className="flex-1 flex justify-center md:justify-end overflow-x-auto no-scrollbar">
            <div className="flex gap-6 animate-scroll">
              {Team_certificates.map((cert, index) => (
                <Image
                  key={index}
                  alt={cert.alt}
                  src={cert.src}
                  width={160}
                  height={80}
                  className="w-[160px] h-[80px] object-contain"
                />
              ))}
            </div>
          </div>
          <h2
            className="text-red-600 font-semibold text-4xl md:text-6xl leading-tight text-center md:text-left"
            style={{ fontFamily: "Josefin Sans" }}
          >
            Team
            <br />
            Certifications
          </h2>
        </div>

        {/* Our Clients Section */}
        <div className="flex flex-col items-center mb-8">
          <h2
            className="text-6xl mb-12 bg-clip-text text-transparent font-semibold text-center"
            style={{ fontFamily: "Josefin Sans" }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(255, 0, 5, 1) 0%, rgba(0, 0, 0, 1) 100%)",
              }}
            >
              Our Clients
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-10 max-w-5xl">
            {clientLogos.map((logo, index) => (
              <Image
                key={index}
                alt={logo.alt}
                src={logo.src}
                width={160}
                height={80}
                className={`w-[160px] h-[80px] object-contain`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
