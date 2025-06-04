import React from 'react'
import HeadingLP from '../components/Headings/HeadingLP'
import Image from 'next/image'
import "@/app/make-me-fit/globals.css"

const PozeRețete = () => {

    const pozeRetete = [
        "/poze culinare 1.png",
        "/poze culinare 2.png",
        "/poze culinare 3.png",
        "/poze culinare 4.png",
        "/poze culinare 5.png",
        "/poze culinare 6.png",
        "/poze culinare 7.png",
    ]

  return (
    <section>
        <HeadingLP 
            title="Temeri culinare?"
            subtitle="Mai jos ai o galerie foto cu câteva dintre rețetele regăsite în programele de fitness"
        />
        <div   
            className="flex flex-col items-center justify-center"
            style={{
                margin: "0 var(--body-margin)",
                gap: "var(--20px)",
            }}>
            <div
                className="flex"
                style={{
                    gap: "var(--20px)"
                }}>
                {pozeRetete.map((poza, index) => (
                    !(index > 2)
                    ? (
                        <Image 
                            key={index}
                            src={poza} 
                            alt="Poză rețetă"
                            width={493}
                            height={493}
                            className="col-span-4"
                            style={{
                                width: "var(--large-photo-meal-width)",
                                height: "var(--large-photo-meal-width)",
                                objectFit: "cover"
                            }}>
                        </Image>
                    ) : null
                ))}
            </div>
            <div
                className="flex"
                style={{
                    gap: "var(--20px)"
                }}>
                {pozeRetete.map((poza, index) => (
                    index > 2 
                    ? (
                        <Image 
                            key={index}
                            src={poza} 
                            alt="Poză rețetă"
                            width={365}
                            height={365}
                            className="col-span-3"
                            style={{
                                width: "var(---small-photo-meal-width)",
                                height: "var(--small-photo-meal-width)",
                                objectFit: "contain"
                            }}>
                        </Image>
                    ) : null
                ))}
            </div>
        </div>
    </section>
  )
}

export default PozeRețete