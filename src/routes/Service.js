import React from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import dunhiij from "../assets/dunhiij.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar/>
      <Hero
      cName='hero-mid'
      heroImg={dunhiij}
      heading='Service'
      btnClass='hide'
      />
      <Trip/>
      <Footer/>
    </>
  );
}

export default Service;
