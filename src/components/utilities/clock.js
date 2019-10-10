import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Clock extends React.Component {

	constructor(props) {

		super(props)

		this.state = {
			time: new Date()
		}

	}

	componentDidMount() {

		setInterval(this.update, 1000)

	}

	update = () => {

		this.setState({
			time: new Date()
		})

	};

	render() {

		const h = this.state.time.getHours()
		const m = this.state.time.getMinutes()
		const s = this.state.time.getSeconds()

		return (

			<span className="clock">{(h < 13 ? 12 : h - 12)}:{(m < 10 ? '0' + m : m)}:{(s < 10 ? '0' + s : s)}<br/></span>

		)

	}

}

export default Clock;
