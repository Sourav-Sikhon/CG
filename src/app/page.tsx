import SmoothScroll from "@/components/SmoothScroll";
import Animations from "@/components/Animations";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import About from "@/components/About";
import Why from "@/components/Why";
import Leadership from "@/components/Leadership";
import Culture from "@/components/Culture";
import Careers from "@/components/Careers";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
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
        <LogoStrip />
        <Services />
        <AboutUs />
        <About />
        <Stats />
        <Leadership />
        <div className="culture-frame">
          <Culture />
        </div>
        <Why />
        <Testimonials />
        <LogoStrip variant="alt" />
        <Careers />
        <Insights />
      </main>
      <Footer />
    </>
  );
}
