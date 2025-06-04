'use client';

import React, { useState } from 'react'
import "@/app/make-me-fit/globals.css"
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { FaQuestionCircle } from 'react-icons/fa';

interface InputConfig {
    type: string,
    name: string,
    placeholder: string,
    inputmode?: "search" | "email" | "tel" | "text" | "url" | "none" | "numeric" | "decimal" | undefined,
    pattern?: string,
    autocomplete?: string,
    maxLength?: number,
    max?: number
}

const Input = ({ inputConfig }: { inputConfig: InputConfig }) => {

    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [hasTyped, setHasTyped] = useState(false);

    const handleValidation = (value: string) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (value.trim() === "" && hasTyped) {
            setErrorMessage("Să nu uiți să completezi și aici!! :D")
            return;
        }

        if (inputConfig.type === "email" && !emailRegex.test(value) && hasTyped) {
            setErrorMessage("Pare că nu ți-ai scris bine email-ul ;-;")
            return;
        }

        if (inputConfig.pattern && !new RegExp(inputConfig.pattern).test(value) && hasTyped) {
            setErrorMessage("Of, nu cred că ai scris ce trebuia aici :(")
            return;
        }

        if (inputConfig.maxLength && value.length > inputConfig.maxLength) {
            setErrorMessage("Hei-hei, ai scris prea mult aici -.-")
            return;
        }

        if(inputConfig.max && Number(value) > Number(inputConfig.max)) {
            setErrorMessage("Ești sigură? Sunt doar 12 luni într-un an 🤔")
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!hasTyped) setHasTyped(true);
        setInputValue(event.target.value);
    };

    const handleBlur = () => {
        handleValidation(inputValue);
    }

  return (
    <div
        style={{
            position: "relative"
        }}>
        <input 
            type={inputConfig.type}
            name={inputConfig.name}
            value={inputValue}
            placeholder={inputConfig.placeholder}
            inputMode={inputConfig.inputmode}
            pattern={inputConfig.pattern}
            autoComplete={inputConfig.autocomplete}
            maxLength={inputConfig.maxLength}
            max={inputConfig.max}
            onChange={handleChange}
            onBlur={handleBlur}
            className="font-body font-normal bg-white text-blackColor placeholder-blackColor placeholder-opacity-50"
            style={{
                fontSize: "var(--p-size)",
                border: "var(--input-border)",
                borderRadius: "var(--input-border-radius)",
                padding: "var(--input-py) var(--input-pr) var(--input-py) var(--input-pl)",
            }}
            required 
            data-pattern-validate={!!inputConfig.pattern}/>
            {inputConfig.name === "CVV" && 
            <div
                style={{
                    position: "absolute",
                    top: "40%",
                    right: "var(--input-pl)",
                    scale: "1.5",
                    color: "var(--black-color)",
                }}>
                <FaQuestionCircle 
                    data-tip data-tooltip-id="cvvTip"
                />
                <Tooltip 
                    id="cvvTip" 
                    content={"CVV / CVC este codul de 3 sau 4 cifre de pe spatele cardului"}
                    className="font-body text-neutralColor"
                    style={{
                        fontSize: "var(--tooltip-font-size)",
                        width: "var(--tooltip-width)",
                        borderRadius: "var(--tooltip-border-radius)",
                        backgroundColor: "var(--black-color)"
                    }}>
                </Tooltip>
            </div>
            }
            {errorMessage &&
            <p className="text-red-500 font-body">{errorMessage}</p>}
    </div>
    
  )
}

export default Input