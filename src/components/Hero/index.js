import React from "react";
import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="home/img" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.heading}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
        </div>
      </div>
    </>
  );
}

export default Hero;
