import { useState } from "react";
import bgbitcoin from "./assets/bgbitcoin.webp";
import "./App.css";

function App() {
  const [btcAddress, setBtcAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [mnemonic, setMnemonic] = useState("");

  const generateWallet = async () => {
    try {
      const response = await fetch("http://localhost:3000/generate-wallet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setBtcAddress(data.address);
      setPrivateKey(data.privateKey);
      setMnemonic(data.seed);
    } catch (error) {
      console.error("Error generating wallet:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-96 max-w-3xl mx-auto">
      <div className="flex items-center justify-center">
        <a>
          <img src={bgbitcoin} className="background-img" alt="BTC logo" />
        </a>
      </div>
      <h1 className="mx-4 max-w-md">Gerador de Carteiras Bitcoin</h1>
      <div className="card w-full">
        <label className="block mb-2 text-base font-normal text-white text-left">
          Address
        </label>
        <input
  type="text"
  value={btcAddress}
  onChange={(e) => setBtcAddress(e.target.value)}
  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-[#e9830e] block w-full p-2.5 mb-6"
/>
        <label className="block mb-2 text-base font-normal text-white text-left tracking-wide">
          Private Key
        </label>
        <input
          type="text"
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-6"
        />
        <label className="block mb-2 text-base font-normal text-white text-left tracking-wide">
          Seed
        </label>
        <input
          type="text"
          value={mnemonic}
          onChange={(e) => setMnemonic(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mb-6"
        />
        <button onClick={generateWallet}>Gerar Carteira</button>
      </div>
    </div>
  );
}

export default App;
