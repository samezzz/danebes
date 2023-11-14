import Image, { StaticImageData } from "next/image";
import React from "react";

interface FeedbackCardProps {
  content: string;
  name: string;
  title: string;
  img: StaticImageData;
}

const FeedbackCard = ({ content, name, title, img }: FeedbackCardProps) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <Image
        src="/assets/quotes.svg"
        alt="double_quotes"
        width={42.6}
        height={27.6}
        className="object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px]my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <Image
          src={img}
          alt={name}
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px]">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
