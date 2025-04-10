// components/Section_2.js
import Image from "next/image";
import SecurityTraining from "@/assets/img/SecurityTraining.png";
import SecurityConsultancySolutions from "@/assets/img/SecurityConsultancySolutions.png";

export default function Section_2() {
  return (
    <section className="py-16 bg-gray-100 flex flex-col items-center justify-center text-center">
      <div className="container mx-auto">
        <h2
          className="text-6xl font-bold bg-clip-text text-transparent"
          style={{
            fontFamily: "Josefin Sans",
            backgroundImage: "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
          }}
        >
          What we provide
        </h2>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center md:space-x-8">
          {/* First Image Card */}
          <div className="relative flex justify-center w-auto p-4 group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              {/* Image */}
              <Image
                alt="Security Training"
                className="rounded-lg transition-all duration-300 ease-in-out group-hover:brightness-50"
                src={SecurityTraining}
                width={400}
                height={300}
              />

              {/* Initial Text (Fades Out on Hover) */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-50">
                <h3
                  className="text-black text-6xl font-bold px-4 py-2 rounded-lg"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  Security Training
                </h3>
              </div>

              {/* Red Overlay */}
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

              {/* Animated Text (Fades In on Hover) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3
                  className="text-white text-2xl font-bold transform scale-50 translate-y-5 opacity-0 group-hover:scale-100 group-hover:-translate-y-10 group-hover:opacity-100 transition-all duration-400 ease-in-out"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  Security Training
                </h3>
                <p
                  className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-[Jura]"
                >
                  Through our academic activities, we train and provide useful
                  instructional materials to the upcoming generation of
                  cybersecurity experts. With the integration of real-world
                  experience and skilled academics, we aim to improve individual
                  potential and organizational security.
                </p>
              </div>
            </div>
          </div>

          {/* Second Image Card */}
          <div className="relative flex justify-center w-auto p-4 group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              {/* Image */}
              <Image
                alt="Security Training"
                className="rounded-lg transition-all duration-300 ease-in-out group-hover:brightness-50"
                src={SecurityConsultancySolutions}
                width={400}
                height={300}
              />

              {/* Initial Text (Fades Out on Hover) */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-50">
                <h3
                  className="text-black text-6xl font-bold px-4 py-2 rounded-lg"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  Security Consultancy &amp; Solutions
                </h3>
              </div>

              {/* Red Overlay */}
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

              {/* Animated Text (Fades In on Hover) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3
                  className="text-white text-2xl font-bold transform scale-50 translate-y-5 opacity-0 group-hover:scale-100 group-hover:-translate-y-10 group-hover:opacity-100 transition-all duration-400 ease-in-out"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  Security Consultancy &amp; Solutions
                </h3>
                <p
                  className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-[Jura]"
                >
                  Provide a comprehensive range of services across cybersecurity
                  and compliance domains. With expertise spanning from advanced
                  offensive to defensive security measures, including
                  penetration testing, secure configuration reviews, and
                  forensic investigations, helping organizations navigate
                  complex compliance requirements, such as GDPR, PCI DSS, and
                  various industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
