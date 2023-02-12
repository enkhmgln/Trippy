import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newtrex from '../components/Login';
import Hero from '../components/Hero';
import dunhiij from '../assets/dunhiij.jpg'


export default function Login() {
  return(
    <div className="login-wrapper">
      <Navbar/>
      <Hero
      cName='hero-mid'
      heroImg={dunhiij}
      heading='Login'
      btnClass='hide'
      />
     <Newtrex/>
     <Footer/>
     

    </div>
  )
}