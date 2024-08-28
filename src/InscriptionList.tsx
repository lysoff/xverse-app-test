import React, { Fragment } from "react";
import { useInfiniteWalletOrdinals } from "./api/api";
import { Link } from "react-router-dom";

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

  console.log({ data });

  return (
    <div>
      <div>Results</div>
      <div>
        {data.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map(({ inscriptions }) => {
              const inscriptionId = inscriptions[0]?.id;

              if (!inscriptionId) return null;

              return (
                <div key={inscriptionId}>
                  <Link to={`${walletAddress}/${inscriptionId}`}>
                    Inscription {inscriptionId}
                  </Link>
                </div>
              );
            })}
          </Fragment>
        ))}
        <div>
          <button
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
