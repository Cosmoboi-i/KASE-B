import "./styles.css";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { styles } from "./styles";

export default function Login() {
  const { authenticate, signup, auth } = useMoralis();
  const display = () => {
    console.log(auth);
  };
  useEffect(() => {
    console.log("Hi Mom");
  }, []);

  return (
    <div>
      <h2 className={styles.label}>Login with Wallet to continue</h2>
      <button
        className={styles.button}
        onClick={() => {
          authenticate();
          display();
        }}
      >
        Log In
      </button>
    </div>
  );
}
