"use client";

import styles from "@/styles/styles";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/lib/utils";
import Image from "next/image";

const Founder = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} max-w-[700px] mx-auto`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] flex justify-end flex-col sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="px-4 py-6 items-center w-[500px]">
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Daniel Essilfie
            </h4>
            <p className="mt-[6px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Founder Danebes
            </p>
          </div>

          <p className={`${styles.paragraph} px-4 pb-6`}>
            “Our journey in the realm of Biomedical Engineering has been fueled
            by a passion for precision and a commitment to advancing healthcare
            solutions. From the outset, our goal has been to provide not just
            services and products, but innovations that truly make a
            difference.”
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <Image
            src="/assets/people01.png"
            alt="Founder image"
            width={150}
            height={150}
            className="w-auto h-auto min-h-[210px] min-w-[210px] object-cover rounded-[40px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Founder;
