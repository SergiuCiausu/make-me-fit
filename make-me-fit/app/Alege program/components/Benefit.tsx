import React from 'react';
import "@/app/make-me-fit/globals.css";
import Checkmark from '@/app/make-me-fit/components/Checkmark';

const Benefit = ({ benefit, isBold }: { benefit: string, isBold: boolean }) => {
  return (
    <div 
      className="flex"
      style={{
        marginBottom: "var(--benefit-mb)"
      }}>
       <Checkmark src="/Checkmark icon web.png"/>
       <p 
            className={`make-me-fit-descriere-program ${isBold ? "font-bold" : ""}`}
            style={{ 
                fontSize: "var(--p-size)"
            }}>
                {benefit}
        </p>
    </div>
  )
}

export default Benefit