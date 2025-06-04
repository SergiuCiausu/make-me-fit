import React from 'react'
import "@/app/make-me-fit/globals.css"

const NumeProgram = ({ name }: { name: string }) => {
  return (
    <h4
        className="make-me-fit-nume-program font-bold uppercase text-center"
        style={{
            fontSize: "var(--h4-size)",
            marginBottom: "var(--program-name-mb)"
        }}>
            {name}
    </h4>
  )
}

export default NumeProgram