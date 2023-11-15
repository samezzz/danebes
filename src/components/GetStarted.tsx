import styles from "@/styles";
import Image from "next/image";
import React from "react";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-500 dark:bg-primary p-[2px] cursor-pointer hover:bg-secondary `}
  >
    <div
      className={`${styles.flexCenter} flex-col w-[100%] bg-slate-500 dark:bg-secondary h-[100%] rounded-full hover:opacity-90 hover:animate-ping-once`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] mr-2">
          <span className="text-gray-100">Send us</span>
        </p>
        <Image
          src="/images/arrow-up.svg"
          alt="Get Started"
          className="object-contain"
          width={23}
          height={23}
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gray-100">an Email</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
