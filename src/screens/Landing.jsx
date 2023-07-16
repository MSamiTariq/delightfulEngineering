import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Mission from "../components/Sections/Mission";
import AboutUs from "../components/Sections/AboutUs";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <AboutUs />
      {/* <Projects /> */}
      <Mission />
      <Contact />
      <Footer />
    </>
  );
}


