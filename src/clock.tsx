import * as React from 'react';
import format from 'date-fns/format'
import {DateTimeContext} from "./world";

export default function Clock() {
	return (
		<DateTimeContext.Consumer>
			{(date) => (
				<div className="clock">
					<div className="clock-segment">
						{format(date, 'HH')}
					</div>
					<div className="clock-colon">:</div>
					<div className="clock-segment">
						{format(date, 'mm')}
					</div>
					<div className="clock-colon">:</div>
					<div className="clock-segment">
						{format(date, 'ss')}
					</div>
					<div className="clock-colon small">.</div>
					<div className="clock-segment small">
						{format(date, 'SSS')}
					</div>
				</div>
			)}
		</DateTimeContext.Consumer>
	)
}
