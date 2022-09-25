import "./styles.css";
import { useEffect, useState } from "react";
import {
  useMoralis,
  useMoralisFile,
  useWeb3ExecuteFunction
} from "react-moralis";
import { styles } from "./styles";
import { Contract } from "./contract";

export default function Home() {
  const { logout } = useMoralis();
  const { saveFile } = useMoralisFile();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadharNo, setAadharNo] = useState("");

  const save = async () => {
    const file = {
      name,
      dob,
      aadharNo
    };

    console.table(file);

    try {
      const result = await saveFile(
        "abc.pdf",
        { base64: btoa(JSON.stringify(file)) },
        {
          type: "base64",
          saveIPFS: true
        }
      );
      alert(result.ipfs());
    } catch (err) {
      alert(err.message + aadharNo);
    }
  };

  function display() {
    const daat = document.getElementById("d");
    console.table(daat);
  }

  useEffect(() => {
    console.log("Hi Mom");
  }, []);

  return (
    <div className={styles.card}>
      <label className={styles.label}>Name</label>
      <input
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className={styles.label}>Date of Birth</label>
      <input
        className={styles.input}
        value={dob}
        type="date"
        onChange={(e) => setDob(e.target.value)}
      />

      <label className={styles.label}>Aadhar No</label>
      <input
        className={styles.input}
        value={aadharNo}
        onChange={(e) => setAadharNo(e.target.value)}
      />

      <button className={styles.button} onClick={() => save()}>
        Save
      </button>
      <button className={styles.button} onClick={() => logout()}>
        Log out
      </button>
    </div>
  );
}
