import React, { useState } from "react";
import { useWalletOrdinals } from "./api/api";
import { Link } from "react-router-dom";

interface InscriptionListProps {
  walletAddress: string;
}

export default function InscriptionList({
  walletAddress,
}: InscriptionListProps) {
  const [offset, setOffset] = useState(0);
  const { data } = useWalletOrdinals(walletAddress);

  if (!data) {
    return null;
  }

  console.log({ data });

  return (
    <div>
      <div>Results</div>
      <div>
        {data.results.map(({ inscriptions }) => {
          const inscriptionId = inscriptions[0].id;

          return (
            <div key={inscriptionId}>
              <Link to={`${walletAddress}/${inscriptionId}`}>
                Inscription {inscriptionId}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
