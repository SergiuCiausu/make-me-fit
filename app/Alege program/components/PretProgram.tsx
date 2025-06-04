import React from 'react'

const PretProgram = ({ pret, descrierePret, pretVechi, bonus }: 
    { 
        pret: string, 
        descrierePret: string,
        pretVechi: string | undefined,
        bonus: string | undefined
    }) => {
  return (
    <div 
        className="flex flex-col items-center justify-center"
        style={{
            margin: "var(--program-card-pret-mx) 0"
        }}>
        {pretVechi 
        ?     
            <div
                className="w-full flex items-center justify-evenly">
                <h5
                    className="make-me-fit-nume-program font-bold line-through"
                    style={{
                        fontSize: "var(--h5-size)"
                    }}>
                        {pretVechi}</h5>
                <h4 
                className="make-me-fit-pret-program font-bold text-center"
                style={{
                    fontSize: "var(--h4-size)"
                }}>
                    {`${pret} + `}
                </h4>
                <h4
                    className="make-me-fit-bonus-program font-bold text-center"
                    style={{
                        fontSize: "var(--h4-size)"
                    }}>
                        {bonus}
                </h4>
            </div>
            
            
        :   
            <h4 
                className="make-me-fit-pret-program-normal font-bold text-center"
                style={{
                    fontSize: "var(--h4-size)"
                }}>
                    {pret}
            </h4>
        }
        
        <p 
            className="make-me-fit-descriere-pret-program opacity-50 text-center"
            style={{
                fontSize: "var(--descriere-pret-size)"
            }}>
                {descrierePret}
        </p>
    </div>
  )
}

export default PretProgram