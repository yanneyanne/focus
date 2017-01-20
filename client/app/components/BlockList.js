import React, { Component } from 'react'

export default class BlockList extends Component {
	getListItems() {
		return this.props.listItems || []	
	}
	isAddingItem() {
		return this.props.isAddingItem
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
				{this.isAddingItem() ? 
					<input type="text" /> :
					<button onClick={this.props.addingItem}>+</button>
				}
			</div>
		)	
	}
}
