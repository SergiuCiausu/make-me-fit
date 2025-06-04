import React from 'react'
import HeadingLP from '../components/Headings/HeadingLP'
import HeroBtn from '../components/Hero/HeroBtn'

const CTAFinal = () => {
  return (
    <section
        className="flex flex-col items-center">
        <HeadingLP 
            title="Corpul mult visat te așteaptă"
            subtitle="E timpul să-ți câștigi fericirea prin metodele de antrenament și de alimentație care-ți asigură reușita"
        />
        <HeroBtn text="Alege program" color="primary" mb={true}/>
    </section>
    
  )
}

export default CTAFinal