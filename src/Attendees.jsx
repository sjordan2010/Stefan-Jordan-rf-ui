import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export default function Attendees() {
  return (
    <>
        <h2>Attendees</h2>
        <div>
            <Step1 />
            <Step2 />
            <Step3 />
        </div>
    </>
  )
}