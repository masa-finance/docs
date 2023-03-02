import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";

const TryMasa = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`}>
      <BrowserOnly>
        {() => {
          require("@masa-finance/masa-react/dist/browser/main.css");

          const { MasaProvider } = require("@masa-finance/masa-react");
          const {
            MasaLogin,
          } = require("@site/src/components/masa-login/masa-login");

          return (
            <MasaProvider environmentName="prod" company="Masa">
              <MasaLogin />
            </MasaProvider>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
};

export default TryMasa;
