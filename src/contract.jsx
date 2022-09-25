import "./styles.css";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useEffect } from "react";
import { styles } from "./styles";
import { ethers } from "ethers";

export const Contract = () => {
  const { account, Moralis } = useMoralis();
  //const signer = Moralis.User.current();

  const contractProcessor = useWeb3ExecuteFunction();
  let options = {
    contractAddress: "0xEA5e2D4CaAeD0520a38EcCBbc175E857AB14bD16",
    functionName: "addHash",
    abi: [
      {
        constant: false,
        inputs: [{ internalType: "string", name: "hash", type: "string" }],
        name: "addHash",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      }
    ],
    params: {
      hash: "334d"
    },
    msgValue: Moralis.Units.ETH(1)
  };

  const mintt = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const account = provider.getSigner();
    console.log("S");
    const ontract = new ethers.Contract(
      options.contractAddress,
      options.abi,
      account
    );
    console.log("S");
    ontract.addHash("d");
    console.log("S");
  };
  const mint = async () => {
    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        alert("Succesful Mint");
      },
      onError: (error) => {
        alert(error.message);
        console.table(account);
      }
    });
  };

  return (
    <div>
      <button className={styles.button} onClick={() => mint()}>
        Fetch data
      </button>
    </div>
  );
};
