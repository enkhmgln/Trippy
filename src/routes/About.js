import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import dunhiij from "../assets/dunhiij.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import React from "react";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={dunhiij}
        heading="About"
        btnClass="hide"
      />
      <AboutUs
        heading="Танилцуулга"
        mainText="“Тэнгэр трэвел” ХХК Монгол улсын тэргүүлэх ач холбогдол бүхий Аялал жуулчлалын салбарт тууштай, тасралтгүй үйл ажиллагаагаа явуулж монголынхоо жуулчдыг дэлхийн улс орнуудад, олон улсын болон өөрийн орны жуулчдыг Монгол орноороо аялуулсаар ирсэн төдийгүй дотоод гадаадын чиглэлд аялуулсан жуулчдынхаа тоогоороо, аялал жуулчлалын бүтээгдэхүүн үйлчилгээг чанартай, хариуцлагатай, найдвартай өндөр түвшинд хийдэг гүйцэтгэлээрээ Аялал жуулчлалын салбарын арвин их туршлага хуримтлуулсан үндэсний тэргүүлэгч компани билээ."
        text2="19 жилийн туршлагатай"
        text3="100,000+ Аялагчын сонголт"
        text4="100% Найдвартай хамтрагчтай"
        text5="Аялагчдын сэтгэл ханамж өндөр байдаг"
      />

      <Footer />
    </>
  );
}

export default About;
