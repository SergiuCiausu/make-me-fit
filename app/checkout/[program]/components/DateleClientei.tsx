
import React from 'react'
import CheckoutHeading from './CheckoutHeading'
import Input from './Input'
import "@/app/make-me-fit/globals.css"
import CheckoutCheckBoxes from './CheckoutCheckBoxes'

interface InputConfig {
    titlu: string,
    descriere: string,
    categorie: string,
    specs:
        {
            type: string,
            name: string,
            placeholder: string,
            inputmode?: "search" | "email" | "tel" | "text" | "url" | "none" | "numeric" | "decimal" | undefined,
            pattern?: string,
            autocomplete?: string,
            maxLength?: number,
            max?: number
        }[]
}

const DateleClientei = () => {

    const inputs : InputConfig[] = [
        {
            titlu: "Datele clientei",
            descriere: "",
            categorie: "dateClienta",
            specs: [
                {
                    type: "text",
                    name: "nume",
                    placeholder: "Nume",
                },
                {
                    type: "text",
                    name: "prenume",
                    placeholder: "Prenume"
                },
                {
                    type: "email",
                    name: "email",
                    placeholder: "Email"
                },
            ]
        },
        {
            titlu: "Detalii plată",
            descriere: "Toate tranzacțiile sunt securizate și criptate. ",
            categorie: "detaliiPlata",
            specs: [
                {
                    type: "tel",
                    name: "numarCard",
                    placeholder: "Numărul cardului",
                    inputmode: "numeric",
                    pattern: "[0-9\s]{13,19}",
                    autocomplete: "cc-number",
                    maxLength: 19
                },
                {
                    type: "text",
                    name: "CVV",
                    placeholder: "CVV / CVC",
                    inputmode: "numeric",
                    maxLength: 4
                },
                {
                    type: "text",
                    name: "lunaExpirare",
                    placeholder: "Luna expirarii",
                    inputmode: "numeric",
                    pattern: "[0-9]*",
                    max: 12,
                    maxLength: 2,
                },
                {
                    type: "text",
                    name: "anExpirare",
                    placeholder: "Anul expirarii",
                    inputmode: "numeric",
                    pattern: "[0-9]*",
                    maxLength: 2,
                },
                {
                    type: "text",
                    name: "numeCard",
                    placeholder: "Numele de pe card"
                }
            ]
        }
    ]

  return (
    <section
        className="flex flex-col justify-center">
        <div>
            <div
                className="flex flex-col"
                style={{
                    gap: "var(--input-section-my)"
                }}>
                <div
                    className="flex flex-col"
                    style={{
                        gap: "var(--input-section-my)"
                    }}>
                    {inputs.map((categorie, index) => (
                        <fieldset
                            key={index}>
                            <div>
                                <CheckoutHeading title={categorie.titlu} subtitle={categorie.descriere}/>
                                <div
                                    className="flex flex-wrap"
                                    style={{
                                        gap: "var(--input-gap)",
                                    }}>
                                    {categorie.specs.map((input, index) => (
                                        <div
                                            key={index}
                                            className="flex">   
                                            <Input inputConfig={input} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </fieldset>
                    ))}
                </div>
                <CheckoutCheckBoxes />
            </div>
        </div>
    </section>
  )
}

export default DateleClientei