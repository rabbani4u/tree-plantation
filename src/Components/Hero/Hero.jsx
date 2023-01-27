import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://cdn.shopify.com/s/files/1/0326/7189/files/noaa-desktop-unsplash_0841da39-ef3f-4f08-bdc2-407bd81883a1_1400x.jpg?v=1674774440')",
          height: 600,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <div className=" d-flex  mx-60 my-52 h-100">
            <div className="text-white align-items-center">
              <p className="mb-3 sub-heading">
                ONE DOLLAR. ONE TREE. ONE PLANT.
              </p>
              <h1 className="mb-3 heading">WE PLANT TREES</h1>
              <p className="mb-3 sub-heading">TOGETHER, PLANTING A FOREST!</p>
              <a
                className="btn btn-outline-light btn-lg global-button"
                href="#!"
                role="button"
              >
                PLANT A TREE
              </a>
              <a
                className="btn btn-outline-light btn-lg mx-3 second-button"
                href="#!"
                role="button"
              >
                Start A Fundraiser
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blue-box" style={{ border: "10px solid #0258B5" }}></div>
      <div className="blue-box" style={{ border: "10px solid #F6CE00" }}></div>
    </header>
  );
}

export default Hero;
