import React from "react";
import "./Product.css";

export default function Product(props) {
  const { product ,onAdd} = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.title}></img>
      <h3>{product.title}</h3>
      <h3>{product.houseType}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)} >Add To Cart</button>
      </div>
    </div>
  );
}
