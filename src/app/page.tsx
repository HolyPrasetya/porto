import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import WorkExperience from "@/components/WorkExperience";
import Organization from "@/components/Organization";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
// import SpiderCompanion from "@/components/SpiderCompanion";
import Hero from "@/components/Hero";
import ScrollHint from "@/components/ScrollHint";

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/* <SpiderCompanion /> */}
      <ScrollHint />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <WorkExperience />
        <Organization />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
