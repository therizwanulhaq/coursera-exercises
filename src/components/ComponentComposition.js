import React from "react";
import "./App.css";

const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};

const Alert = ({ children }) => {
  return (
    <div>
      <div className="overlay"></div>
      <div className="alert">{children}</div>
    </div>
  );
};

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;
};

function App() {
  return (
    <div className="App">
      <header>Little Lemon Restaurant 🍕</header>

      <Alert>
        <h4>Delete Account</h4>
        <p>Are you sure? This cannot be undone.</p>
        <DeleteButton />
      </Alert>
    </div>
  );
}

export default App;
