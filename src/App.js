import React from "react";
import ShoppingCart from "./components/ShoppingCart";
import FetchingData from "./components/fetchingData";
import Wallet from "./components/Wallet";
import Counter from "./components/Counter";
import UsingUseRef from "./components/UsingUseRef";

function App() {
  return (
    <div>
      <FetchingData />
      <Wallet />
      <Counter />
      <ShoppingCart />
      <UsingUseRef />
    </div>
  );
}

export default App;
