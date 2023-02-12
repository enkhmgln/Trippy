import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Hero from '../components/Hero';
import dunhiij from '../assets/dunhiij.jpg'


export default function LoginAndSignup() {
  return(
    <div className="login-wrapper">
      <Navbar/>
      <Hero
      cName='hero-mid'
      heroImg={dunhiij}
      heading='Login'
      btnClass='hide'
      />
     <Login/>
     <Footer/>
     

    </div>
  )
}