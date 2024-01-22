import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import "./index.module.css";

const HomepageHeader = () => {
  return <Hero />;
};

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Dive into our developer docs and guides"
    >
      <HomepageHeader />
    </Layout>
  );
};

export default Home;
