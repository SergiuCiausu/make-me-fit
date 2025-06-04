import HeadingLP from '@/app/make-me-fit/components/Headings/HeadingLP'
import React from 'react'
import NuTeInscrii from './components/NuTeInscrii'
import TeInscrii from './components/TeInscrii'
import Image from 'next/image'
import HeroBtn from '@/app/make-me-fit/components/Hero/HeroBtn'

const BeneficiiInscriere = () => {
  return (
    <section>
        <HeadingLP 
            title="NU ȘTII EXACT DACĂ TE VA AJUTA ACEST PROGRAM?"
            subtitle="Citește lista de mai jos cu lucrurile utile pe care programul Slimhouette ți le va aduce în viața ta, în comparație cu aspectele neplăcute pe care le va îndepărta."
        />
        <div
          className="flex flex-col items-center"
          style={{
            margin: "0 var(--inscriere-body-margin)",
            gap: "var(--inscriere-gap)"
          }}>
          <div
            className="flex items-center"
            style={{
              gap: "var(--program-grid-gap)",
            }}>
              <div
                className="flex-1">
                  <TeInscrii markType="checkmark"/>
              </div>
              <div
                className="flex-1">
                  <NuTeInscrii markType="crossmark"/>
              </div>
          </div>
          <div
            className="flex flex-col items-center"
            style={{
              gap: "var(--inscriere-gap)"
            }}>
            <div
              className="flex flex-col items-center"
              style={{
                gap: "var(--inscriere-p-gap)"
              }}>
                <div
                  className="flex items-center">
                    <Image
                      src="/Exclamation mark icon.png"
                      alt="Attention icon"
                      width={24}
                      height={24}
                      style={{
                        width: "auto",
                        height: "auto",
                        marginRight: "var(--checkmark-mr)"
                      }}></Image>
                      <p
                        className="make-me-fit-heading-lp-p text-center"
                        style={{
                          fontSize: "var(--p-size)"
                        }}>
                        Iar, în final, dacă vei alege să nu te înscrii, <span className="font-bold">va dura mult mai mult până ce te vei putea bucura de realizările tale</span>.
                      </p>
                </div>
                <p
                  className="make-me-fit-heading-lp-p text-center"
                  style={{
                    fontSize: "var(--p-size)"
                  }}>
                  Dar, ce binee! Poți alege să te înscrii!!! 
                </p>
            </div>
            <HeroBtn text="Înscrie-te în program" color="accent" mb={false}/>
          </div>
        </div>
    </section>
  )
}

export default BeneficiiInscriere