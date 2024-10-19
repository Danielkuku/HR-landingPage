import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Careers() {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".explore__card", {
      duration: 1000,
      interval: 500,
    });
  }, []);
  return (
    <>
      <section className="section__container explore__container">
        <h2 className="section__header">
          <span>Countless Career Options</span> Are Waiting For You To Explore
        </h2>
        <p className="section__description">
          Discover a World of Exciting Opportunities and Endless Possibilities,
          and Find the Perfect Career Path to Shape Your Future.
        </p>
        <div className="explore__grid">
          <div className="explore__card">
            <span>
              <i className="ri-pencil-ruler-2-fill"></i>
            </span>
            <h4>Design</h4>
            <p>200+ jobs openings</p>
          </div>
          <div className="explore__card">
            <span>
              <i className="ri-bar-chart-box-fill"></i>
            </span>
            <h4>Sales</h4>
            <p>350+ jobs openings</p>
          </div>
          <div className="explore__card">
            <span>
              <i className="ri-megaphone-fill"></i>
            </span>
            <h4>Marketing</h4>
            <p>500+ jobs openings</p>
          </div>
          <div className="explore__card">
            <span>
              <i className="ri-wallet-3-fill"></i>
            </span>
            <h4>Finance</h4>
            <p>200+ jobs openings</p>
          </div>
          <div className="explore__card">
            <span>
              <i className="ri-car-fill"></i>
            </span>
            <h4>Automobile</h4>
            <p>250+ jobs openings</p>
          </div>
          <div className="explore__card">
            <span>
              <i className="ri-truck-fill"></i>
            </span>
            <h4>Logistics / Delivery</h4>
            <p>1k+ jobs openings</p>
          </div>
          <div className="explore__card">
            <span>
              <i className="ri-computer-fill"></i>
            </span>
            <h4>Admin</h4>
            <p>100+ jobs openings</p>
          </div>
          <div className="explore__card">
            <span>
              <i className="ri-building-fill"></i>
            </span>
            <h4>Construction</h4>
            <p>500+ jobs openings</p>
          </div>
        </div>
        <div className="explore__btn">
          <button className="btn">View All Categories</button>
        </div>
      </section>
    </>
  );
}

export default Careers;
