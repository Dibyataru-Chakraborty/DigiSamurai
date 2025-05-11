import NavBar from "@/components/utils/NavBar";
import Hero from "@/components/pages/services/Hero";
import FOOter from "@/components/utils/FOOter";
import Section_1 from "@/components/pages/services/Section_1";
import Section_3 from "@/components/pages/services/Section_3";
import Section_2 from "@/components/pages/services/Section_2";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Section_1/>
      <Section_2/>
      <Section_3/>
      <FOOter />
    </>
  );
}
