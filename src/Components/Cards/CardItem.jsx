import React from "react";
import "./CardItem.css";

function CardItem(props) {
  return (
    <div>
      <div className="wrapper">
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <p>{props.tel}</p>
      </div>
    </div>
  );
}

export default CardItem;
