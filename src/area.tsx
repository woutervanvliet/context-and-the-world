import * as React from "react";
import { DateTimeContext } from "./world";
import addHours from 'date-fns/add_hours'

export default class Area extends React.Component<{ timezoneOffset: number, children: React.ReactChild }> {

	static contextType = DateTimeContext;
	context!: Date;

	render() {
		const {
			children,
			timezoneOffset,
		} = this.props;

		const date = addHours(this.context, timezoneOffset);

		return (
			<DateTimeContext.Provider value={date}>
				{children}
			</DateTimeContext.Provider>
		)
	}

}
