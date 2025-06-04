import React from 'react'
import HeadingLP from '../components/Headings/HeadingLP'
import "@/app/make-me-fit/globals.css";
import PreviewProgramHeading from './PreviewProgramHeading';
import PreviewProgramPerks from './components/PreviewProgramPerks';
import Image from 'next/image';

const PreviewProgram = () => {

    const programe = [
        {
            header: "Siluetă suplă cu programul",
            program: "Slimhouette",
            durată: "12 săptămâni",
            img: "/slimhouette-banner.png",
            alt: "Program Slimhouette banner",
            perks: [
                "Prepari peste 50 de rețete pentru slăbit și modelarea abdomenului, delicioase și bogate în nutrienți, fără experiență în bucătărie;",
                "Efectuezi corect o gamă largă de exerciții fundamentale pentru tonifierea siluetei, precum abdomenele, ridicările de bazin, plank-urile, genuflexiunile, tracțiunile, flotările și alte 64 de mișcări diferite;",
                "Utilizezi planurile de progresie valabile pentru fiecare exercițiu, prin care să previi accidentările, fiind ușor de urmat indiferent de nivelul tău;",
                "Fii în controlul corpului tău și să previi reapariția stratului de grăsime din zona abdominală chiar și în perioadele stresante din viață."
            ]
        },
        {
            header: "Posterior curbat cu programul",
            program: "Bake A Cake",
            durată: "12 săptămâni",
            img: "/bake-a-cake-banner.png",
            alt: "Program Bake A Cake banner",
            perks: [
                "Prepari 50 de rețete diferite pentru tonifierea mușchilor fesieri, delicioase și bogate în nutrienți, fără experiență în bucătărie;",
                "Efectuezi corect o gamă largă de exerciții fundamentale pentru un fund rotund, precum ridicările de bazin, kickback-urile, îndreptările, flexiile și extensiile de genunchi, extensii lombare și alte 64 de mișcări diferite;",
                "Utilizezi planurile de progresie valabile pentru fiecare exercițiu, prin care să previi accidentările, fiind ușor de urmat indiferent de nivelul tău;",
                "Fii în controlul corpului tău și să previi aplatizarea posteriorului chiar și în perioadele stresante din viață, alături de câteva secrete populare în rândul femeilor pentru accentuarea formelor și sporirea eleganței."
            ]
        },
        {
            header: "Brațe subțiri și delicate cu programul",
            program: "Arm Toner",
            durată: "12 săptămâni",
            img: "/arm-toner-banner.png",
            alt: "Program Arm Toner banner",
            perks: [
                "Prepari 50 de rețete diferite pentru slăbit și subțierea brațelor, delicioase și bogate în nutrienți, fără experiență în bucătărie;",
                "Efectuezi corect o gamă largă de exerciții fundamentale pentru tonifierea brațelor, precum flotările, flexiile și extensiile coatelor, ridicări laterale și alte 27 de mișcări diferite;",
                "Utilizezi planurile de progresie valabile pentru fiecare exercițiu, prin care să previi accidentările, fiind ușor de urmat indiferent de nivelul tău;",
                "Fii în controlul corpului tău și să previi reapariția stratului de grăsime din zona brațelor chiar și în perioadele stresante din viață."
            ]
        },
        {
            header: "Bust tonifiat cu programul",
            program: "Chest Lifter",
            durată: "12 săptămâni",
            img: "/chest-lifter-banner.png",
            alt: "Program Chest Lifter banner",
            perks: [
                "Prepari 50 de rețete diferite pentru slăbit și modelarea abdomenului, delicioase și bogate în nutrienți, fără experiență în bucătărie;",
                "Efectuezi corect o gamă largă de exerciții fundamentale pentru tonifierea siluetei, precum flotările, împinsurile, fluturările, tracțiunile, ramatul și alte 35 de mișcări diferite;",
                "Utilizezi planurile de progresie valabile pentru fiecare exercițiu, prin care să previi accidentările, fiind ușor de urmat indiferent de nivelul tău;",
                "Fii în controlul corpului tău și să previi atrofierea sânilor chiar și în perioadele stresante din viață."
            ]
        },
    ]

  return (
    <section>
        <HeadingLP 
            title="ARUNCĂ O PRIVIRE PRIN FIECARE PROGRAM"
            subtitle="Vezi exact ce cuprinde fiecare pachet înainte să-l cumperi"
        />
        <div
            className="w-full bg-white"
            style={{
                padding: "var(--preview-program-padding) 0"
            }}>
            {programe.map((program, index) => (
                index % 2 ? (
                    <section 
                        key={index}
                        className="grid grid-flow-row grid-cols-2 place-items-center"
                        style={{
                            padding: "0 var(--body-margin)",
                            gap: "var(--preview-program-grid-gap)",
                            marginBottom: `${index === programe.length - 1 ? "0px" : "var(--preview-program-grid-mb)"}`
                        }}>
                        <div>
                            <Image 
                                src={`${program.img}`} 
                                alt={`${program.alt}`}
                                width={3000}
                                height={1500}
                                style={{
                                    width: "var(--program-width)", 
                                    height: "var(--program-height)",
                                    objectFit: "contain"
                                }}>
                            </Image>
                        </div>
                        <div>
                            <PreviewProgramHeading 
                                header={program.header}
                                program={program.program}
                                durată={program.durată}
                            />
                            <PreviewProgramPerks perks={program.perks}/>
                        </div>
                    </section>
                ) : (
                    <section 
                        key={index}
                        className="grid grid-flow-row grid-cols-2 place-items-center"
                        style={{
                            padding: "0 var(--body-margin)",
                            gap: "var(--preview-program-grid-gap)",
                            marginBottom: "var(--preview-program-grid-mb)"
                        }}>
                        <div>
                            <PreviewProgramHeading 
                                header={program.header}
                                program={program.program}
                                durată={program.durată}
                            />
                            <PreviewProgramPerks perks={program.perks}/>
                        </div>
                        <div>
                            <Image 
                                src={`${program.img}`} 
                                alt={`${program.alt}`}
                                width={3000}
                                height={1500}
                                style={{
                                    width: "var(--program-width)", 
                                    height: "var(--program-height)",
                                    objectFit: "contain",
                                }}>
                            </Image>
                        </div>
                    </section>
                )
            ))}
        </div>
    </section>
    

  )
}

export default PreviewProgram