import React from "react";
import { Link } from 'react-router-dom';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import "./index.module.css";
import Link from "@docusaurus/Link";

const HomepageHeader = () => {
  return (
    <Link to="docs/quickstart/base">
      <Hero />
    </Link>
  );
};

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
};

export default Home;
