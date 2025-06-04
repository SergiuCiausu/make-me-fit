import React from 'react'

const TestimonialDescriere = ({ descriere }: { descriere: string}) => {

    const [primaParte, aDouaParte] = descriere.split(/,(.+)/);

  return (
    <p 
        className="make-me-fit-heading-lp-p"
        style={{
            fontSize: "var(--p-size)"
        }}>
        <span className="font-bold make-me-fit-descriere-testimonial-span">{primaParte}</span>, {aDouaParte}
    </p>
  )
}

export default TestimonialDescriere