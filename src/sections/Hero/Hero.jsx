import React from "react";
import { webSecuirty } from "../../assets";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__subtitle">Introducing Smart Cyber Security</p>
        <h1 className="hero__title">
          Provide Extra <span>Security</span> To Your Data
        </h1>
        <p className="hero__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="hero__buttons">
          <button className="hero__button">Read More</button>
          <button className="hero__button">Our Services</button>
        </div>
      </div>
      <div className="hero__image-placeholder">
        <img src={webSecuirty} alt="webSecurity" />
      </div>
    </section>
  );
};

export default Hero;
