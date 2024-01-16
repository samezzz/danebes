"use client";

import { ProductType } from "@/types";
import { CldImage } from "next-cloudinary";
import React from "react";

const CloudinaryImage = ({ items }: { items: ProductType }) => {
	return (
		<>
			<CldImage
				src={items.image}
				alt="product"
				width={500}
				height={500}
				className="object-contain"
			/>
		</>
	);
};

export default CloudinaryImage;
