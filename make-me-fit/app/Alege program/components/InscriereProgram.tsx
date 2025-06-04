import React from 'react'
import Link from 'next/link'
import "@/app/make-me-fit/globals.css"

const InscriereProgram = ({ name, isHighlighted }: { name: string, isHighlighted: boolean }) => {
  return (
    <div 
        className="flex flex-col items-center justify-center"
        style={{
            gap: "var(--program-card-inscriere-btn-gap)"
        }}>
            <button
                className=
                {`font-bold uppercase make-me-fit-btn-program${isHighlighted ? "-highlighted" : ""} cursor-pointer`}
                style={{
                    fontSize: "var(--program-card-inscriere-btn-size)",
                    border: "var(--program-card-inscriere-btn-border)",
                    borderRadius: "var(--program-card-inscriere-btn-border-radius)",
                    boxShadow: "var(--program-card-inscriere-btn-shadow)",
                    padding: "var(--program-card-inscriere-btn-py) var(--program-card-inscriere-btn-px)"
                }}>
                    Înscrie-te
            </button>
            <Link 
                href={`/${name}`}
                className="font-body text-blackColor opacity-50 underline text-center"
                style={{
                    fontSize: "var(--p-size)"
                }}>
                    Aș vrea mai multe detalii întâi
            </Link>
    </div>
  )
}

export default InscriereProgram