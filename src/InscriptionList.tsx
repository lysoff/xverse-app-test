import React, { Fragment } from "react";
import { useInfiniteWalletOrdinals } from "./api/api";
import { Link } from "react-router-dom";
import arrow from "./assets/arrow.png";

interface InscriptionListProps {
  walletAddress: string;
}

export default function InscriptionList({
  walletAddress,
}: InscriptionListProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useInfiniteWalletOrdinals(walletAddress);

  if (!data) {
    return null;
  }

  return (
    <div className="w-full my-5 py-[16px]">
      <div>Results</div>
      <div>
        {data.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map(({ inscriptions }) => {
              const inscriptionId = inscriptions[0]?.id;

              if (!inscriptionId) return null;

              return (
                <div
                  className="py-[24px] hover:bg-gray-500"
                  key={inscriptionId}
                >
                  <Link to={`/${walletAddress}/${inscriptionId}`}>
                    <div className="w-full flex flex-row px-[16px]">
                      <div className="flex-1 flex-row items-center font-semibold">
                        Inscription {inscriptionId.slice(0, 8)}
                      </div>
                      <img
                        className="flex h-[16px] flex-row items-center justify-center"
                        src={arrow}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </Fragment>
        ))}
        <div>
          <button
            className="w-full rounded-lg p-[12px] my-2 bg-blue-500 disabled:bg-gray-400"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </button>
        </div>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </div>
    </div>
  );
}
