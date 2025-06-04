import React from 'react'
import Benefit from './Benefit';
import "@/app/make-me-fit/globals.css";

interface benefits {
  text: string
}

const BeneficiiProgram = ({ benefits }: { benefits: benefits[]}) => {
  return (
    <div 
        className="flex flex-col w-full"
        style={{
            gap: "var(--benefit-mb)",
            height: "auto"
        }}>
            {benefits.map((benefit, index) => (
                <Benefit 
                    key={index}
                    benefit={benefit.text} 
                    isBold={index === benefits.length - 1 ? true : false}/> 
            ))}
    </div>
  )
}

export default BeneficiiProgram