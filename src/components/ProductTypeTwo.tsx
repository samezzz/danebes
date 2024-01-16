import React from "react";

import styles, { layout } from "@/styles";
import Image from "next/image";
import { ProductType } from "@/types";
import CloudinaryImage from "./CloudinaryImage";

interface ProductTypeTwoProps {
	items?: ProductType;
}

const ProductTypeTwo = ({ items }: ProductTypeTwoProps) => {
	if (!items) return null;

	return (
		<section className={`${layout.sectionReverse} flex-col-reverse`}>
			<div className={`${layout.sectionImgReverse}`}>
				<CloudinaryImage items={items} />
				{/* gradient start */}
				<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
				<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
				{/* gradient end */}
			</div>

			<div className={`${layout.sectionInfo}`}>
				<h2 className={`${styles.heading2}`}>{items.name}</h2>
				<h3 className="md:text-lg lg:text-xl text-green-500">{items.price}</h3>
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
