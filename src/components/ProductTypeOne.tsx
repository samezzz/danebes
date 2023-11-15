import styles, { layout } from '@/styles'
import React from 'react'
import Button from './Button'
import Image from 'next/image'

const ProductTypeOne = () => {
  return (
    <section className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} text-neutral-600 dark:text-neutral-300 max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg}`}>
      <Image src="/assets/card.png" alt="product" width={500} height={500} className="object-contain" />
    </div>
  </section>
  )
}

export default ProductTypeOne