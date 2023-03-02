import "@masa-finance/masa-react/dist/src/provider/styles.scss";

import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { MasaProvider } from "@masa-finance/masa-react";
import Hero from "../components/Hero";
import MasaLogin from "@site/src/components/masa-login/masa-login";

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
    <MasaProvider>
      <Layout
        title={`${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <MasaLogin />
        <HomepageHeader />
      </Layout>
    </MasaProvider>
  );
}
