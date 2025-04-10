import NavBar from "@/components/utils/NavBar";
import Hero from "@/components/pages/about/Hero";
import Section_2 from "@/components/pages/about/Section_2";
import Section_1 from "@/components/pages/about/Section_1";

export default function Home() {
  return (
    <>
    <NavBar />
    <Hero/>
    <Section_1/>
    <Section_2/>
    </>
  );
}