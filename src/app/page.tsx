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
            <ProductTypeTwo />
            <ProductTypeOne />
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
