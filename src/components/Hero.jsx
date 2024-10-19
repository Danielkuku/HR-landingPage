import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import amazon from "../assets/amazon.png";
import figma from "../assets/figma.png";
import twitter from "../assets/twitter.png";
import microsoft from "../assets/microsoft.png";
import bag from "../assets/bag.png";

function Hero() {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".header__container h2", {
      ...scrollRevealOption,
    });
    ScrollReveal().reveal(".header__container h1", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".header__container p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".header__btns", {
      ...scrollRevealOption,
      delay: 1500,
    });
  }, []);

  return (
    <header className="section__container header__container" id="home">
      <img src={google} alt="header" />
      <img src={twitter} alt="header" />
      <img src={amazon} alt="header" />
      <img src={figma} alt="header" />
      <img src={linkedin} alt="header" />
      <img src={microsoft} alt="header" />
      <h2>
        <img src={bag} alt="bag" />
        No.1 Job Find Website
      </h2>
      <h1>
        Search, Apply &<br />
        Get Your <span>Dream Job</span>
      </h1>
      <p>
        Your future starts here. Discover countless opportunities, take action
        by applying to jobs that match your skills and aspirations, and
        transform your career.
      </p>
      <div className="header__btns">
        <button className="btn">Browse Jobs</button>
        <a href="#">
          <span>
            <i className="ri-play-fill"></i>
          </span>
          How It Works?
        </a>
      </div>
    </header>
  );
}

export default Hero;
