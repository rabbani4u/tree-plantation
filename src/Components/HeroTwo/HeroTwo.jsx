import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./HeroTwo.css";
function HeroTwo() {
  return (
    <div>
      <header style={{ paddingLeft: 0 }}>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1473594659356-a404044aa2c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80')",
            height: 600,
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          >
            <div className="container   my-52 h-100">
              <div className="text-white align-items-center ml-70">
                <p className="mb-3 sub-heading">
                  WE ARE A 501(C)3 NON-PROFIT BASED IN VERMONT
                </p>
                <h1 className="mb-3 heading ">ONE DOLLAR. ONE TREE.</h1>
                <p className="mb-3 sub-heading ">
                  WE MAKE IT SIMPLE FOR ANYONE TO PLANT TREES
                </p>

                <a
                  className="btn btn-outline-light btn-lg mx-3 px-5 second-button  about__btn"
                  href="#!"
                  role="button"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeroTwo;
