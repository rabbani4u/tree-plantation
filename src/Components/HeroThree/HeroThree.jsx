import React from "react";
import "./HeroThree.css";
import "bootstrap/dist/css/bootstrap.css";

function HeroThree() {
  return (
    <div>
      <header style={{ paddingLeft: 0 }}>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://cdn.shopify.com/s/files/1/0326/7189/files/7_1_5be8ed09-0347-4d36-ac12-e11863fe25f9_1400x.jpg?v=1614322671')",
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
                  WHY TREES?
                </a>
                <a
                  className="btn btn-outline-light btn-lg mx-3 px-5 second-button  about__btn"
                  href="#!"
                  role="button"
                >
                  PLAN A TREE
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeroThree;
