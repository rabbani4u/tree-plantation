import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner mb-20">
      <div className="banner__up">
        <img
          src="https://cdn.shopify.com/s/files/1/0326/7189/files/helping-brands-and-companies-like_1400x.jpg?v=1636470143"
          alt=""
        />
      </div>
      <div className="banner__down mb-10">
        <img
          className="object-center"
          src="https://cdn.shopify.com/s/files/1/0326/7189/files/Employee_Engagement_Image_5_600x.png?v=1614296959"
          alt=""
        />
      </div>
      <div className=" content-center">
        <p className="banner__text">
          We work with amazing reforestation partners around the world that need
          your support to help get trees in the ground.
        </p>
        <br />
        <button className="banner__cta__btn ">
          LEARN MORE ABOUT OUR PARTNERSHIP
        </button>
      </div>
    </div>
  );
}

export default Banner;
