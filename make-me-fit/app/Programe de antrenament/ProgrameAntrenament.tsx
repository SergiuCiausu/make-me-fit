"use client";

import React from 'react'
import Image from 'next/image'
import HeadingLP from '../components/Headings/HeadingLP'
import "@/app/make-me-fit/globals.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ProgrameAntrenament = () => {

    const pathname = usePathname();

    const programeAntrenament = [
        {
            src: "/slimhouette-banner.png",
            alt: "Programul de antrenamnet Slimhouette",
            link: "/slimhouette"
        },
        {
            src: "/bake-a-cake-banner.png",
            alt: "Programul de antrenamnet Bake A Cake",
            link: "/bake-a-cake"
        },
        {
            src: "/arm-toner-banner.png",
            alt: "Programul de antrenamnet Arm Toner",
            link: "/arm-toner"
        },
        {
            src: "/chest-lifter-banner.png",
            alt: "Programul de antrenamnet Chest Lifter",
            link: "/chest-lifter"
        },
    ]
  return (
    <section>
        <HeadingLP 
            title="Programe de fitness" 
            subtitle="Avem soluții pentru orice problemă cu care te confrunți legată de corpul tău"/>
        <div 
            className="grid place-items-center grid-flow-row grid-cols-2"
            style={{ 
                margin: "0 var(--program-margin-x)", 
                gap: "var(--program-grid-gap)"}}>
            {programeAntrenament.map(
                (program, index) => 
                <Link
                    key={index}
                    href={`${pathname}/${program.link}`}>
                    <Image 
                        src={program.src} 
                        alt={program.alt} 
                        width={3000} 
                        height={1500}
                        style={{ 
                            width: "var(--program-width)", 
                            height: "var(--program-height)" }}
                    ></Image>
                </Link>
                
            )}
        </div>
    </section>
    
  )
}

export default ProgrameAntrenament