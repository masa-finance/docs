import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export const DisplaySBTs = (): JSX.Element => {
  return (
    <BrowserOnly>
      {() => {
        const { useMasa } = require("@masa-finance/masa-react");

        const { masa, greens, isGreensLoading, reloadGreens, isLoggedIn } =
          useMasa();

        return isLoggedIn ? (
          <div>
            <div>
              <button onClick={reloadGreens} className="button">
                Reload Greens
              </button>
            </div>
            {!isGreensLoading && greens ? (
              greens.length > 0 ? (
                greens.map((green) => (
                  <div key={green.tokenId.toString()}>
                    <div>TokenId: {green.tokenId.toString()}</div>
                    <div>TokenId: {green.tokenUri}</div>
                  </div>
                ))
              ) : (
                <>No Masa Green on {masa.config.networkName}!</>
              )
            ) : (
              <div>Loading ...</div>
            )}
          </div>
        ) : null;
      }}
    </BrowserOnly>
  );
};
