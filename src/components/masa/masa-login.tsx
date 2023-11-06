import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export const MasaLogin = (): JSX.Element => {
  return (
    <BrowserOnly>
      {() => {
        const { useMasa } = require("@masa-finance/masa-react");

        const { connect, handleLogout, accountAddress, isLoggedIn } = useMasa();

        return (
          <div style={{ textAlign: "center" }}>
            {isLoggedIn ? (
              <button className="button" onClick={() => handleLogout?.()}>
                {accountAddress}
              </button>
            ) : (
              <button className="button" onClick={() => connect?.()}>
                Connect Masa
              </button>
            )}
          </div>
        );
      }}
    </BrowserOnly>
  );
};
