import React, { Component } from 'react'
import styles from './App.css';
import Header from './Header'
import { BlockListContainer } from './BlockList'
import Timer from './Timer'
import ButtonRow from './ButtonRow'
import {List} from 'immutable'

const dummyItems = List.of('www.facebook.com', 'www.youtube.com')

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<BlockListContainer listItems={dummyItems} />
				<Timer />
				<ButtonRow />
			</div>
		)
	}
}
