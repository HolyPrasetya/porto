import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Organization from "@/components/Organization";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <About />
        <Projects />
        <Achievements />
        <Organization />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
