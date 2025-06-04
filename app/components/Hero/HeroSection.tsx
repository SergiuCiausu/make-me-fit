import React from 'react';
import Navbar from "../Navbar/Navbar";
import InfoAccentText from './InfoAccentText';
import Header from './Header';
import HeroP from "./HeroP";
import HeroBtn from './HeroBtn';
import "@/app/make-me-fit/globals.css";

const HeroSection = (
  { nume, infoAccentText, header, heroP, textBtn, img, color }: 
  {
    nume?: string,
    infoAccentText: string,
    header: string,
    heroP: string,
    textBtn: string,
    img: string,
    color: "primary" | "accent"
  }) => {

  return (
    <div 
      className={`w-full bg-cover flex flex-col`} 
      style={{ 
        height: "var(--hero-height)",
        backgroundImage: `url(${img})` 
      }}>
        <Navbar />
        <section className="flex flex-grow justify-center flex-col" style={{ marginLeft: "var(--body-margin)", width: "var(--hero-text-width)" }}>
            <InfoAccentText text={infoAccentText} />
            <Header text={header} />
            <HeroP text={heroP} nume={nume}/>
            <HeroBtn text={textBtn} color={color} mb={true}/>
        </section>
    </div>
    
  )
}

export default HeroSection