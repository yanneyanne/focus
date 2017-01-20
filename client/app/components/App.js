import React, { Component } from 'react'
import styles from './App.css';
import Header from './Header'
import BlockList from './BlockList'
import Timer from './Timer'
import ButtonRow from './ButtonRow'
import {List} from 'immutable'

const dummyItems = List.of('www.facebook.com', 'www.youtube.com')

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<BlockList listItems={dummyItems} />
				<Timer />
				<ButtonRow />
			</div>
		)
	}
}
