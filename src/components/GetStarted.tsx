import styles from "@/styles/styles";
import Image from "next/image";
import React from "react";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col w-[100%] bg-secondary h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <Image
          src="/assets/arrow-up.svg"
          alt="Get Started"
          className="object-contain"
          width={23}
          height={23}
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
