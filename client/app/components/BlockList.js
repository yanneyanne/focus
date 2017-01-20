import React, { Component } from 'react'

export default class BlockList extends Component {
	getListItems() {
		return this.props.listItems || []	
	}
	render() {
		return (
			<div>
				{this.getListItems().map(item =>
					<div key={item}>
						{item}
						<button>X</button>
					</div>
				)}
				<button>+</button>
			</div>
		)	
	}
}
