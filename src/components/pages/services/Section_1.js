"use client";
import Image from "next/image";
import Service_Customer_Service from "@/assets/logo/Service_Customer_Service.png";
import Service_Content_Delivery from "@/assets/logo/Service_Content_Delivery.png";
import Service_Malware from "@/assets/logo/Service_Malware.png";
import Service_Web_Application from "@/assets/logo/Service_Web_Application.png";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Section_1() {
  const ref = useScrollReveal()
  return (
    <section ref={ref} className="pt-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2
            className="xl:text-6xl text-4xl font-bold py-5 bg-clip-text text-transparent"
            style={{
              fontFamily: "Josefin Sans",
              backgroundImage:
                "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
            }}
          >
            Why choose Digi Samurai
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-around gap-12 font-[Jura]">
          <div className="flex flex-col items-center max-w-xl text-center">
            <Image
              src={Service_Customer_Service}
              alt="24/7 Support"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-4xl font-bold mb-2">
              24/7 Cyber Security Support
            </h3>
            <p className="text-2xl mt-4">
              24/7 experts for security issues, offering fast reliable
              assistance, and guidance, anytime you need
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xl text-center">
            <Image
              src={Service_Content_Delivery}
              alt="Content Delivery Network"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-4xl font-bold mb-2">
              Content Delivery Network
            </h3>
            <p className="text-2xl mt-4">
              CDN enhances content delivery, minimizes latency, counters DDoS,
              and boosts user experience/security
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-around gap-12 font-[Jura]">
          <div className="flex flex-col items-center max-w-xl text-center">
            <Image
              src={Service_Malware}
              alt="Malware Detection Removal"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-4xl font-bold mb-2">
              Malware Detection Removal
            </h3>
            <p className="text-2xl mt-4">
              We excel in advanced malware detection and removal, securing you
              systems from any kind of malware attacks and cyberthreats
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xl text-center">
            <Image
              src={Service_Web_Application}
              alt="Managed Web Application"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-4xl font-bold mb-2">Managed Web Application</h3>
            <p className="text-2xl mt-4">
              We employ a holistic strategy, including risk assessment,
              development, monitoring, and support for secure web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
