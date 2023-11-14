import styles, { layout } from "@/styles/styles";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { services } from "@/constants";

interface ServiceCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}

const ServiceCard = ({ icon, title, content, index }: ServiceCardProps) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== services.length - 1 ? "mb-6" : "mb-0"
    } service-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <Image
        src={icon}
        alt="star"
        width={30}
        height={30}
        className="mx-auto object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="services" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Transforming Healthcare Solutions with Precision and Quality
          <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We deliver comprehensive Biomedical Engineering solutions, including
          precision equipment, tailored services, and innovative healthcare
          advancements.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {services.map((service, index) => (
          <ServiceCard key={service.id} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
