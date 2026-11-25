import SmoothScroll from "@/components/SmoothScroll";
import Animations from "@/components/Animations";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import About from "@/components/About";
import Why from "@/components/Why";
import Leadership from "@/components/Leadership";
import Culture from "@/components/Culture";
import Careers from "@/components/Careers";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#services" className="skip-link">
        Skip to content
      </a>
      <SmoothScroll />
      <Animations />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Why />
        <Leadership />
        <Culture />
        <Careers />
        <Insights />
      </main>
      <Footer />
    </>
  );
}
