import React from "react";
import { Link, useParams } from "react-router-dom";
import { getContentUrl, useInscription } from "./api/api";

import arrow from "./assets/arrow.png";

export default function Details() {
  const { walletAddress = "", inscriptionId = "" } = useParams();
  const { data } = useInscription(walletAddress, inscriptionId);

  console.log({ data });

  if (!data) return null;

  return (
    <div className="flex flex-col items-center">
      <div className="w-[375px]">
        <div className="flex flex-row w-full pt-[54px]">
          <div className="flex flex-row p-[16px] items-center justify-center">
            <Link to={`/${walletAddress}`}>
              <img src={arrow} alt="" className=" rotate-180" />
            </Link>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center">
            Details
          </div>
        </div>
        <div className="p-[16px]">
          <div>
            {data.content_type.startsWith("image/") ? (
              <img className="w-full" src={getContentUrl(data.id)} alt="" />
            ) : (
              <div>{data.content}</div>
            )}
          </div>
          <div>
            <div className="text-lg py-[16px] font-bold">
              Inscription {data.value}
            </div>
            <hr />
            <div className="text-sm opacity-70 py-2">Inscription ID</div>
            <div className="text-sm font-semibold break-all pb-[16px]">
              {data.id}
            </div>
            <div className="text-sm opacity-70 py-2">Owner Address</div>
            <div className="text-sm font-semibold break-all pb-[16px]">
              {data.address}
            </div>
            <div className="text-lg py-[16px] font-bold">Attributes</div>
            <div className="text-sm opacity-70 py-2">Output Value</div>
            <input
              disabled
              className="w-full text-sm font-semibold p-[12px] bg-gray-500 rounded-lg"
              value={data.value}
            />
            <div className="text-sm opacity-70 py-2">Content Type</div>
            <input
              disabled
              className="w-full text-sm font-semibold p-[12px] bg-gray-500 rounded-lg"
              value={data.content_type}
            />
            <div className="text-sm opacity-70 py-2">Content Length</div>
            <input
              disabled
              className="w-full text-sm font-semibold p-[12px] bg-gray-500 rounded-lg"
              value={`${data.content_length} bytes`}
            />
            <div className="text-sm opacity-70 py-2">Location</div>
            <input
              disabled
              className="w-full text-sm font-semibold p-[12px] bg-gray-500 rounded-lg"
              value={data.location}
            />
            <div className="text-sm opacity-70 py-2">Genesis Transaction </div>
            <input
              disabled
              className="w-full text-sm font-semibold p-[12px] bg-gray-500 rounded-lg"
              value={data.genesis_tx_id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
