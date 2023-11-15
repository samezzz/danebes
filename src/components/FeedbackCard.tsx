import styles from "@/styles";
import { FeedbackType } from "@/types";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Icons } from "./Icons";

import {
  Quote,
  User,
} from "lucide-react"

interface FeedbackCardProps {
  items?: FeedbackType
}

const FeedbackCard = ({ items }: FeedbackCardProps) => {
  if (!items) return null; 

  return (
    <div className="flex justify-between flex-col px-6 md:px-10 py-8 md:py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card border border-border">
      <Quote className="h-8 w-8 text-primary"/>
      
      <p className={`${styles.paragraph} text-neutral-600 dark:text-neutral-300 md:leading-[32.4px] my-10`}>
        {items.content}
      </p>

      <div className="flex flex-row items-center">
      <User className="h-8 w-8" />
        {/* <Image
          src={items.image}
          alt={items.name}
          className="w-[48px] h-[48px] rounded-full"
        /> */}
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px]">
            {items.name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px]">
            {items.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
