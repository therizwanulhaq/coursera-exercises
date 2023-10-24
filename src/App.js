import React from "react";
import ShoppingCart from "./components/ShoppingCart";
import FetchingData from "./components/fetchingData";
import Wallet from "./components/Wallet";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <FetchingData />
      <Wallet />
      <Counter />
      <ShoppingCart />
    </div>
  );
}

export default App;
