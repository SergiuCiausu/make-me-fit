import React from 'react'
import Image from 'next/image'
import "@/app/make-me-fit/globals.css";

interface Perks {
    src: string,
    alt: string,
    width: number,
    height: number,
    text: string
}

const Perks = ({ imgs }: { imgs: Perks[]}) => {

  return (
    <div 
        className="flex justify-between"
        style = {{ margin: "var(--perk-margin-t) var(--perk-margin-x) var(--perk-margin-b)" }}>
            {imgs.map(
                (img, index) => 
                    (<div 
                        key={index} 
                        className="flex flex-col justify-center items-center"
                        style = {{ width: "var(--perk-width)" }}>
                        <Image 
                            src={img.src} 
                            alt={img.alt} 
                            width={img.width} 
                            height={img.height} 
                            style={{ 
                                marginBottom: "var(--perk-icon-mb)" }}>
                        </Image>
                        <h5 
                            className="uppercase font-bold perk-make-me-fit-h5 select-none"
                            style={{ 
                                fontSize: "var(--h5-size)" }}>
                        {img.text}</h5>
                    </div>)
            )}
    </div>
  )
}

export default Perks