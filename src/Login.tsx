import react, { useState } from "react";

interface LoginProps {
  isSignIn?: () => void;
}

const Login: React.FC<LoginProps> = ({ isSignIn }: LoginProps) => {
  return (
    <div className="App">
      <input aria-label="id-input" />
      <input aria-label="password-input" />
      <button onClick={isSignIn}>submit</button>
    </div>
  );
};

export default Login;
