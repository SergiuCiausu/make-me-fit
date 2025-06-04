import React from 'react'
import "@/app/make-me-fit/globals.css";
import Link from 'next/link';

const HeroBtn = ({ text, color, mb }: { text: string, color:"primary" | "accent", mb?: boolean } ) => {
  return (
    <Link
    href={mb ? "/make-me-fit/programe" : "/make-me-fit"}
    className=
    {`uppercase text-center font-bold ${color === "primary" ? "hero-btn-primary" : "make-me-fit-hero-btn"} border-transparent rounded-2xl shadow-[4px_4px_12px_rgba(0,0,0,0.3)] text-3xl ${mb ? "make-me-fit-hero-btn-mb" : ""} select-none cursor-pointer`}
    style={{ 
      fontSize: "var(--hero-btn-text-size)", 
      padding: "var(--hero-btn-py-size) var(--hero-btn-px-size)", 
      width: "var(--hero-btn-width)",
      fontFamily: "Poppins"}}>
    {text}</Link>
  )
}

export default HeroBtn