import React from "react";
import { Link, useParams } from "react-router-dom";
import { useInscription } from "./api/api";

export default function Details() {
  const { walletAddress = "", inscriptionId = "" } = useParams();
  const { data } = useInscription(walletAddress, inscriptionId);

  console.log({ data });

  if (!data) return null;

  return (
    <div>
      <div>
        <Link to="/">Go back</Link>
        <span>Details</span>
      </div>
      <div>
        <div>Content HERE</div>
        <div>
          <div>Inscription {data.value}</div>
          <hr />
          <div>Inscription ID</div>
          <div>{data.id}</div>
          <div>Owner Address</div>
          <div>{data.address}</div>
          <div>Attributes</div>
          <div>Output Value</div>
          <div>{data.output}</div>
          <div>Content Type</div>
          <div>{data.content_type}</div>
          <div>Content Length</div>
          <div>{data.content_length} bytes</div>
          <div>Location</div>
          <div>{data.location}</div>
          <div> Genesis Transaction </div>
          <div>{data.genesis_tx_id}</div>
        </div>
      </div>
    </div>
  );
}
