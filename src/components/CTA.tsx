import React from 'react'
import Button from './Button'
import styles from '@/styles/styles'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row border border-border flex-col bg-black-gradient-2 rounded-[20px] box-shadow mb-10 p-6`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Let us take care of your Biomedical Engineering needs while you focus on what matters.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
  )
}

export default CTA