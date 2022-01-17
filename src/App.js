import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to energyOS - If you see this, congrats - you're hired</h1>
        <button
          id="myButton"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.linkedin.com/in/michaeltannersandstone/");
          }}
          type="button"
          className="btn"
        >
          Claim Your Prize
        </button>
      </header>
    </div>
  );
}

export default App;
