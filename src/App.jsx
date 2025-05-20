import { useEffect } from "react";
import { useState } from "react";
import { sendFakeTransaction } from "./ethUtils";
import FakeEthSenderForm from "./components/organisms/FakeEthSenderForm";
import "./App.css";

function App() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("0.01");
  const [txHash, setTxHash] = useState("");

  const handleSend = async () => {
    try {
      const hash = await sendFakeTransaction(recipient, amount);
      setTxHash(hash);
    } catch (err) {
      console.error("Error sending transaction:", err);
      alert("Error sending transaction. Please check the console for details.");
    }
  };

  return (
    <>
    <div className="front-hero-bg">
      <FakeEthSenderForm
        recipient={recipient}
        setRecipient={setRecipient}
        amount={amount}
        setAmount={setAmount}
        txHash={txHash}
        handleSend={handleSend}
      />
    </div>
    </>
  );
}

export default App;
