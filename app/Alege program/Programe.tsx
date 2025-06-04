import React from 'react'
import CardProgram from './CardProgram'
import prisma from "@/prisma/client";

interface ProgrameDB {
  nume: string,
  descriere: string,
  pret: number
}

const Programe = async () => {
    const programeDB: ProgrameDB[] = await prisma.program.findMany();

    const programs = [

    {
          name: programeDB[0].nume,
          description: programeDB[0].descriere,
          benefits: [
            "50+ rețete delicioase și sănătoase",
            "70+ tutoriale video pas cu pas pentru fiecare exercițiu din program",
            "35 progresii pentru orice nivel de forță",
            "Program flexibil de antrenament și alimentație",
            "40+ antrenamente gata de efectuat în sala de fitness, acasă, sau în aer liber, explicate video",
            "Recomandări pentru eliminarea pielii lăsate după slăbire (dacă este cazul)",
            "Ghid instructiv pentru prevenirea accidentărilor",
            "Ghid instructiv cu recomandări după finalizarea programului",
            "Acces la articole și sesiuni online de învățare săptămânale (opționale)",
            "Acces la comunitate pentru sprijin și motivație",
            "Tot ce ai nevoie pentru a începe un regim plăcut, a-ți găsi timp pentru mișcare și a te ține de treabă pe toată durata programului"
          ],
          isHighlighted: false,
          pret: `${programeDB[0].pret} lei`,
          descrierePret: "Acces 12 săptămâni, după care 249 lei/ lună"
        },
        {
          name: programeDB[1].nume,
          description: programeDB[1].descriere,
          benefits: [
            "50+ rețete delicioase și sănătoase",
            "40+ tutoriale video pas cu pas pentru fiecare exercițiu din program",
            "20 progresii pentru orice nivel de forță",
            "Program flexibil de antrenament și alimentație",
            "20+ antrenamente gata de efectuat în sala de fitness, acasă, sau în aer liber, explicate video",
            "Recomandări de echipament pentru cele mai rapide rezultate",
            "Recomandări pentru amplificarea efectului de lifting (dacă este cazul)",
            "Ghid instructiv pentru prevenirea accidentărilor",
            "Ghid instructiv cu recomandări după finalizarea programului",
            "Acces la articole și sesiuni online de învățare săptămânale (opționale)",
            "Acces la comunitate pentru sprijin și motivație",
            "Tot ce ai nevoie pentru a începe un regim plăcut, a-ți găsi timp pentru mișcare și a te ține de treabă pe toată durata programului"
          ],
          isHighlighted: true,
          pretVechi: "399 lei",
          pret: `${programeDB[1].pret} lei`,
          bonus: "CADOU",
          descrierePret: 'Acces 12 săptămâni, după care 419 lei/ lună CADOU E-book-ul „Controlul fără stres al apetitului și păstrarea neîncetată a perseverenței”'
        },
              
        {
          name: programeDB[2].nume,
          description: programeDB[2].descriere,
          benefits: [
            "50+ rețete delicioase și sănătoase",
            "100+ tutoriale video pas cu pas pentru fiecare exercițiu din program",
            "35 progresii pentru orice nivel de forță",
            "Program flexibil de antrenament și alimentație",
            "40+ antrenamente gata de efectuat în sala de fitness explicate video",
            "20+ antrenamente de mobilitate și Yoga explicate video",
            "Recomandări de echipament pentru cele mai rapide rezultate",
            "Recomandări pentru eliminarea vergeturilor și a celulitei (dacă este cazul)",
            "Ghid instructiv pentru prevenirea accidentărilor",
            "Ghid instructiv cu recomandări după finalizarea programului",
            "Acces la articole și sesiuni online de învățare săptămânale (opționale)",
            "Acces la comunitate pentru sprijin și motivație",
            "Tot ce ai nevoie pentru a începe un regim plăcut, a-ți găsi timp pentru mișcare și a te ține de treabă pe toată durata programului"
          ],
          isHighlighted: false,
          pret: `${programeDB[2].pret} lei`,
          descrierePret: "Acces 12 săptămâni, după care 214 lei/ lună"
        },
        { 
          name: programeDB[3].nume, 
          description: programeDB[3].descriere,
          benefits: [
            "50+ rețete delicioase și sănătoase",
            "70+ tutoriale video pas cu pas pentru fiecare exercițiu din program",
            "35 progresii pentru orice nivel de forță",
            "Program flexibil de antrenament și alimentație",
            "40+ antrenamente gata de efectuat în sala de fitness, acasă, sau în aer liber, explicate video",
            "Recomandări de echipament pentru cele mai rapide rezultate",
            "Recomandări pentru eliminarea pielii lăsate după slăbire (dacă este cazul)",
            "Ghid instructiv pentru prevenirea accidentărilor", 
            "Ghid instructiv cu recomandări după finalizarea programului",
            "Acces la articole și sesiuni online de învățare săptămânale (opționale)",
            "Acces la comunitate pentru sprijin și motivație",
            "Tot ce ai nevoie pentru a începe un regim plăcut, a-ți găsi timp pentru mișcare și a te ține de treabă pe toată durata programului"
          ],
          isHighlighted: false,
          pret: `${programeDB[3].pret} lei `,
          descrierePret: "Acces 12 săptămâni, după care 289 lei/ lună"
        },
      ]
      

  return (
    <div 
          className="grid grid-flow-row grid-cols-4"
          style={{
            gap: "var(--program-gap)",
            height: "auto",
            margin: "0 var(--body-margin)"
          }}>
          {programs.flatMap((program, index) =>
            <CardProgram 
              key={index}
              name={program.name}
              description={program.description}
              benefits={program.benefits.map(benefit => (
                {
                  text: benefit
                }
              ))}
              isHighlighted={program.isHighlighted}
              pret={program.pret}
              descrierePret={program.descrierePret}
              pretVechi = {program.isHighlighted ? program.pretVechi : undefined}
              bonus = {program.isHighlighted ? program.bonus : undefined}
            />
          )} 
    </div>
  )
}

export default Programe