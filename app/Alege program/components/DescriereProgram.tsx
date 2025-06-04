import React from 'react'
import "@/app/make-me-fit/globals.css"

const DescriereProgram = ({ description }: { description: string}) => {
  return (
    <p 
        className="make-me-fit-descriere-program text-center opacity-50"
        style={{
            fontSize: "var(--p-size)",
            marginBottom: "var(--program-description-mb)"
        }}>
            {description}
    </p>
  )
}

export default DescriereProgram