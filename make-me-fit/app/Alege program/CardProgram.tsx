import React from 'react';
import "@/app/make-me-fit/globals.css";
import NumeProgram from './components/NumeProgram';
import DescriereProgram from './components/DescriereProgram';
import BeneficiiProgram from './components/BeneficiiProgram';
import PretProgram from './components/PretProgram';
import InscriereProgram from './components/InscriereProgram';

interface benefits {
    text: string
}

const CardProgram = ({ name, description, benefits, isHighlighted, pret, descrierePret, pretVechi, bonus }: 
    { 
        name: string, 
        description: string, 
        benefits: benefits[], 
        isHighlighted: boolean,
        pret: string ,
        descrierePret: string,
        pretVechi: string | undefined,
        bonus: string | undefined
    }) => {

  return (
    <div 
        className="w-full flex flex-col items-center justify-between"
        style={{
            backgroundColor: "var(--make-me-fit-neutral-color)",
            border: `${isHighlighted ? "var(--highlighted-program-card-border)" : "var(--program-card-border)"}`,
            borderRadius: "15px",
            boxShadow: "var(--program-card-shadow)",
            padding: "var(--program-card-py) var(--program-card-px)"
        }}> 
            <div>
                <NumeProgram name={name}/>
                <DescriereProgram description={description}/>
                <BeneficiiProgram benefits={benefits} />
            </div>
            <div>
                <PretProgram
                    pret={pret}
                    descrierePret={descrierePret}
                    pretVechi={pretVechi}
                    bonus={bonus}
                />
                <InscriereProgram 
                    name={name}
                    isHighlighted={isHighlighted}
                />
            </div>
    </div>
  )
}

export default CardProgram