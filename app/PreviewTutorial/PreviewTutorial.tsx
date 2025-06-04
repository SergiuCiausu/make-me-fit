import React from 'react'
import HeadingLP from '../components/Headings/HeadingLP'
import Tutorial from './Tutorial/Tutorial'

const PreviewTutorial = () => {
  return (
    <section>
        <HeadingLP 
            title="TUTORIALE VIDEO CU TOATE EXPLICAȚIILE NECESARE"
            subtitle="Urmărește clipul de mai jos, care este un tutorial pentru unul dintre exercițiile din programul de fitness Bake A Cake"
        />
        <Tutorial />
    </section>
  )
}

export default PreviewTutorial