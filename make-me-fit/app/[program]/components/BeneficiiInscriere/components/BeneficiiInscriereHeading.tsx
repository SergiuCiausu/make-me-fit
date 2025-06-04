import React from 'react'

const BeneficiiInscriereHeading = ({ inscriere }: { inscriere: boolean}) => {

  const headingText = inscriere
  ? 'Dacă <span class="text-accentColor">te înscrii</span> în program'
  : 'Dacă <span class="text-primaryColor">nu te înscrii</span> în program';

  return (
    <div>
        <h5
            className="perk-make-me-fit-h5 uppercase font-bold"
            style={{
                fontSize: "var(--h5-size)"
            }}
            dangerouslySetInnerHTML={{
              __html: headingText
            }}>
        </h5>
    </div>
  )
}

export default BeneficiiInscriereHeading