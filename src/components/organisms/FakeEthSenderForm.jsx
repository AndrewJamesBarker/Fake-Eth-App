import { useState } from "react";
import { useEffect } from "react";
import Button from "../atoms/Button";
import FormField from "../molecules/FormField";

import "../../App.css";

function FakeEthSenderForm({ recipient, setRecipient, amount, setAmount, txHash, handleSend }) {
  return (
    <>
      <div className="sticky top-24 max-w-xl mx-auto p-8 rounded-2xl bg-black/10 backdrop-blur-xl backdrop-saturate-150 bg-clip-padding border border-white/30 shadow-2xl
    transition-transform hover:scale-[1.02]">
        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl text-white">
            Fake Eth Sender
          </h2>
          <div>
            <FormField 
              label="Recipient Address:"
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="0x..."
            />
            <FormField
              label="Amount (ETH):"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.01"
            />
            <Button 
              type="button"
              onClick={handleSend}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
              Send Fake ETH
              </Button>
            {txHash && (
              <div>
                <h3>Transaction Hash:</h3>
                <p>{txHash}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FakeEthSenderForm;
