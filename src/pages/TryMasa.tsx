import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Masa from "@site/src/components/masa/masa";
import { MasaLogin } from "@site/src/components/masa/masa-login";

const TryMasa = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`}>
      <Masa>
        <MasaLogin />
      </Masa>
    </Layout>
  );
};

export default TryMasa;
