import Checkmark from '@/app/make-me-fit/components/Checkmark'
import React from 'react'

const TestimonialHeader = ({nume, varsta}: { nume: string, varsta: number}) => {
  return (
    <div
        className="flex items-center">
        <Checkmark src="/Checkmark icon web.png" />
        <h4
            className="make-me-fit-preview-program-h4 font-bold"
            style={{
                fontSize: "var(--h4-size)"
            }}>
            {nume}, {varsta > 20 ? `${varsta} de ani` : `${varsta} ani`}
        </h4>
    </div>
  )
}

export default TestimonialHeader