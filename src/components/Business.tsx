import styles, { layout } from "@/styles/styles";
import React from "react";
import Button from "./Button";
import { services } from "@/constants";
import ServiceCard from "./ServiceCard";

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
        {services.map((service, index) => {
          return (
          <ServiceCard key={index} items={service}/>
        )})}
      </div>
    </section>
  );
};

export default Business;
