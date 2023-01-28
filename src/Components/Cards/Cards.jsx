import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";

function Cards() {
  return (
    <div className="container my-20">
      <h1 className="heading__text">WHERE WE PLANT</h1>
      <div
        style={{
          borderBottom: "1px solid lightgray",
          marginBottom: "30px",
          marginTop: "20px",
        }}
      ></div>
      <div class="row no-gutters">
        <div class="col-sm">
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt=""
          />
        </div>
        <div class="col-sm">
          <img
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
        </div>
        <div class="col-sm">
          <img
            src="https://images.unsplash.com/photo-1661866816132-f82fcaa22401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div class="col-sm">
          <img
            src="https://images.unsplash.com/photo-1662041903631-cd7732fe5e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div class="col-sm">
          <img
            src="https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
