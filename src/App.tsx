import React, { useState } from "react";
import Login from "./Login";
import "./App.css";

function App() {
  const [shouldShowMainPage, setShowMainPage] = useState(false);

  return (
    <div data-testid="app-root">
      {!shouldShowMainPage ? (
        <Login
          isSignIn={() => {
            setShowMainPage(true);
          }}
        />
      ) : (
        <span>main page</span>
      )}
    </div>
  );
}

export default App;
