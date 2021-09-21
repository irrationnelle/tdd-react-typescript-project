import React, { useState } from "react";
import "./App.css";

function App() {
  const [shouldShowMainPage, setShowMainPage] = useState(false);
  return !shouldShowMainPage ? (
    <div className="App">
      <input aria-label="id-input" />
      <input aria-label="password-input" />
      <button
        onClick={() => {
          setShowMainPage(true);
        }}
      >
        submit
      </button>
    </div>
  ) : (
    <div>
      <span>main page</span>
    </div>
  );
}

export default App;
