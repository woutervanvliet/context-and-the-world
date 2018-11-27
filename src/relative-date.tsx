import React from 'react'
import { DateTimeContext } from "./world";
import distanceInWords from 'date-fns/distance_in_words'

const startup = new Date();

export default class RelativeDate extends React.PureComponent {
	static contextType = DateTimeContext;
	context!: Date;

	render() {
		return (
			<div className="relativeDate">
				{distanceInWords(
					startup,
					this.context,
					{
						includeSeconds: true,
						addSuffix: false,
					}
				)} since startup
			</div>
		)
	}
}
