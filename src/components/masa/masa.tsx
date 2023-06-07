import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import "@masa-finance/masa-react/dist/css/styles.css";

const Masa = ({ children }): JSX.Element => {
  return (
    <BrowserOnly>
      {() => {
        const { MasaProvider } = require("@masa-finance/masa-react");

        return (
          <MasaProvider
            useRainbowKitWalletConnect
            environmentName="production"
            company="Masa"
          >
            {children}
          </MasaProvider>
        );
      }}
    </BrowserOnly>
  );
};

export default Masa;
