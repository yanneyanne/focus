import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/action_creators'

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
						<button onClick={() => this.props.deleteItem(item)}>
							X
						</button>
					</div>
				)}
				{this.isAddingItem() ? 
					<input type="text" /> :
					<button onClick={() => this.props.addingItem() }>+</button>
				}
			</div>
		)	
	}
}

function mapStateToProps(state) {
	return {
		//listItems: state.getIn(['blockList','blockees']),
		//isAddingItem: state.get('isAddingItem')
	}
}

export const BlockListContainer = connect(mapStateToProps, actionCreators)(BlockList)
