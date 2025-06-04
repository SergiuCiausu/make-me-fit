import React from 'react'
import "@/app/make-me-fit/globals.css";

const HeroP = ({ nume, text }: { nume?: string, text: string }) => {
  return (
    <p 
    className="font-body font-medium text-neutralColor leading-normal"
    style = {{ 
      fontSize: "var(--hero-p-size)", 
      marginBottom: "var(--hero-p-margin)" 
    }}>
      <span className="font-bold">{nume !== "" ? `Programul de fitness ${nume}` : ""}</span> {text}</p>
  )
}

export default HeroP