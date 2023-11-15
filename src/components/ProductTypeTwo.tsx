import React from "react";

import styles, { layout } from "@/styles/styles";
import Image from "next/image";

const ProductTypeTwo = () => {
  return (
    <section id="product" className={`${layout.sectionReverse} flex-col-reverse`}>
      <div className={`${layout.sectionImgReverse}`}>
        <Image
          src="/assets/bill.png"
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
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
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
        </div>
      </div>
    </section>
  );
};

export default ProductTypeTwo;
