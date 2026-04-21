import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Topbar } from "@/components/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <Container>
        <Hero />
        <SelectedWork />
        <About />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}
