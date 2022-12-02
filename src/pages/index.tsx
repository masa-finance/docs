import "@masa-finance/masa-react/dist/style.css";
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { MasaProvider } from "@masa-finance/masa-react";
import MasaLogin from "../components/masa-login/masa-login";

function HomepageHeader() {
  return (
    <Link to="docs/masa/introduction">
      <img src={useBaseUrl("/img/banner.png")} />;
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
      <MasaProvider environment="test">
        <HomepageHeader />
        <main>
          <MasaLogin />
        </main>
      </MasaProvider>
    </Layout>
  );
}
