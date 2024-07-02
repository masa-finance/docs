import React from "react";
import Link from "@docusaurus/Link";

export const StartNowBtn = () => {
  const wrapper =
    "flex lg:flex-row gap-4 lg:gap-6 items-center justify-center mt-7";
  const strtText = "body_s_bold leading-[1] text-inherit";
  const button =
    "button w-fit relative text-center flex items-center justify-center text-white cursor-pointer whitespace-nowrap transition-colors bg-transparent rounded-[4px] active:bg-white active:text-black hover:bg-[rgba(255,255,255,0.2)] px-6 py-4 rounded-lg w-16 h-8 lg:h-[initial]";

  return (
    <div className={wrapper}>
      <Link to="docs/welcome-to-masa" className={"contents"}>
        <div className={button} style={{ border: "white 2px solid" }}>
          <p className={strtText}>GET STARTED</p>
        </div>
      </Link>
    </div>
  );
};

export default function Hero() {
  const section = "relative bg-black flex-1 h-[calc(100vh-3.5rem)] flex-col";
  const wrapper = "text-center h-[225px] lg:mt-[120px] max-w-[1120px] mx-auto";

  const heading =
    "text-[15px] sm:text-[30px] lg:text-[55px] leading-[1] font-medium pb-8 ";

  return (
    <section className={section}>
      <img
        className="hidden lg:block absolute top-16 right-10"
        src={"img/saturn.png"}
        alt="saturn-masa"
      />
      <section className={wrapper}>
        <h1 className={heading}>Fair AI, Powered by the People</h1>
        <StartNowBtn />
      </section>
      <img
        src={"img/homepage-hero-banner-large.png"}
        alt=""
        className="flex z-0 lg:mt-[initial] aspect-auto"
      />
    </section>
  );
}
