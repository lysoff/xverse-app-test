import React, { ChangeEvent, useState } from "react";
import InscriptionList from "./InscriptionList";
import { useNavigate, useParams } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  const { walletAddress } = useParams();

  const [form, setForm] = useState({ address: "" });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ address: e.target.value });
  };

  const handleLookUp = () => {
    navigate(form.address);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[375px] border border-green-400">
        <div className="flex flex-col items-center h-[88px] pt-[54px] w-full">
          Ordinal Inscription Lookup
        </div>
        <div className="px-[16px] py-[10px] w-full">
          <div>Owner Bitcoin Address:</div>
          <div>
            <input
              className="bg-gray-500 w-full"
              value={form.address}
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full rounded-lg p-[12px] my-2 bg-blue-500"
            onClick={handleLookUp}
          >
            Look up
          </button>
        </div>
        {walletAddress && <InscriptionList walletAddress={walletAddress} />}
      </div>
    </div>
  );
}
