import React from "react";

import "./ContactFormStyles.css";
import Map from '../Map'

function ContactForm() {
  return (
    <>
    <Map/>
      <div className="form-container">
        <form>
          <h1>Бидэнтэй холбогдох</h1>
          <input type="text" placeholder="Нэр"></input>

          <input type="email" placeholder="И-мэйл"></input>

          <input type="text" placeholder="Ямар хэргээр холбогдож байгаа вэ?"></input>

          <textarea rows="6" placeholder="Дэлгэрэнгүй..." />
          <button>Илгээх</button>
        </form>
        <div className="info-contact">
          <h2>Холбоо барих</h2>
          <li>
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            <p>
            СХД, 11-р хороолол, PRO-One оффис 1505,
               Улаанбаатар хот
            </p>
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            <p>Утас: (+976) 75707779</p>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <p>И-мэйл: info@mongolayalal.mn</p>
          </li>
          <div className="social">
            <li href="/">
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li href="/">
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li href="/">
              <i className="fa-brands fa-youtube"></i>
            </li>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default ContactForm;
