import React from "react";
import Link from "@docusaurus/Link";

export const StartNowBtn = () => {
    const strtText = "text-[10px] text-white text-opacity-1 xl:text-sm"
    const wrapper = "flex flex-row items-center gap-2 cursor-pointer mt-4"

    return (
      <div className={wrapper}>
        <div className={"bg-[#F3BF6C] rounded-full w-[16px] h-[16px] flex justify-center items-center"}>
          <img
            src="img/chevron-right.svg"
            alt="down-arrow"
            width="10"
            height="10"
          />
        </div>
        <p className={strtText}>START NOW</p>
      </div>
    )
}

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
        <Link to="docs/welcome-to-masa">
          <StartNowBtn />
        </Link>
      </section>
      <img
        src={"img/homepage-hero-banner-large.png"}
        alt=""
        className="flex z-0 lg:mt-[initial] aspect-auto"
      />
    </section>
  );
}
