import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Banner from "./Banner";
import Basket from "./Basket";
import data from "./data";
import { useState } from "react";
function App() {
  const { products } = data;
  const [cartItems, setCartitems] = useState([]);
  

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartitems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartitems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartitems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartitems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="app">
      {/*<h1>AIRBNB</h1>*/}
      <Header countCartItems={cartItems.length}/>
      <div>
        <Banner />
      </div>

      <div className="row">
        <Home onAdd={onAdd} products={products} />
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>

      {/* Home */}
      {/* Header */}

      {/* Banner */}
      {/* Search   */}

      {/* Cards  */}

      {/* Footer */}

      {/* SearchPage */}
      {/* Header */}

      {/* .... */}
    </div>
  );
}

export default App;
