import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import dunhiij from "../assets/dunhiij.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import React from "react";

function About() {
  return (
    <>
      <Navbar/>
      <Hero
      cName='hero-mid'
      heroImg={dunhiij}
      heading='About'
      btnClass='hide'
      />
      <AboutUs
      heading='Танилцуулга'
      text='“Тэнгэр трэвел” ХХК Монгол улсын тэргүүлэх ач холбогдол бүхий Аялал жуулчлалын салбарт тууштай, тасралтгүй үйл ажиллагаагаа явуулж монголынхоо жуулчдыг дэлхийн улс орнуудад, олон улсын болон өөрийн орны жуулчдыг Монгол орноороо аялуулсаар ирсэн төдийгүй дотоод гадаадын чиглэлд аялуулсан жуулчдынхаа тоогоороо, аялал жуулчлалын бүтээгдэхүүн үйлчилгээг чанартай, хариуцлагатай, найдвартай өндөр түвшинд хийдэг гүйцэтгэлээрээ Аялал жуулчлалын салбарын арвин их туршлага хуримтлуулсан үндэсний тэргүүлэгч компани билээ.'
      iIconName='fa-solid fa-check-double'
      text2='19 жилийн туршлагатай'
      iIconName2='fa-solid fa-check-double'
      text3='100,000+ Аялагчын сонголт'
      iIconName3='fa-solid fa-check-double'
      text4='100% Найдвартай хамтрагчтай'
      iIconName4='fa-solid fa-check-double'
      text5='Аялагчдын сэтгэл ханамж өндөр байдаг'
      
      />
  
      <Footer/>
    </>
  );
}

export default About;
