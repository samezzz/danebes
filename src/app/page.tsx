import styles from "@/styles";

import {
  Navbar,
  Hero,
  Stats,
  Business,
  ProductTypeTwo,
  Testimonials,
  CTA,
  Footer,
  ProductTypeOne,
  Founder,
} from "../components";
import { productsCat1, productsCat2 } from "@/constants";

export default function Home() {
	return (
		<main>
			<div className="w-full overflow-hidden">
				<div className={`${styles.paddingX} ${styles.flexCenter}`}>
					<div className={`${styles.boxWidth}`}>
						<Navbar />
					</div>
				</div>
			</div>

			<div className={`${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div className="w-full overflow-hidden">
				<div className={`${styles.paddingX} ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<Stats />
						<Business />
						{[...productsCat1, ...productsCat2].map((product, index) => {
							// Use a conditional operator to determine the component to render
							return index % 2 === 0 ? (
								<ProductTypeOne items={product} key={index} />
							) : (
								<ProductTypeTwo items={product} key={index} />
							);
						})}
						<Founder />
						<Testimonials />
						<CTA />
						<Footer />
					</div>
				</div>
			</div>
		</main>
	);
}

// Combine both product arrays
// const combinedProducts = [];
// const maxLength = Math.max(productsCat1.length, productsCat2.length);

// for (let i = 0; i < maxLength; i++) {
//   if (productsCat1[i]) {
//     combinedProducts.push(productsCat1[i]);
//   }
//   if (productsCat2[i]) {
//     combinedProducts.push(productsCat2[i]);
//   }
// }
{
	/* {combinedProducts.map((product, index) => {
              if (index % 2 === 0) {
                return <ProductTypeOne items={product} key={index} />;
              } else {
                return <ProductTypeTwo items={product} key={index} />;
              }
            })} */
}
