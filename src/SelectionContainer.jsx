import React from 'react'
import { Outlet } from 'react-router-dom'

export default function SelectionContainer({ event }) {
	return (
		<Outlet context={[event]} />
	)
}