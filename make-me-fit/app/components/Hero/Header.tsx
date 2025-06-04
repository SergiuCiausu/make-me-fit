import React from 'react'
import styles from "./Hero.module.css"
import "@/app/make-me-fit/globals.css";

const Header = ({ text }: { text: string }) => {
  return (
    <h1 
      className={`make-me-fit-h1 uppercase font-bold ${styles.headerTextShadow} leading-tight`} 
      style={{ 
        fontSize: "var(--h1-size)", 
        marginBottom: "var(--hero-header-margin)",
        fontFamily: "Oswald" }}>
      {text}
    </h1>
  )
}

export default Header