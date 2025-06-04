import React from 'react'
import Image from 'next/image'
import "@/app/make-me-fit/globals.css"

const Checkmark = ({ src }: { src: string}) => {
  return (
    <Image 
        src={`${src}`}
        alt="bifă" 
        width={16}
        height={16}
        style={{ 
            marginRight: "var(--checkmark-mr)",
            width: "var(--checkmark-width)",
            height: "var(--checkmark-height)",
            marginTop: "var(--checkmark-mt)"
        }}>
    </Image> 
  )
}

export default Checkmark