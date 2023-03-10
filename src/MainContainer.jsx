import React from 'react'
import SelectionContainer from './SelectionContainer'
import Title from './Title'

export default function MainContainer({ event, setEventInfo, formattedDate }) {
  return (
    <div className="main-container">
        <Title event={event} setEventInfo={setEventInfo} formattedDate={formattedDate} />
        <SelectionContainer event={event} setEventInfo={setEventInfo} />
    </div>
  )
}