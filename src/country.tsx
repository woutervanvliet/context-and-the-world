import * as React from 'react';
import Clock from './clock'

export default function Country(props: { name: string}) {
	return (
		<div className="country">
			<h1>{props.name}</h1>
			<Clock />
		</div>
	)
}
