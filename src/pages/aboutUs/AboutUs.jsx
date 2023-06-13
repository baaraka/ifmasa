import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team";
import AboutDiv from "../../components/aboutDiv/AboutDiv";

function AboutUs() {
  return (
    <div>
      <NavBar />
      <AboutDiv />
      <Team />
      <Footer />
    </div>
  );
}

export default AboutUs;
