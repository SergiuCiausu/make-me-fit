import React from 'react'
import BeneficiiInscriereHeading from './BeneficiiInscriereHeading'
import Perks from './Perks'

const TeInscrii = ({ markType }: { markType: "checkmark" | "crossmark" }) => {

    const beneficii = [
        "Înveți să gătești rapid, pas cu pas, rețete super delicioase și sănătoase",
        "Înveți să mănânci intuitiv fără să te mai temi de îngrășare",
        "Înveți să te antrenezi corect în sală și să eviți accidentările",
        "Înveți să faci mișcări de bază esențiale pentru bunăstarea corpului tău",
        "Înveți să-ți faci mereu timp de antrenamente fără să ți se pară stresant",
        "Înveți să-ți alegi echipamentul potrivit pentru rezultate rapide și de durată",
        "Înveți să faci progres constant pentru a fi cu frumusețea la zi :)",
        "Faci parte dintr-o comunitate de oameni care se ajută și se încurajează la nevoie",
        "Obții șansa să înveți constant de la antrenori experți în domeniu",
        "Te simți mândră și încrezătoare de transformarea pe care o vei reuși"
    ]

  return (
    <section
      className="flex flex-col justify-center"
      style={{
        gap: "var(--inscriere-gap)",
        padding: "var(--inscriere-py) var(--inscriere-px)",
        border: "var(--inscriere-checkmark-border)",
        borderRadius: "var(--inscriere-border-radius)",
        height: "var(--inscriere-height)"
      }}>
        <BeneficiiInscriereHeading inscriere={true}/>
        <Perks markType={markType} perks={beneficii}/>
    </section>
  )
}

export default TeInscrii