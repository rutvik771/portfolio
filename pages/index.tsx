import { Hero } from "@/Components/Hero/Hero";
import { TechStack } from "@/Components/TechStack/TechStack";
import { Project } from "@/Components/Project/Project";
import { Work } from "@/Components/Work/Work";
import { Contact } from "@/Components/Contacts/Contact";

export default function Index() {
  return (
    <>
      <Hero />
      <TechStack />
      <Project />
      <Work />
      <Contact />
    </>
  );
}
