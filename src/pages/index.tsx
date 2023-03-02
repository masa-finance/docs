import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import BrowserOnly from "@docusaurus/BrowserOnly";

function HomepageHeader() {
  return (
    <Link to="docs/masa/introduction">
      <Hero />
    </Link>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <BrowserOnly>
        {() => {
          require("@masa-finance/masa-react/dist/src/provider/styles.scss");

          const { MasaProvider } = require("@masa-finance/masa-react");
          const MasaLogin = require("@site/src/components/masa-login/masa-login");

          return (
            <MasaProvider>
              <MasaLogin />
            </MasaProvider>
          );
        }}
      </BrowserOnly>

      <HomepageHeader />
    </Layout>
  );
}
