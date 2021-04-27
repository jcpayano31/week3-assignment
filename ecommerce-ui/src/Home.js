import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(props) {
  const { products , onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Vacation Rental</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>

    // <div className="home">
    //   <div className="home__section">

    //   </div>
    // </div>
  );
}

export default Home;
