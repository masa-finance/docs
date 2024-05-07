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
  // calc height based on nav height
  const section = "relative bg-black flex h-[calc(100vh-3.5rem)]"
  const wrapper = "relative w-full md:w-2/3 max-w-[750px] px-4 pb-[20vh] mx-auto flex flex-col justify-center items-center text-center"
  
  const heading1 = "text-[15px] sm:text-[30px] lg:text-[55px] leading-[1] font-medium pb-8"
  const heading2 = "text-[12px] sm:text-[16px] lg:text-[20px] leading-[1.8] pb-8"

  return (
    <section className={section}>
      <img
        src="img/hero-wave.svg"
        className="absolute bottom-0 left-0"
        alt=""
      />
      <img
        src="img/hero-planet.png"
        className="absolute right-10 bottom-20 max-w-[20vw]"
        alt=""
      />
      <div className={wrapper}>
        <h1 className={heading1}>
          Building the leading <span className='text-gold'>zk-data</span> marketplace & network
        </h1>
        <p className={heading2}>
          Build hyper-personalized applications, train AI models and more utilizing the largest zk-data network in the world.
        </p>
        <Link to="docs/category/masa-oracle">
          <StartNowBtn />
        </Link>
      </div>
    </section>
  );
}
