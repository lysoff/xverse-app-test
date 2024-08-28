import { useQuery } from "@tanstack/react-query";

const API_URL = "https://api-3.xverse.app/v1";

export interface WalletOrdinalsResponse {
  limit: number;
  offset: number;
  total: number;
  results: [
    {
      txid: string;
      vout: number;
      block_height: number;
      value: number;
      sats: [
        {
          number: string;
          rarity_ranking: string;
          offset: number;
        }
      ];
      inscriptions: [
        {
          id: string;
          offset: number;
          content_type: string;
        }
      ];
    }
  ];
}

export interface OrdinalResponse {
  id: string;
  number: number;
  address: string;
  genesis_address: string;
  genesis_block_height: number;
  genesis_block_hash: string;
  genesis_tx_id: string;
  genesis_fee: number;
  genesis_timestamp: number;
  location: string;
  output: string;
  offset: number;
  sat_ordinal: number;
  sat_rarity: string; // 'common' | 'uncommon'
  sat_coinbase_height: number;
  mime_type: string;
  content_type: string;
  content_length: number;
  tx_id: string;
  timestamp: number;
  value: number;
}

const fetchWalletOrdinals = async (walletAddress: string, offset: number) => {
  const response = await fetch(
    API_URL + `/address/${walletAddress}/ordinal-utxo?offset=${offset}`
  );
  return response.json();
};

export const useWalletOrdinals = (walletAddress: string, offset: number = 0) =>
  useQuery({
    queryKey: ["wallet", { walletAddress, offset }],
    queryFn: () => fetchWalletOrdinals(walletAddress, offset),
  });

const fetchInscription = async (
  walletAddress: string,
  inscriptionId: string
) => {
  const response = await fetch(
    API_URL + `/address/${walletAddress}/ordinals/inscriptions/${inscriptionId}`
  );

  // TODO: Fetch content here
  return response.json();
};

export const useInscription = (walletAddress: string, inscriptionId: string) =>
  useQuery({
    queryKey: ["wallet", "inscription", { walletAddress, inscriptionId }],
    queryFn: () => fetchInscription(walletAddress, inscriptionId),
  });
