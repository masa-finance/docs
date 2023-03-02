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
          require("@masa-finance/masa-react/dist/src/provider/styles.scss");

          const { MasaProvider } = require("@masa-finance/masa-react");
          const {
            MasaLogin,
          } = require("@site/src/components/masa-login/masa-login");

          return (
            <MasaProvider>
              <MasaLogin />
            </MasaProvider>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
};

export default TryMasa;
