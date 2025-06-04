import React from 'react'
import HeadingLP from '../components/Headings/HeadingLP'
import Testimonial from './components/Testimonial'
import "@/app/make-me-fit/globals.css"

const TestimonialeFinal = () => {

    const pozeTestimoniale = [
        "/Testimonial 1.jpg",
        "/Testimonial 2.jpg",
        "/Testimonial 3.jpg",
        "/Testimonial 4.jpg",
        "/Testimonial 5.jpg",
        "/Testimonial 6.jpg",
        "/Testimonial 7.jpg",
        "/Testimonial 8.jpg",
    ]

  return (
    <section>
        <HeadingLP 
        title="TRANSFORMĂ-ȚI CU UȘURINȚĂ CORPUL"
        subtitle="Programele noastre de fitness au ajutat sute de femei de toate vârstele să se uite de fiecare dată cu mare entuziasm în oglindă"
        />
        <div 
            className="flex flex-col items-center"
            style={{
                gap: "var(--program-gap)"
            }}>
            <div 
                className="flex"
                style={{
                    gap: "var(--program-gap)"
                }}>
                {pozeTestimoniale.map((poza, index) => (
                    !(index > 3) 
                    ? <Testimonial key={index} src={poza}/>
                    : null
                ))}
            </div>
            <div 
                className="flex"
                style={{
                    gap: "var(--program-gap)"
                }}>
            {pozeTestimoniale.map((poza, index) => (
                    index > 3
                    ? <Testimonial key={index} src={poza}/>
                    : null
                ))}
            </div>
        </div>
    </section>
  )
}

export default TestimonialeFinal