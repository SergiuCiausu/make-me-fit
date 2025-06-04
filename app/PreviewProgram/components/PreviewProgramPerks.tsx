import Checkmark from '@/app/make-me-fit/components/Checkmark'
import React from 'react'

const PreviewProgramPerks = ({ perks }: { perks: Array<string> }) => {
  return (
    <div
        className="flex flex-col"
        style={{
            gap: "var(--preview-program-perks-mb)"
        }}>

        <p className="make-me-fit-heading-lp-p" style={{ fontSize: "var(--p-size)" }}>
            În acest program te vom învăța să:
        </p>
        {perks.map((perk, index) => (
            <div
                key={index}
                className="flex">
                    <Checkmark src="/Checkmark icon web.png" />
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

export default PreviewProgramPerks