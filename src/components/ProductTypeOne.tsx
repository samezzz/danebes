import styles, { layout } from "@/styles";
import React from "react";
import Image from "next/image";
import { ProductType } from "@/types";
import CloudinaryImage from "./CloudinaryImage";

interface ProductTypeOneProps {
	items?: ProductType;
}

const ProductTypeOne = ({ items }: ProductTypeOneProps) => {
	if (!items) return null;
	return (
		<section id="product" className={`${layout.section} mx-auto max-w-[1200px]`}>
			<div className={`${layout.sectionInfo}`}>
				<h2 className={`${styles.heading2}`}>{items.name}</h2>
				<p className="md:text-lg lg:text-xl text-green-500">{items.price}</p>
				<p
					className={`${styles.paragraph} text-neutral-600 dark:text-neutral-300 max-w-[470px] mt-5`}
				>
					{items.description}
				</p>

				{/* <Button styles={`mt-10`} /> */}
			</div>

			<div className={`${layout.sectionImg}`}>
				<CloudinaryImage items={items} />
			</div>
		</section>
	);
};

export default ProductTypeOne;
