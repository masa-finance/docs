import React from "react";
import Link from "@docusaurus/Link";

export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-t from-lightPeach to-white"
      style={{ height: "80vh" }}
    >
      <img src="img/astronaut-moon.svg" className="absolute bottom-0 left-0" />
      <img src="img/moon-sun.svg" className="absolute right-5 top-40" />
      <img src="img/bush.png" className="absolute right-0 bottom-0" />
      <div
        className="flex flex-col justify-center items-center relative font-[ezra]"
        style={{ height: "100%" }}
      >
        <p className="font-medium py-10 text-[60px]">Masa Soulbound Identity</p>
        <p className="text-[gray] text-[22px]">
          The premiere web3 identity and credit protocol
        </p>
        <Link to="docs/introduction">
            <p className="py-8 text-xl font-bold">Get Started</p>
        </Link>
        <p className="font-bold">Build with Masa</p>
      </div>
    </section>
  );
}
