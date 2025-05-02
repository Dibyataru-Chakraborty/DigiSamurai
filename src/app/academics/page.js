import NavBar from "@/components/utils/NavBar";
import Hero from "@/components/pages/academics/Hero";
import FOOter from "@/components/utils/FOOter";
import Section_1 from "@/components/pages/academics/Section_1";
import Section_2 from "@/components/pages/academics/Section_2";
import Section_3 from "@/components/pages/academics/Section_3";

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
