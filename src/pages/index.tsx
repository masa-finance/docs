import "@masa-finance/masa-react/dist/style.css";
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useMasa } from "@masa-finance/masa-react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Link to="docs/masa/introduction">
      <img src={useBaseUrl("/img/banner.png")} />;
    </Link>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { connect } = useMasa();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <button onClick={() => connect!()}>masa masa ho</button>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
