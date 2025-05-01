import NavBar from "@/components/utils/NavBar";
import Hero from "@/components/pages/home/Hero";
import Section_1 from "@/components/pages/home/Section_1";
import Section_2 from "@/components/pages/home/Section_2";
import Section_3 from "@/components/pages/home/Section_3";
import Section_4 from "@/components/pages/home/Section_4";
import FOOter from "@/components/utils/FOOter";
import Section_5 from "@/components/pages/home/Section_5";

export default function Home() {
  return (
    <>
    <NavBar />
    <Hero/>
    <Section_1/>
    <Section_2/>
    <Section_3/>
    <Section_4/>
    <Section_5/>
    <FOOter/>
    </>
  );
}
