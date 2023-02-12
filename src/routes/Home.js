import React from "react";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import img12 from '../assets/12.jpg'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero
      cName='hero'
      heroImg={img12}
      heading='Your journey Your story'
      text='Choose Your Favorite Destination.'
      buttonText='Travel Plan'
      url='/login'
      btnClass='show'
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;
