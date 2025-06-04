import Link from 'next/link'
import React from 'react'
import "@/app/make-me-fit/globals.css"

const TestimonialBtn = () => {
  return (
      <Link 
          href="/make-me-fit"
          className="font-bold uppercase select-none text-center make-me-fit-testimonial-btn"
          style={{
              fontSize: "var(--testimonial-lp-btn-size)",
              height: "auto",
              border: "var(--testimonial-lp-btn-border)",
              borderRadius: "var(--testimonial-lp-btn-border-radius)",
              padding: "var(--hero-btn-py-size) var(--hero-btn-px-size)",
              width: "var(--testimonial-lp-btn-width)"
          }}>Vezi transformarea</Link>
  )
}

export default TestimonialBtn