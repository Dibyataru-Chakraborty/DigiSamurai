// components/CardHoverEffectDemo.js
import SecurityTraining from "@/assets/img/SecurityTraining.png";
import { HoverEffect } from "@/components/ui/about_card-hover-effect";

export default function Section_2() {
  return (
    <section className="py-16 bg-gray-100 ">
      <div className="w-full h-[3px] mx-auto max-w-7xl" style={{ backgroundColor: '#997677' }}></div>
      <div className="container mx-auto max-w-5xl px-8 py-16">
        <h2
          className="text-6xl font-bold text-center mb-12 bg-clip-text text-transparent"
          style={{
            fontFamily: "Josefin Sans",
            backgroundImage:
              "linear-gradient(90deg, #FFCCCC 0%, #FF0005 35%, #800000 50%, #000000 100%)",
          }}
        >
          Our leadership
        </h2>
        <HoverEffect items={leadershipProjects} />
      </div>
    </section>
  );
}

const leadershipProjects = [
  {
    title: "XYZ XYZ",
    description: "President & Founder",
    image: SecurityTraining,
    id: 1,
  },
  {
    title: "XYZ XYZ",
    description: "President & Founder",
    image: SecurityTraining,
    id: 2,
  },
];
