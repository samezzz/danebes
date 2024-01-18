
import styles, { layout } from "@/styles";
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
			</div>

			<div className={`${layout.sectionInfo}`}>
				<h2 className={`${styles.heading2}`}>{items.name}</h2>
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
