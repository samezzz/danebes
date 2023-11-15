import React from "react";

import styles, { layout } from "@/styles";
import Image from "next/image";
import { ProductType } from "@/types";

interface ProductTypeTwoProps {
  items?: ProductType;
}

const ProductTypeTwo = ({ items }: ProductTypeTwoProps) => {
  if (!items) return null;

  return (
    <section
      className={`${layout.sectionReverse} flex-col-reverse`}
    >
      <div className={`${layout.sectionImgReverse}`}>
        <Image
          src={items.image}
          alt="Product"
          width={500}
          height={500}
          className="object contain relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>{items.name}</h2>
        <h3 className="md:text-lg lg:text-xl text-green-500" >{items.price}</h3>
        <p
          className={`${styles.paragraph} text-neutral-600 dark:text-neutral-300 max-w-[470px] mt-5`}
        >
          {items.description}
        </p>
      </div>
    </section>
  );
};

export default ProductTypeTwo;


 {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <Image
            src="/assets/apple.svg"
            alt="google_play"
            width={128.68}
            height={42.05}
            className="object-contain mr-5 cursor-pointer"
          />
          <Image
            src="/assets/google.svg"
            alt="google_play"
            width={144.17}
            height={43.08}
            className="object-contain cursor-pointer"
          />
        </div> */}