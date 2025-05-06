import Image from "next/image";

export default function Section_3({ heading1, heading2 }) {
  // const certificates = [
  //   {
  //     alt: "Certificate of Registration ISO/IEC 27001:2013",
  //     src: ISO_27001_2013_sm.src,
  //   },
  //   {
  //     alt: "Certificate of Registration Quality Management System ISO 9001:2015",
  //     src: ISO_9001_2015_sm.src,
  //   },
  //   {
  //     alt: "Certificate of Registration ISO/IEC 20000-1:2018",
  //     src: ISO_20000_1_2018_sm.src,
  //   },
  //   {
  //     alt: "Certificate of Registration ISO/IEC 20000-1:2018",
  //     src: ISO_20000_1_2018_sm.src,
  //   },
  //   {
  //     alt: "Certificate of Registration ISO/IEC 20000-1:2018",
  //     src: ISO_20000_1_2018_sm.src,
  //   },
  //   {
  //     alt: "Certificate of Registration ISO/IEC 20000-1:2018",
  //     src: ISO_20000_1_2018_sm.src,
  //   },
  //   // Repeat or add more as needed
  // ];

  // const Team_certificates = [
  //   {
  //     alt: "Certificate for CEH (Certified Ethical Hacker)",
  //     src: CEH.src,
  //   },
  //   {
  //     alt: "Certificate for CFCS (Certified Financial Crime Specialist)",
  //     src: cfcs.src,
  //   },
  //   {
  //     alt: "Certificate for CHFI (Computer Hacking Forensic Investigator)",
  //     src: CHFI.src,
  //   },
  //   {
  //     alt: "Certificate for CIPP (Certified Information Privacy Professional)",
  //     src: cipp.src,
  //   },
  //   {
  //     alt: "Certificate for CISA (Certified Information Systems Auditor)",
  //     src: cisa.src,
  //   },
  //   {
  //     alt: "Certificate for CISM (Certified Information Security Manager)",
  //     src: cism.src,
  //   },
  //   {
  //     alt: "Certificate for CISSP (Certified Information Systems Security Professional)",
  //     src: cissp.src,
  //   },
  //   {
  //     alt: "Certificate for ECSA (EC-Council Certified Security Analyst)",
  //     src: ECSA.src,
  //   },
  //   {
  //     alt: "Certificate for Fortinet Certified Professional",
  //     src: fortinet.src,
  //   },
  //   {
  //     alt: "Certificate for ISO/IEC 27001:2013",
  //     src: iso.src,
  //   },
  //   {
  //     alt: "Certificate for OSCP (Offensive Security Certified Professional)",
  //     src: oscp.src,
  //   },
  // ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-8 py-16 w-full p-6">
        {/* Company Certifications Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-20 mb-12">
          <h2
            className="text-red-600 font-semibold text-4xl md:text-6xl leading-tight md:leading-snug text-center md:text-left w-full md:w-auto"
            style={{ fontFamily: "Josefin Sans" }}
          >
            {heading1}
          </h2>
          <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
            <div className="flex gap-6 animate-scroll">
              {/* {Array.isArray(certificates) && certificates.length > 0 ? (
                certificates.map((cert, index) =>
                  cert?.src && cert?.alt ? (
                    <Image
                      key={index}
                      alt={cert.alt}
                      src={cert.src}
                      width={200}
                      height={267}
                      className="w-[200px] h-[267px] object-contain"
                    />
                  ) : null
                )
              ) : (
                <></>
              )} */}
            </div>
          </div>
        </div>
        {/* Team Certifications Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-20 mb-12">
          <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
            <div className="flex gap-6 animate-scroll">
              {/* {Array.isArray(Team_certificates) &&
              Team_certificates.length > 0 ? (
                Team_certificates.map((cert, index) =>
                  cert?.src && cert?.alt ? (
                    <Image
                      key={index}
                      alt={cert.alt}
                      src={cert.src}
                      width={160}
                      height={80}
                      className="w-[160px] h-[267px] object-contain"
                    />
                  ) : null
                )
              ) : (
                <></>
              )} */}
            </div>
          </div>
          <h2
            className="text-red-600 font-semibold text-4xl md:text-6xl leading-tight md:leading-snug text-center md:text-left w-full md:w-auto"
            style={{ fontFamily: "Josefin Sans" }}
          >
            {heading2}
          </h2>
        </div>
      </div>
    </section>
  );
}
