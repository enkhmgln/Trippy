import React from "react";

import "./AboutUsStyles.css";

function AboutUs(props) {
  return (
    <main className="about-container">
      <article className="about-right">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </article>
      <ul>
        <li>
          <i className={props.iIconName}></i>
          {props.text2}
        </li>
        <li>
          <i className={props.iIconName2}></i>
          {props.text3}
        </li>
        <li>
          <i className={props.iIconName3}></i>
          {props.text4}
        </li>
        <li>
          <i className={props.iIconName4}></i>
          {props.text5}
        </li>
      </ul>
      {/* <article className='about-right'> */}
      {/* <h1>Танилцуулга</h1>
        <p>“Тэнгэр трэвел” ХХК Монгол улсын тэргүүлэх ач холбогдол бүхий Аялал жуулчлалын салбарт тууштай, тасралтгүй үйл ажиллагаагаа явуулж монголынхоо жуулчдыг дэлхийн улс орнуудад, олон улсын болон өөрийн орны жуулчдыг Монгол орноороо аялуулсаар ирсэн төдийгүй дотоод гадаадын чиглэлд аялуулсан жуулчдынхаа тоогоороо, аялал жуулчлалын бүтээгдэхүүн үйлчилгээг чанартай, хариуцлагатай, найдвартай өндөр түвшинд хийдэг гүйцэтгэлээрээ Аялал жуулчлалын салбарын арвин их туршлага хуримтлуулсан үндэсний тэргүүлэгч компани билээ.</p>
      </article>
      <ul>
        <li>
      <i className="fa-solid fa-check-double"></i>19 жилийн туршлагатай
      </li>
      <li>
      <i className="fa-solid fa-check-double"></i>100,000+ Аялагчын сонголт
      </li>
      <li>
      <i className="fa-solid fa-check-double"></i>100% Найдвартай хамтрагчтай
      </li>
      <li>
      <i className="fa-solid fa-check-double"></i>Аялагчдын сэтгэл ханамж 90 дээш хувь байдаг
      </li> */}
      {/* </ul> */}
    </main>
  );
}

export default AboutUs;
