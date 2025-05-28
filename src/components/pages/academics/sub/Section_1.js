"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Section_1({title}) {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="pt-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2
            className="lg:text-4xl text-xl py-5 font-[Jura]"
          >
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
}
