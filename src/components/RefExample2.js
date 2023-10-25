import React, { useEffect, useRef, useState } from "react";

const center = {
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center",
};

function RefExample2() {
  const [name, setName] = useState();
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div style={center}>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </div>
  );
}

export default RefExample2;
