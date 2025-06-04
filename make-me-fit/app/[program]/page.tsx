import { notFound } from 'next/navigation'
import React from 'react'
import prisma from "@/prisma/client"
import HeroSection from '../components/Hero/HeroSection'
import Perks from '../components/Perks/Perks'
import Testimoniale from './components/Testimoniale/Testimoniale'
import BeneficiiInscriere from './components/BeneficiiInscriere/BeneficiiInscriere'
import CumTeAjuta from './components/CumTeAjuta/CumTeAjuta'
import FotografiiIncluse from './components/FotografiiIncluse/FotografiiIncluse'
import PreviewTutorial from './components/PreviewTutorial/PreviewTutorial'
import TestimonialeFinal from '../Testimoniale/TestimonialeFinal'
import CTAFinal from '../CTAFinal/CTAFinal'

export default async function Page(params: { params : Promise<{ program: string }>}) {

    const perksImg = [
      {
        src: "/Kettlebell icon 2.png",
        alt: "Ilustrație antrenamente flexibile",
        width: 122,
        height: 119,
        text: "Antrenamente flexibile oriunde vrei"
      },
      {
        src: "/Egg icon.png",
        alt: "Ilustrație mese delicioase",
        width: 147,
        height: 119,
        text: "Mese delicioase ușor de preparat"
      },
      {
        src: "/Progress icon.png",
        alt: "Ilustrație progres",
        width: 142,
        height: 119,
        text: "Progresii adaptate oricărui nivel"
      },
    ]
    const { program } = await params.params;
    const result = await prisma.program.findUnique({where: {nume: program}});
    const numeProgram = result?.nume.split("-").map((cuv : string) => cuv.charAt(0).toUpperCase() + cuv.slice(1)).join(' ');

    if(!result) {
        notFound();
    }

  return (
    <div>
      <HeroSection 
      nume={`${numeProgram}`}
      infoAccentText={`Programul ${numeProgram}`}
      header={`${result.header}`}
      heroP={`${result.heroP}`}
      textBtn={`${result.textBtn}`}
      img={`${result.img}`}
      color="primary"/>

      <Perks imgs={perksImg}/>
      <div
        className="flex flex-col justify-center"
        style={{
          gap: "var(--section-mb)"
        }}>
        <Testimoniale program={program}/>
        <BeneficiiInscriere />
        <CumTeAjuta />
        <FotografiiIncluse />
        <PreviewTutorial />
        <TestimonialeFinal />
        <CTAFinal />
      </div>
      
    </div>
  )
}