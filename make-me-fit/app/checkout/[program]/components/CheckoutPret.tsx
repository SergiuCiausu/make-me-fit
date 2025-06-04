import React from 'react'

const CheckoutPret = async ({ pret }: { pret: number }) => {

  return (
    <section
        className="flex flex-col"
        style={{
            gap: "var(--checkout-program-mb)"
        }}>
        <div>
            <div
                className="flex justify-between">
                <div>
                    <p 
                        className="font-body text-blackColor"
                        style={{
                            fontSize: "var(--p-size)"
                        }}>Subtotal</p>
                </div>
                <div>
                    <p
                        className="font-body font-bold text-blackColor text-right"
                        style={{
                            fontSize: "var(--h5-size)"
                        }}>
                        {`${pret - 19 * pret / 100} lei/ lună`}
                    </p>
                </div>
            </div>
            <div
                className="flex justify-between">
                <div>
                    <p 
                        className="font-body text-blackColor"
                        style={{
                            fontSize: "var(--p-size)"
                        }}>TVA</p>
                </div>
                <div>
                    <p
                        className="font-body font-bold text-blackColor text-right"
                        style={{
                            fontSize: "var(--h5-size)"
                        }}>
                        19%
                    </p>
                </div>
            </div>
        </div>
        <div>
            <div
                className="flex justify-between">
                <div>
                    <p 
                        className="font-body text-blackColor"
                        style={{
                            fontSize: "var(--p-size)"
                        }}>Total</p>
                </div>
                <div>
                    <p
                        className="font-body font-bold text-blackColor text-right"
                        style={{
                            fontSize: "var(--h5-size)"
                        }}>
                        {`${pret} lei/ lună`}
                    </p>
                    <p
                        className="font-body text-blackColor opacity-50 text-right"
                        style={{
                            fontSize: "var(--checkout-p)"
                        }}>
                        Acces 12 săptămâni, apoi 289 lei/ lună
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CheckoutPret