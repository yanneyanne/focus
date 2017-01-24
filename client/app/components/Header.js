import React, { Component } from 'react'
import styles from '../assets/styles/Header.css'

export default class Header extends Component {
	render() {
		return (
			<div className={styles.header}>
				Logo
				<button>?</button>
			</div>
		)	
	}
}
