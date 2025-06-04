'use client';

import React, { useState } from 'react'
import "@/app/make-me-fit/globals.css"
import Image from 'next/image';

const CheckoutCheckBoxes = () => {

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <section
      className="flex flex-col justify-center"
      style={{
        gap: "var(--checkbox-gap)"
      }}>
        <fieldset>
          <div
            className="flex items-center"
            style={{
              gap: "var(--checkbox-gap)"
            }}>
            <label 
              className="flex cursor-pointer items-center relative"
              style={{
                width: "var(--checkbox-size)",
                height: "var(--checkbox-size)",
              }}>
                <input 
                  type="checkbox" 
                  id="customCheckBox"
                  className="hidden"
                  onChange={() => setIsChecked1(!isChecked1)}
                  required/>
                    <div 
                      className={`flex items-center justify-center 
                                ${isChecked1 ? "bg-primaryColor" : ""}`}
                      style={{
                        width: "var(--checkbox-size)",
                        height: "var(--checkbox-size)",
                        border: "var(--checkout-checkbox-border)",
                        borderRadius: "var(--checkout-checkbox-border-radius)"
                      }}>
                        {isChecked1
                        ? 
                          <Image
                            src="/Checkmark icon white.png"
                            alt="Checkmark icon"
                            width={100}
                            height={100}
                            className="select-none"
                            style={{
                              position: "absolute",
                              width: "var(--checkbox-checkmark-size)",
                              height: "var(--checkbox-checkmark-size)",
                            }}></Image> 
                        : "" }
                    </div>
            </label>
            <p
              className="font-body text-blackColor"
              style={{
                fontSize: "var(--p-size)"
              }}>
              Sunt de acord cu <span className="text-accentColor2 underline underline-offset-2">Termenii și condițiile</span> Make Me Fit
            </p>
          </div>
        </fieldset>
        <fieldset>
        <div
            className="flex items-center"
            style={{
              gap: "var(--checkbox-gap)"
            }}>
            <label 
              className="flex cursor-pointer items-center relative"
              style={{
                width: "var(--checkbox-size)",
                height: "var(--checkbox-size)",
              }}>
                <input 
                  type="checkbox" 
                  id="customCheckBox"
                  className="hidden"
                  onChange={() => setIsChecked2(!isChecked2)}
                />
                  <div 
                    className={`flex items-center justify-center 
                              ${isChecked2 ? "bg-primaryColor" : ""}`}
                    style={{
                      width: "var(--checkbox-size)",
                      height: "var(--checkbox-size)",
                      border: "var(--checkout-checkbox-border)",
                      borderRadius: "var(--checkout-checkbox-border-radius)"
                    }}>
                      {isChecked2 
                      ? 
                        <Image
                          src="/Checkmark icon white.png"
                          alt="Checkmark icon"
                          width={100}
                          height={100}
                          className="select-none"
                          style={{
                            position: "absolute",
                            width: "var(--checkbox-checkmark-size)",
                            height: "var(--checkbox-checkmark-size)",
                          }}></Image> 
                      : "" }
                  </div>
            </label>
            <p
              className="font-body text-blackColor"
              style={{
                fontSize: "var(--p-size)"
              }}>
              Sunt de acord să primesc email-uri de la Make Me Fit cu noutăți și informații educaționale
            </p>
          </div>
        </fieldset>
    </section>
  )
}

export default CheckoutCheckBoxes