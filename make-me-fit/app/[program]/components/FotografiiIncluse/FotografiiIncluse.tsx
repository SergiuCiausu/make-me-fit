import HeadingLP from '@/app/make-me-fit/components/Headings/HeadingLP'
import Image from 'next/image'
import React from 'react'

const FotografiiIncluse = () => {

    const pozeRetete = [
        "/poze culinare 1.png",
        "/poze culinare 2.png",
        "/poze culinare 3.png",
        "/poze culinare 4.png",
        "/poze culinare 5.png",
    ]

  return (
    <section>
        <HeadingLP 
            title="FOTOGRAFII CU PREPARATELE INCLUSE ÎN PROGRAM"
            subtitle="Privește ce specialități, aparent complexe -- dar ușor de făcut -- vei învăța să prepari!"/>
        <div 
            className="grid auto-rows-fr place-items-center"
            style={{
                gap: "var(--program-grid-gap)"
            }}>
            <div className="grid grid-cols-2"
            style={{
                columnGap: "var(--program-grid-gap)"
            }}>
                <Image
                    src={pozeRetete[0]}
                    alt="Poza rețetă"
                    width={1000}
                    height={1000}
                    style={{
                        width: "var(--poza-large-width)",
                        height: "var(--poza-large-height)",
                        objectFit: "cover"
                    }}></Image>
                <Image
                    src={pozeRetete[1]}
                    alt="Poza rețetă"
                    width={1000}
                    height={1000}
                    style={{
                        width: "var(--poza-large-width)",
                        height: "var(--poza-large-height)",
                        objectFit: "cover"
                    }}></Image>
            </div>
            <div 
                className="grid grid-cols-3"
                style={{
                    columnGap: "var(--program-grid-gap)"
                }}>
                    <Image
                        src={pozeRetete[2]}
                        alt="Poza rețetă"
                        width={1000}
                        height={1000}
                        style={{
                            width: "var(--poza-small-size)",
                            height: "var(--poza-small-size)",
                            objectFit: "cover"
                        }}></Image>
                    <Image
                        src={pozeRetete[3]}
                        alt="Poza rețetă"
                        width={1000}
                        height={1000}
                        style={{
                            width: "var(--poza-small-size)",
                            height: "var(--poza-small-size)",
                            objectFit: "cover"
                        }}></Image>
                    <Image
                        src={pozeRetete[4]}
                        alt="Poza rețetă"
                        width={1000}
                        height={1000}
                        style={{
                            width: "var(--poza-small-size)",
                            height: "var(--poza-small-size)",
                            objectFit: "cover"
                        }}></Image>
            </div>
        </div>
    </section>
  )
}

export default FotografiiIncluse