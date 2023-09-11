import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Mission from "../components/Sections/Mission";
import DirectorMessage from "../components/Sections/DirectorMessage";
import OurTeam from "../components/Sections/OurTeam";
import AboutUs from "../components/Sections/AboutUs";
import Contact from "../components/Sections/Contact";
import Careers from "../components/Sections/Careers";
import Footer from "../components/Sections/Footer";
import Clients from "../components/Sections/Clients";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <AboutUs />
      {/* <Projects /> */}
      <DirectorMessage />
      <Mission />
      <OurTeam />
      <Clients/>
      <Careers/>
      <Contact />
      <Footer />
    </>
  );
}
