import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Programe from '../Alege program/Programe'
import styles from "@/app/make-me-fit/components/Hero/Hero.module.css";

const page = () => {
  return (
    <section
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: 'url("/Banner-make-me-fit-hero-section-2.png")',
            width: "100%",
            height: "100%",
            paddingBottom: "var(--section-mb)"
        }}>
        <Navbar />
        <div>
            <h1 
                className={`make-me-fit-h1 uppercase font-bold text-center ${styles.headerTextShadow}`}
                style={{
                    fontSize: "var(--h1-size)", 
                    marginTop: "var(--h1-margin-top)",
                    marginBottom: "var(--h1-margin-bottom)"
                }}>
                ALEGE-ȚI PROGRAMUL PREFERAT
            </h1>
            <p 
                className="text-neutralColor font-body text-center"
                style={{
                    fontSize: "var(--subheading-size)",
                    marginBottom: "var(--subheading-mb)" 
                }}>
                Iată metodele prin care te putem ajuta să iubești stilul de viață sănătos
            </p>
        </div>
        <Programe />
    </section>
  )
}

export default page