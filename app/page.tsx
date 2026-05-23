import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InquiryForm from "@/components/InquiryForm";
import LoaderIntro from "@/components/LoaderIntro";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <LoaderIntro />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Portfolio />
        <CaseStudy />
        <Packages />
        <Process />
        <Testimonials />
        <InquiryForm />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
