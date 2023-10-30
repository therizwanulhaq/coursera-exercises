import React, { useEffect, useState } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice-cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, [url]);

  return render(data);
};
const DessertsCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <h3>{data.length} drinks</h3>}
    />
  );
};

function RenderProps() {
  return (
    <div>
      <header>Using Render Props</header>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}

export default RenderProps;
