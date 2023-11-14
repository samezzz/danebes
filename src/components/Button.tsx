import React from 'react'

interface StylesProp {
  styles?: string
}

const Button = ({ styles }: StylesProp) => (
  <button type="button" className={`w-[200px] py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button