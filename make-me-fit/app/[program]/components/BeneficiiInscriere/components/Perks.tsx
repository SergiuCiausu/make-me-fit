import Checkmark from '@/app/make-me-fit/components/Checkmark'
import React from 'react'

const Perks = ({ markType, perks }: { markType: "checkmark" | "crossmark", perks: string[]}) => {

    const src = `${markType === "checkmark" ? "/Checkmark icon web.png" : "/Crossmark icon web.png"}`

  return (
    <div>
        {perks.map((perk, index) => (
            <div
                key={index}
                className="flex"
                style={{
                    marginBottom: "var(--benefit-mb)"
                }}
                >
                    <Checkmark src={src} />
                    <p 
                        className="make-me-fit-heading-lp-p"
                        style={{
                            fontSize: "var(--p-size)"
                        }}>
                        {perk}
                    </p>
            </div>
        ))}
        
    </div>
  )
}

export default Perks