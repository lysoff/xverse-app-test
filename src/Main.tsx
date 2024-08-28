import React, { ChangeEvent, useState } from "react";
import InscriptionList from "./InscriptionList";

export default function Main() {
  const [walletAddress, setWalletAddress] = useState("");
  const [form, setForm] = useState({ address: "" });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ address: e.target.value });
  };

  const handleLookUp = () => {
    setWalletAddress(form.address);
  };

  return (
    <div>
      <div>Ordinal Inscription Lookup</div>
      <div>
        <label>Owner Bitcoin Address:</label>
        <input value={form.address} onChange={handleChange} />
        <button onClick={handleLookUp}>Look up</button>
      </div>
      {walletAddress && <InscriptionList walletAddress={walletAddress} />}
    </div>
  );
}
