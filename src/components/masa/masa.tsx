import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

const Masa = ({ children }): JSX.Element => {
  return (
    <BrowserOnly>
      {() => {
        const { MasaProvider } = require("@masa-finance/masa-react");

        return (
          <MasaProvider environmentName="production" company="Masa">
            {children}
          </MasaProvider>
        );
      }}
    </BrowserOnly>
  );
};

export default Masa;
