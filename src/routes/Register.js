import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Signup from "../components/Signup";
import Hero from "../components/Hero";
import dunhiij from "../assets/dunhiij.jpg";

export default function Register() {
  return (
    <div className="Register-wrapper">
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={dunhiij}
        heading="Register"
        btnClass="hide"
      />
      <Signup />
      <Footer />
    </div>
  );
}
