import react, { useState } from "react";
import { signIn } from "./api/auth";

interface LoginProps {
  isSignIn?: () => void;
}

const Login: React.FC<LoginProps> = ({ isSignIn }: LoginProps) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    signIn();
    if (isSignIn) {
      isSignIn();
    }
  };
  return (
    <div className="App">
      <input
        aria-label="id-input"
        value={id}
        onChange={(event) => {
          setId(event.target.value);
        }}
      />
      <input
        aria-label="password-input"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={handleSubmit} disabled={!id || !password}>
        submit
      </button>
    </div>
  );
};

export default Login;
