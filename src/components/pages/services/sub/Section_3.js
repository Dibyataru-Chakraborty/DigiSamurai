// import Image from "next/image";

// export default function Section_3({ sections  }) {
//   // const certificates = [
//   //   {
//   //     alt: "Certificate of Registration ISO/IEC 27001:2013",
//   //     src: ISO_27001_2013_sm.src,
//   //   },
//   //   {
//   //     alt: "Certificate of Registration Quality Management System ISO 9001:2015",
//   //     src: ISO_9001_2015_sm.src,
//   //   },
//   //   {
//   //     alt: "Certificate of Registration ISO/IEC 20000-1:2018",
//   //     src: ISO_20000_1_2018_sm.src,
//   //   },
//   //   {
//   //     alt: "Certificate of Registration ISO/IEC 20000-1:2018",
//   //     src: ISO_20000_1_2018_sm.src,
//   //   },
//   //   {
//   //     alt: "Certificate of Registration ISO/IEC 20000-1:2018",
//   //     src: ISO_20000_1_2018_sm.src,
//   //   },
//   //   {
//   //     alt: "Certificate of Registration ISO/IEC 20000-1:2018",
//   //     src: ISO_20000_1_2018_sm.src,
//   //   },
//   //   // Repeat or add more as needed
//   // ];

//   // const Team_certificates = [
//   //   {
//   //     alt: "Certificate for CEH (Certified Ethical Hacker)",
//   //     src: CEH.src,
//   //   },
//   //   {
//   //     alt: "Certificate for CFCS (Certified Financial Crime Specialist)",
//   //     src: cfcs.src,
//   //   },
//   //   {
//   //     alt: "Certificate for CHFI (Computer Hacking Forensic Investigator)",
//   //     src: CHFI.src,
//   //   },
//   //   {
//   //     alt: "Certificate for CIPP (Certified Information Privacy Professional)",
//   //     src: cipp.src,
//   //   },
//   //   {
//   //     alt: "Certificate for CISA (Certified Information Systems Auditor)",
//   //     src: cisa.src,
//   //   },
//   //   {
//   //     alt: "Certificate for CISM (Certified Information Security Manager)",
//   //     src: cism.src,
//   //   },
//   //   {
//   //     alt: "Certificate for CISSP (Certified Information Systems Security Professional)",
//   //     src: cissp.src,
//   //   },
//   //   {
//   //     alt: "Certificate for ECSA (EC-Council Certified Security Analyst)",
//   //     src: ECSA.src,
//   //   },
//   //   {
//   //     alt: "Certificate for Fortinet Certified Professional",
//   //     src: fortinet.src,
//   //   },
//   //   {
//   //     alt: "Certificate for ISO/IEC 27001:2013",
//   //     src: iso.src,
//   //   },
//   //   {
//   //     alt: "Certificate for OSCP (Offensive Security Certified Professional)",
//   //     src: oscp.src,
//   //   },
//   // ];

//   return (
//     <section className="bg-white">
//       <div className="container mx-auto px-8 py-16 w-full p-6">
//         {/* Company Certifications Section */}
//         <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-20 mb-12">
//           <h2
//             className="text-red-600 font-semibold text-4xl md:text-6xl leading-tight md:leading-snug text-center md:text-left w-full md:w-auto"
//             style={{ fontFamily: "Josefin Sans" }}
//           >
//             {heading1}
//           </h2>
//           <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
//             <div className="flex gap-6 animate-scroll">
//               {/* {Array.isArray(certificates) && certificates.length > 0 ? (
//                 certificates.map((cert, index) =>
//                   cert?.src && cert?.alt ? (
//                     <Image
//                       key={index}
//                       alt={cert.alt}
//                       src={cert.src}
//                       width={200}
//                       height={267}
//                       className="w-[200px] h-[267px] object-contain"
//                     />
//                   ) : null
//                 )
//               ) : (
//                 <></>
//               )} */}
//             </div>
//           </div>
//         </div>
//         {/* Team Certifications Section */}
//         <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-20 mb-12">
//           <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
//             <div className="flex gap-6 animate-scroll">
//               {/* {Array.isArray(Team_certificates) &&
//               Team_certificates.length > 0 ? (
//                 Team_certificates.map((cert, index) =>
//                   cert?.src && cert?.alt ? (
//                     <Image
//                       key={index}
//                       alt={cert.alt}
//                       src={cert.src}
//                       width={160}
//                       height={80}
//                       className="w-[160px] h-[267px] object-contain"
//                     />
//                   ) : null
//                 )
//               ) : (
//                 <></>
//               )} */}
//             </div>
//           </div>
//           <h2
//             className="text-red-600 font-semibold text-4xl md:text-6xl leading-tight md:leading-snug text-center md:text-left w-full md:w-auto"
//             style={{ fontFamily: "Josefin Sans" }}
//           >
//             {heading2}
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function Section_3({ sections = [] }) {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-8 py-16 w-full p-6">
        {Array.isArray(sections) && sections.length > 0 ? (
          sections.map((block, index) => {
            const isEven = index % 2 === 0;
            const heading = block?.heading || "";
            const items = Array.isArray(block?.items) ? block.items : [];

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  isEven ? "" : "md:flex-row-reverse"
                } items-center md:items-start justify-center md:justify-between gap-6 md:gap-20 mb-12`}
              >
                {/* Heading */}
                <h2
                  className="text-red-600 font-semibold text-4xl md:text-6xl leading-tight md:leading-snug text-center md:text-left w-full md:w-auto pt-10"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  {heading}
                </h2>

                {/* Logos */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-20 mb-12 w-full">
                  {/* Scrollable logo list */}
                  <div className="w-full lg:w-5/6 md:w-auto overflow-x-auto overflow-y-hidden no-scrollbar">
                    <div className="flex gap-4 sm:gap-6 md:gap-8 animate-scroll px-2 sm:px-4">
                      {items.length > 0 ? (
                        items.map((item, idx) =>
                          item?.logo && item?.name ? (
                            <div
                              key={idx}
                              className="flex flex-col items-center justify-center min-w-[120px] sm:min-w-[140px] md:min-w-[160px]"
                            >
                              <Image
                                alt={item.name}
                                src={item.logo}
                                width={160}
                                height={160}
                                className="object-contain h-[80px] sm:h-[100px] md:h-[120px]"
                              />
                              <p className="text-center text-xs sm:text-sm mt-2 font-medium">
                                {item.name}
                              </p>
                            </div>
                          ) : null
                        )
                      ) : (
                        null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          null
        )}
      </div>
    </section>
  );
}
