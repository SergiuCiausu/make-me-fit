import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TestimonialImagine = ({ src }: { src: string}) => {
  return (
    <div
        style={{
            width: "auto",
            height: "auto",
            position: "relative"
        }}>
        <Image
        src={src}
        alt="Poză testimonial"
        width={493}
        height={616}
        style={{
            width: "auto",
            height: "auto"
        }}
        ></Image>
        <Link 
            className="w-full h-full"
            href="/"
            style={{
                position: "absolute",
                top: "0",
                width: "100%",
                height: "100%",
                cursor: "pointer",
                zIndex: "10"
            }}></Link>
    </div>
    
  )
}

export default TestimonialImagine