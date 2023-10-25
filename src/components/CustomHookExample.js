import React, { useState } from "react";

import useConsoleLog from "../useConsoleLog";

function CustomHookExample() {
  const [count, setCount] = useState(0);
  useConsoleLog(count);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+1</button>
    </div>
  );
}

export default CustomHookExample;
