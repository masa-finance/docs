import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export const MasaLogin = (): JSX.Element => {
  return (
    <BrowserOnly>
      {() => {
        const { useMasa } = require("@masa-finance/masa-react");

        const { connect, handleLogout, walletAddress, isLoggedIn } = useMasa();

        return (
          <div style={{ textAlign: "center" }}>
            {isLoggedIn ? (
              <button onClick={() => handleLogout?.()}>{walletAddress}</button>
            ) : (
              <button onClick={() => connect?.()}>Connect Masa Account</button>
            )}
          </div>
        );
      }}
    </BrowserOnly>
  );
};
