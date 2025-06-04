import React from 'react'
import "@/app/make-me-fit/globals.css";

const HeadingLP = ({ title, subtitle }: {title: string, subtitle: string}) => {
  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
        <h3 
            className="uppercase font-bold make-me-fit-h3" 
            style={{ 
                fontSize: "var(--h3-size)", 
                textShadow: "var(--heading-lp-text-stroke), var(--heading-lp-text-shadow)", 
                marginBottom: "var(--heading-mb)"}}>
                  {title}</h3>
        <p 
            className="make-me-fit-heading-lp-p text-center"
            style={{ 
                fontSize: "var(--subheading-size)",
                marginBottom: "var(--subheading-mb)" 
            }}>{subtitle}
        </p>
    </div>
  )
}

export default HeadingLP