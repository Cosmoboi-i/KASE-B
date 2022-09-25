import "./styles.css";
import { useMoralis } from "react-moralis";
import Login from "./login";
import Home from "./home";
import { useEffect } from "react";
import { styles } from "./styles";

export default function App() {
  const { isAuthenticated } = useMoralis();
  useEffect(() => {
    console.log("Hi Mom");
  }, []);

  return (
    <div className={styles.app}>
      <div>{isAuthenticated ? <Home /> : <Login />}</div>
    </div>
  );
}
