import React from "react";

// import "./ContactFormStyles.css";
import Map from "../Map";
import Button from "../General/Button";

function ContactForm() {
  return (
    <div className="md:w-100">
      <div className="h-screen ">
        <Map />
      </div>
      <div className="flex flex-row-reverse justify-around my-4 md:flex-col-reverse md:w-full ">
        <div>
          <form
            className="flex flex-col pt-12 mx-2 w-full md:mx-0"
            method="POST"
            data-netlify="true"
          >
            <h1 className="mb-6 pb-4 text-3xl ">Бидэнтэй холбогдох</h1>
            <input
              type="text"
              placeholder="Нэр"
              name="name"
              className="input"
            ></input>

            <input
              type="email"
              placeholder="И-мэйл"
              name="email"
              className="input"
            ></input>

            <input
              type="text"
              placeholder="Товчхон"
              className="input"
              name="message"
            ></input>

            <textarea
              name="message"
              rows="6"
              placeholder="Дэлгэрэнгүй..."
              className="p-4 mb-2 rounded-lg border-2 border-gray-700 md:m-2"
            />
            <Button type="submit" text="Илгээх" />
          </form>
        </div>

        <div className="flex flex-col justify-between  pt-12 rounded-2xl text-white  mx-4 bg-green-700">
          <h2>Холбоо барих</h2>
          <li>
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            <p className="p">
              СХД, 11-р хороолол, PRO-One оффис 1505, Улаанбаатар хот
            </p>
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            <p className="p">Утас: (+976) 75707779</p>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <p className="p">И-мэйл: info@mongolayalal.mn</p>
          </li>
          <div className="social">
            <a
              href="https://www.facebook.com/Real.Kaguya"
              target="_blank"
              rel="noReferrer"
            >
              <i className="fa-brands fa-facebook cursor-pointer mx-8 p-4  text-xl hover:text-green-600  transition-all 0.3s ease-in md:m-4 md:py-4 "></i>
            </a>
            <a
              href="https://www.facebook.com/Real.Kaguya"
              target="_blank"
              rel="noReferrer"
            >
              <i className="fa-brands fa-twitter cursor-pointer mx-8 p-4  text-xl hover:text-green-600  transition-all 0.3s ease-in md:m-4 md:py-4"></i>
            </a>
            <a
              href="https://www.facebook.com/Real.Kaguya"
              target="_blank"
              rel="noReferrer"
            >
              <i className="fa-brands fa-youtube cursor-pointer mx-8 p-4  text-xl hover:text-green-600  transition-all 0.3s ease-in md:m-4 md:py-4"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
