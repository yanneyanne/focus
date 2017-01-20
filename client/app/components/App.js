import React, { Component } from 'react'
import styles from './App.css';
import Header from './Header'
import List from './List'
import Timer from './Timer'
import ButtonRow from './ButtonRow'

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<List />
				<Timer />
				<ButtonRow />
			</div>
		)
	}
}
