import { ServiceType } from "@/types";
import React from "react";
import { Icons } from "./Icons";
import styles from "@/styles";

interface ServiceCardProps {
  items?: ServiceType;
}

const ServiceCard = ({ items }: ServiceCardProps) => {
  if (!items) return null;

  const Icon = Icons[items.icon || "arrowRight"];
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        items.icon !== "clients" ? "mb-6" : "mb-0"
      } service-card border border-border`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <Icon className="mr-2 h-7 w-7 ml-2 text-green-500" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-[18px] leading-[23.4px] mb-3">
          {items.title}
        </h4>
        <p
          className={`${styles.paragraph} text-neutral-600 dark:text-neutral-300`}
        >
          {items.content}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
