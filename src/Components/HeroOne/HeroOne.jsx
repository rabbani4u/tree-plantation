import React from "react";
import "./HeroOne.css";

function HeroOne() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://cdn.shopify.com/s/files/1/0326/7189/files/tree-planting-event_1400x.jpg?v=1674589042')",
          height: 600,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <div className=" d-flex  mx-60 my-52 h-100">
            <div className="text-white align-items-center">
              <h1 className="mb-3 heading">SUSTAINABILITY FOR BUSINESSES</h1>
              <p className="mb-3 sub-heading">
                MAKE A REAL IMPACT AND IMPROVE YOUR COMPANY'S SUSTAINABILITY
                INITIATIVES IN 2023
              </p>
              <a
                className="btn btn-outline-light btn-lg global-button mt-5"
                href="#!"
                role="button"
              >
                BECOME A BUSINESS PARTNER
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroOne;
