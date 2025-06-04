import React from 'react'
import TestimonialImagine from './TestimonialImagine'
import TestimonialHeader from './TestimonialHeader'
import TestimonialDescriere from './TestimonialDescriere'
import TestimonialBtn from './TestimonialBtn'

const Testimonial = ({ src, nume, varsta, descriere }: 
    { 
        src: string, 
        nume: string,
        varsta: number,
        descriere: string
    }) => {
  return (
    <div
        className="flex flex-col"
        style={{
            gap: "var(--testimonial-lp-flex-gap)"
        }}>
        <TestimonialImagine 
            src={src}/>
        <div
            className="flex flex-col"
            style={{
                gap: "var(--testimonial-lp-text-gap)"
            }}>
        <TestimonialHeader 
            nume={nume}
            varsta={varsta}/>
        <TestimonialDescriere 
            descriere={descriere}/>
        </div>
        <TestimonialBtn />
    </div>
  )
}

export default Testimonial