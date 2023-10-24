import React from "react";

function UsingUseRef() {
  const formInputRef = React.useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };
  return (
    <div>
      <h1>Using useRef to access underlying DOM</h1>
      <input ref={formInputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UsingUseRef;
