import React from 'react'
import "@/app/make-me-fit/globals.css";

const InfoAccentText = ({ text }: {text: string}) => {
  return (
    <p className="make-me-fit-info-accent-text font-bold uppercase mb-5 select-none">{text}</p>
  )
}

export default InfoAccentText