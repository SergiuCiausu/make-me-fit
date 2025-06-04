import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import Testimonial from './TestimonialLP/Testimonial'
import HeadingLP from '@/app/make-me-fit/components/Headings/HeadingLP'

interface TestimonialType {
    id: number,
    poza: string,
    nume: string,
    varsta: number,
    descriere: string,
    programId: number
}

const Testimoniale = async ({ program } : { program: string }) => {

    const result = await prisma.program.findUnique({
        where: {
            nume: program
        }
    })

    if(!result) {
        notFound();
    }

    const testimoniale = await prisma.testimonial.findMany({
        where: {
            programId: result.id
        }
    })
    
  return (
    <section>
        <HeadingLP 
            title="TRANSFORMĂRI FRECVENTE ALE CLIENTELOR"
            subtitle="Iată câteva exemple de femei care și-au atins obiectivele de fitness și care reprezintă rezultate la care oricine se poate aștepta urmând programul Chest Lifter"
        />
        <div
            className="grid grid-flow-row place-items-center grid-cols-3"
            style={{
                gap: "var(--testimonial-lp-grid-gap)",
                margin: "0 var(--body-margin)"
            }}>
            {testimoniale.map((testimonial: TestimonialType, index: number) => (
                index < 3
                    ?   
                        <Testimonial 
                            key={index}
                            src={testimonial.poza}
                            nume={testimonial.nume}
                            varsta={testimonial.varsta}
                            descriere={testimonial.descriere}
                        />
                    : ""
            ))}
        </div>
        
    </section>
  )
}

export default Testimoniale