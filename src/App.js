import React from "react";
import FetchingData from "./components/fetchingData";
import Wallet from "./components/Wallet";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <FetchingData />
      <Wallet />
      <Counter />
    </div>
  );
}

export default App;
