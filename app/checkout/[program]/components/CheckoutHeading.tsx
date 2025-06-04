import Link from 'next/link'
import React from 'react'

const CheckoutHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => {

  return (
    <div>
        <h3 
            className="font-header font-bold uppercase text-white"
            style={{
                fontSize: "var(--h3-size)", 
                textShadow: "var(--heading-lp-text-stroke), var(--heading-lp-text-shadow)", 
            }}>
            {title}
        </h3>
        <p
            className="font-body text-blackColor"
            style={{
                fontSize: "var(--p-size)",
                marginBottom: "var(--input-header-mb)"
            }}>
                { subtitle ? (
                    subtitle
                ) : (
                    <>
                        Consimțământul datelor este în concordanță cu{" "}
                        <Link href="/" className="text-accentColor2 underline underline-offset-2">Politica de confidențialitate</Link>
                    </>
                )}
        </p>
    </div>
  )
}

export default CheckoutHeading