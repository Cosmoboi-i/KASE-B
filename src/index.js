import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MoralisProvider } from "react-moralis";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Dapp() {
  return (
    <MoralisProvider
      appId="nqRY2iRCKgPpNyMABy3lX1xRGqhpsOTnTyzQNRlD"
      serverUrl="https://qt0r9mhftuzy.usemoralis.com:2053/server"
    >
      <App />
    </MoralisProvider>
  );
}

root.render(<StrictMode>{1 ? <Dapp /> : <App />}</StrictMode>);
