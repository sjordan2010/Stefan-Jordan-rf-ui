import React from 'react';
import { Outlet } from 'react-router-dom';

export default function SelectionContainer({ event, setEventInfo }) {

	return (
		<Outlet context={[event, setEventInfo]} />
	)
}