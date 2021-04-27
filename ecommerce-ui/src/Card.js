import React from "react";
import "./Card.css";

function Card({ src, title, houseType, cost }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card_info">
        <h2>{title}</h2>
        <h4>{houseType}</h4>
        <h3>{cost}</h3>
      </div>
    </div>
  );
}

export default Card;
