import Image from 'next/image'
import React from 'react'
import "@/app/make-me-fit/globals.css"

const Testimonial = ({ src }: { src: string }) => {
  return (
    <Image
    src={src}
    alt="Poză testimonial.png"
    width={365}
    height={365}
    style={{
        width: "var(--small-photo-meal-width)",
        height: "var(--small-photo-meal-width)",
        objectFit: "cover",
    }}>
    </Image>
  )
}

export default Testimonial