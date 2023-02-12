import React from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import dunhiij from "../assets/dunhiij.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={dunhiij}
        heading="Contact"
        btnClass="hide"
      />

      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
