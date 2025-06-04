import React from 'react'
import "@/app/make-me-fit/globals.css"

const PreviewProgramHeading = (
    { header, program, durată }: 
    { header: string, program: string, durată: string }) => {
  return (
    <div 
        className="flex flex-col"
        style={{
            gap: 0,
            marginBottom: "var(--preview-program-heading-mb)"
        }}>
            <h4
                className="make-me-fit-preview-program-h4 font-bold uppercase"
                style={{
                    fontSize: "var(--h4-size)"
                }}>
                    {header} <span className="make-me-fit-preview-program-h4-span">{program}</span>
            </h4>
            <p 
                className="make-me-fit-heading-lp-p">
                Durată: <span className="text-primaryColor">{durată}</span>
            </p>
    </div>
  )
}

export default PreviewProgramHeading