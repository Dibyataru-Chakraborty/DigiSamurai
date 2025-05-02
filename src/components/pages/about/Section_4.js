import Image from "next/image";
import ISO_27001_2013_sm from "@/assets/img/ISO-27001--2013-sm.png";
import ISO_9001_2015_sm from "@/assets/img/ISO-9001-2015-sm.png";
import ISO_20000_1_2018_sm from "@/assets/img/ISO-20000-1-2018-sm.png";

export default function Section_4() {
  const certificates = [
    {
      alt: "Certificate of Registration ISO/IEC 27001:2013",
      src: ISO_27001_2013_sm.src,
    },
    {
      alt: "Certificate of Registration Quality Management System ISO 9001:2015",
      src: ISO_9001_2015_sm.src,
    },
    {
      alt: "Certificate of Registration ISO/IEC 20000-1:2018",
      src: ISO_20000_1_2018_sm.src,
    },
    {
      alt: "Certificate of Registration ISO/IEC 20000-1:2018",
      src: ISO_20000_1_2018_sm.src,
    },
    {
      alt: "Certificate of Registration ISO/IEC 20000-1:2018",
      src: ISO_20000_1_2018_sm.src,
    },
    {
      alt: "Certificate of Registration ISO/IEC 20000-1:2018",
      src: ISO_20000_1_2018_sm.src,
    },
    // Repeat or add more as needed
  ];

  return (
    <section className="bg-gray-100 ">
      <div className="container mx-auto px-8 py-16 w-full p-6">
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
        {/* <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-6 md:gap-20 mb-12">
          <div className="flex gap-6 overflow-x-auto md:overflow-visible px-2 md:px-0">
            <Image
              alt="ISC2 certification logo"
              className="w-[60px] h-[60px] object-contain"
              height={60}
              src={TeamCertification1.src}
              width={60}
            />
            <Image
              alt="CISA certification logo"
              className="w-[60px] h-[60px] object-contain"
              height={60}
              // src="https://storage.googleapis.com/a1aa/image/c79fa3bd-2a55-4cf1-5e0b-96ba38f8432c.jpg"
              width={60}
            />
            <Image
              alt="CISM certification logo"
              className="w-[60px] h-[60px] object-contain"
              height={60}
              // src="https://storage.googleapis.com/a1aa/image/c653a1ec-219c-458b-c0db-81193984fbee.jpg"
              width={60}
            />
            <Image
              alt="CIPP certification logo"
              className="w-[60px] h-[60px] object-contain"
              height={60}
              // src="https://storage.googleapis.com/a1aa/image/49fc2e09-c337-45bd-45f5-25fdeee80f81.jpg"
              width={60}
            />
            <Image
              alt="OSCP certification logo"
              className="w-[60px] h-[60px] object-contain"
              height={60}
              // src="https://storage.googleapis.com/a1aa/image/27968ae3-ac08-41e9-76c5-8c21bba514ed.jpg"
              width={60}
            />
            <Image
              alt="ISO certification logo"
              className="w-[60px] h-[60px] object-contain"
              height={60}
              // src="https://storage.googleapis.com/a1aa/image/9307221e-6191-4fb8-6c18-205e292c3e44.jpg"
              width={60}
            />
          </div>
          <h2 className="text-red-600 font-semibold text-2xl md:text-6xl leading-tight md:leading-snug text-center md:text-right w-full md:w-auto" style={{ fontFamily: "Josefin Sans" }}>
            Team
            <br />
            Certifications
          </h2>
        </div> */}
        {/* Our Clients Section */}
        {/* <div className="flex flex-col items-center mb-8">
          <h2 className="text-red-600 font-semibold text-2xl md:text-3xl mb-6">
            Our Clients
          </h2>
          <div className="flex flex-wrap justify-center gap-10 max-w-5xl">
            <Image
              alt="Client logo with blue emblem and text"
              className="w-[100px] h-[100px] object-contain"
              height={100}
              // src="https://storage.googleapis.com/a1aa/image/515118f0-0def-4a40-b07a-3e21af1e3f99.jpg"
              width={100}
            />
            <Image
              alt="Peerless Hospital and B.K. Roy Research Centre logo with red and blue colors"
              className="w-[140px] h-[60px] object-contain"
              height={60}
              // src="https://storage.googleapis.com/a1aa/image/ea00aff4-dacd-40c8-10ce-3b9d69431869.jpg"
              width={140}
            />
            <Image
              alt="GKB Opticals logo with blue background and white text"
              className="w-[140px] h-[60px] object-contain"
              height={60}
              // src="https://storage.googleapis.com/a1aa/image/1eb6a960-534d-47ae-eaca-0ba60ca526a2.jpg"
              width={140}
            />
            <Image
              alt="Webel Technology Limited logo with blue text and icon"
              className="w-[140px] h-[60px] object-contain"
              height={60}
              // src="https://storage.googleapis.com/a1aa/image/03530eb7-1c23-418b-9f4b-5ff6bc422fbc.jpg"
              width={140}
            />
            <Image
              alt="Aditya Birla EMIL logo with red and green colors and sun emblem"
              className="w-[140px] h-[60px] object-contain"
              height={60}
              // src="https://storage.googleapis.com/a1aa/image/a43b869c-86ba-4b11-f6b7-af1213da4c9f.jpg"
              width={140}
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
