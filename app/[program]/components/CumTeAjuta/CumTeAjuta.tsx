import HeadingLP from '@/app/make-me-fit/components/Headings/HeadingLP'
import React from 'react'
import CumAjuta from './components/CumAjuta'

const CumTeAjuta = () => {
  return (
    <section
        className="flex flex-col items-center"
        style={{
            margin: "0 var(--body-margin)",
            gap: "var(--cum-te-ajuta-mb)"
        }}>
        <HeadingLP 
            title="CUM TE VA AJUTA, MAI EXACT, ACEST PROGRAM?"
            subtitle="Alături de câteva preview-uri cu conținutul programului!"
        />
        <CumAjuta index={0} tip="retete"/>
        <CumAjuta index={1} tip="exercitii"/>
        <CumAjuta index={2} tip="progres"/>
        <CumAjuta index={3} tip="control"/>
    </section>
  )
}

export default CumTeAjuta