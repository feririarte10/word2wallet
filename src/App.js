import "./App.css";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import InfoWallet from "./components/InfoWallet";

function App() {
  const [wallet, setWallet] = useState(false);
  const [wordEncrypt, setWordEncrypt] = useState(false);

  const changeInput = async (e) => {
    const text2Key = e.target.value,
      privateKey = ethers.utils.id(text2Key);

    const tmpWallet = new ethers.Wallet(privateKey);

    setWallet(tmpWallet);
    setWordEncrypt(text2Key);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Word2Key</h1>
        <input onChange={changeInput} type="text" />
        {<InfoWallet wordUsed={wordEncrypt} wallet={wallet} />}
      </header>
    </div>
  );
}

export default App;
