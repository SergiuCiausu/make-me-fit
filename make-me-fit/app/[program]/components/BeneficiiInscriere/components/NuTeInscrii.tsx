import React from 'react'
import BeneficiiInscriereHeading from './BeneficiiInscriereHeading'
import Perks from './Perks'

const NuTeInscrii = ({ markType }: { markType: "checkmark" | "crossmark"}) => {

  const beneficii = [
        "Nu vei învăța să gătești mese sănătoase și rămâi cu impresia că dieta este menită să fie fadă și neplăcută",
        "Nu vei învăța să-ți reglezi apetitul pe baza a ceea ce simți și mereu te vei simți prost când mănânci mai mult",
        "Nu vei învăța să te antrenezi corect și te vei simți inconfortabilă cu exercițiile de slăbit și tonifiere, ceea ce te va face să renunți la progresul tău",
        "Nu vei învăța mișcări de bază pentru sănătatea ta și vei fi mereu copleșită de aparenta complexitate a exercițiilor fizice",
        "Nu vei învăța să-ți faci timp pentru sport și zilele tale vor părea nesfârșite, iar energia ta nu va putea face față",
        "Nu vei învăța să fii consecventă cu planurile tale și să reușești să-ți atingi obiectivele de fitness",
        "Nu vei face parte dintr-o comunitate de oameni care se ajută și se încurajează la nevoie",
        "Nu vei obține șansa să înveți lucruri noi și utile de la antrenori de fitness de top"
    ]

  return (
    <section
      className="flex flex-col justify-center"
      style={{
        gap: "var(--inscriere-gap)",
        padding: "var(--inscriere-py) var(--inscriere-px)",
        border: "var(--inscriere-crossmark-border)",
        borderRadius: "var(--inscriere-border-radius)",
        height: "var(--inscriere-height)"
      }}>
        <BeneficiiInscriereHeading inscriere={false}/>
        <Perks markType={markType} perks={beneficii}/>
    </section>
  )
}

export default NuTeInscrii