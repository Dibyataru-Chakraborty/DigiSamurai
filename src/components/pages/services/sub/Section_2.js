// export default function Section_2({ heading, services }) {
//   return (
//     <section className="pb-16 bg-white">
//       <div className="container mx-auto px-8 py-16 w-full p-6 lg:w-5/6">
//         <div
//           className="w-full h-[3px] mx-auto max-w-7xl"
//           style={{ backgroundColor: "#997677" }}
//         ></div>
//         <div className="mx-auto px-4 py-10">
//           <h2
//             className="text-center mb-12 xl:text-6xl text-4xl font-bold py-5 bg-clip-text text-transparent"
//             style={{
//               fontFamily: "Josefin Sans",
//               backgroundImage:
//                 "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
//             }}
//           >
//             {heading}
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
//             {services?.filter((s) => typeof s === "string" && s.trim() !== "")
//               .length > 0 ? (
//               services.map((service, index) =>
//                 typeof service === "string" && service.trim() !== "" ? (
//                   <div
//                     key={index}
//                     className="bg-pink-100 rounded-2xl shadow-lg shadow-pink-300/50 text-center px-4 py-4 w-full h-40 flex items-center justify-center whitespace-pre-line font-semibold"
//                   >
//                     {service}
//                   </div>
//                 ) : null
//               )
//             ) : (
//               <div className="text-center text-5xl font-semibold text-gray-500 py-8 w-full">
//                 🚧 Coming Soon 🚧
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Section_2({ heading, services }) {
  console.log(services);

  return (
    <>
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-8 py-16 w-full p-6 lg:w-5/6">
          <div
            className="w-full h-[3px] mx-auto max-w-7xl"
            style={{ backgroundColor: "#997677" }}
          ></div>
          <div className="mx-auto px-4 py-10">
            <h2
              className="text-center mb-12 xl:text-6xl text-4xl font-bold py-5 bg-clip-text text-transparent"
              style={{
                fontFamily: "Josefin Sans",
                backgroundImage:
                  "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
              }}
            >
              {heading}
            </h2>
            <div className="max-w-5xl mx-auto px-8">
              <HoverEffect items={services} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
