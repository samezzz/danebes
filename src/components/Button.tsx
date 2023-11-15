import React from 'react'

interface StylesProp {
  styles?: string
}

const Button = ({ styles }: StylesProp) => (
  <button type="button" className={`w-[150px] py-2 px-2 md:w-[200px] md:py-4 md:px-6 font-poppins font-medium text-[18px] bg-primary rounded-[10px] outline-none hover:bg-secondary ${styles}`}>
    Get Started
  </button>
);

export default Button