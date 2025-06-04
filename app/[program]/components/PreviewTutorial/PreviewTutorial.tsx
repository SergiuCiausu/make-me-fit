import HeadingLP from '@/app/make-me-fit/components/Headings/HeadingLP'
import Tutorial from '@/app/make-me-fit/PreviewTutorial/Tutorial/Tutorial'
import React from 'react'

const PreviewTutorial = () => {
  return (
    <section>
        <HeadingLP 
            title="PREVIEW CU UNUL DINTRE VIDEOCLIPURILE DIN PROGRAM"
            subtitle="Urmărește clipul de mai jos ca să prinzi gustul calității materialelor incluse în program."
        />
        <Tutorial />
    </section>
  )
}

export default PreviewTutorial