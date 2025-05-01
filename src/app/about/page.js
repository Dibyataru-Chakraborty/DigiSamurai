import NavBar from "@/components/utils/NavBar";
import Hero from "@/components/pages/about/Hero";
import Section_3 from "@/components/pages/about/Section_3";
import Section_1 from "@/components/pages/about/Section_1";
import FOOter from "@/components/utils/FOOter";
import Section_2 from "@/components/pages/about/Section_2";
import Section_5 from "@/components/pages/about/Section_5";
import Section_4 from "@/components/pages/about/Section_4";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4/>
      <Section_5 />
      <FOOter />
    </>
  );
}
