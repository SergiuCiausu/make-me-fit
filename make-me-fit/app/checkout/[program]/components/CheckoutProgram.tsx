import React from 'react'
import Image from 'next/image';
import CheckoutPret from './CheckoutPret';

const CheckoutProgram = async ({ nume, descriere, img, pret }: { nume: string, descriere: string, img: string, pret: number }) => {
    
  return (
    <section
        className="bg-white flex flex-col justify-between"
        style={{
            position: "absolute",
            top: 0,
            width: "35%",
            height: "85%",
            padding: "var(--checkout-program-details-p)",
            paddingTop: 0,
            marginTop: "calc(var(--input-section-py) + (var(--nav-py) * 2) + var(--nav-link-size) * 2)"
        }}>
        <div>
            <div
                className="flex items-center"
                style={{
                    gap: "var(--checkout-gap)",
                    marginBottom: "var(--checkout-program-mb)"
                }}>
                <div
                    className="w-[20%]">
                    <Image
                        src={img.replace("-lp.png", "") + ".png"}
                        alt="Imagine program"
                        width={300}
                        height={200}>
                    </Image>
                </div>
                <div
                    className="flex flex-col justify-center">
                    <h5
                        className="font-body text-blackColor"
                        style={{
                            fontSize: "var(--h5-size)"
                        }}>
                        {`Programul de fitness ${nume.split("-").map(cuv => cuv.charAt(0).toUpperCase() + cuv.slice(1)).join(" ")}`}
                    </h5>
                    <p 
                        className="font-body text-blackColor opacity-50"
                        style={{
                            fontSize: "var(--checkout-p)"
                        }}>
                        {descriere}
                    </p>
                </div>
            </div>  
            <CheckoutPret pret={pret} />
        </div>
        <div
            className="flex flex-col items-center"
            style={{
                gap: "var(--checkout-secured-gap)"
            }}>
            <div
                className="flex items-center"
                style={{
                    gap: "var(--checkout-lock-icon-gap)"
                }}>
                <Image
                    src="/Lock icon.png"
                    alt="Lock icon"
                    width={200}
                    height={200}
                    style={{
                        width: "var(--checkout-lock-icon-size)",
                        opacity: "50%",
                        paddingBottom: "3px"
                    }}></Image>
                    <p
                        className="font-body text-blackColor opacity-50"
                        style={{
                            fontSize: "var(--checkout-p)"
                        }}>
                        Plată securizată și criptată.
                    </p>
            </div>
            <button 
            type="submit"
            className="bg-primaryColor font-body font-bold text-neutralColor hover:bg-primaryColorHover transition duration-150 ease-in-out"
            style={{
                width: "100%",
                padding: "var(--hero-btn-py-size) var(--hero-btn-px-size)",
                borderRadius: "var(--program-card-inscriere-btn-border-radius)",
                fontSize: "var(--hero-btn-text-size)"
            }}>
                Finalizează plata
            </button>
        </div>
    </section>
  )
}

export default CheckoutProgram