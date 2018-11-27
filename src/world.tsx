import * as React from 'react';

export const DateTimeContext = React.createContext(new Date());

export default class World extends React.PureComponent<{ }, { date: Date, updates: number }> {

	updateTimeTimeout: any;
	updateTime: () => void;

	constructor(props: { }) {
		super(props);

		this.state = {
			date: new Date(),
			updates: 0,
		};

		this.updateTime = () => {
			this.setState((state) => ({
				date: new Date(),
				updates: state.updates + 1,
			}));

			this.updateTimeTimeout = window.requestAnimationFrame(this.updateTime)
		};

		this.updateTimeTimeout = window.requestAnimationFrame(this.updateTime)
	}

	componentWillUnmount(): void {
		window.cancelAnimationFrame(this.updateTimeTimeout)
	}

	render() {
		const {
			children,
		} = this.props;

		const {
			date,
			updates,
		} = this.state;

		return (
			<DateTimeContext.Provider value={date}>
				<div className="world">
					<div className="world-counter">
						<h3>UPDATES</h3>
						<span>{updates}</span>
					</div>
					<div className="world-content">
						{children}
					</div>
				</div>
			</DateTimeContext.Provider>
		)
	}

}
