import NavBar from "@/components/utils/NavBar";
import Hero from "@/components/pages/memories/Hero";
import FOOter from "@/components/utils/FOOter";
import Section_1 from "@/components/pages/memories/Section_1";
import { getEventData } from "@/lib/contentful";

export default async function Home() {
  const eventData = await getEventData();

  return (
    <>
      <NavBar />
      <Hero />
      <Section_1 eventData={eventData} />
      <FOOter />
    </>
  );
}
