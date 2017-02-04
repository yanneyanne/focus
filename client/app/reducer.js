import {List, Map} from 'immutable'

function defaultFunction(state) {
	console.log("Calling default function in reducer")
	return state
}

function toggleAdding(state) {
	const status = state.getIn(['blockList', 'isAddingItem'], undefined) 	
	var nextStatus = true
	if (status===true) {
		nextStatus = false
	}
	return state.setIn(['blockList', 'isAddingItem'], nextStatus)
}

function addItem(state, item) {
	const blockees = state.getIn(['blockList', 'blockees'], List())
	if (!blockees.includes(item)) {
		const newBlockees = blockees.push(item)
		console.log(newBlockees.toJS())
		return state.setIn(['blockList', 'blockees'], newBlockees)
	}
	return state
}

function deleteItem(state, item) {
	const blockees = state.getIn(['blockList', 'blockees'], List())
	const index = blockees.indexOf(item)
	if (index>=0) {
		const newBlockees = blockees.delete(index)
		console.log(newBlockees.toJS())
		return state.setIn(['blockList', 'blockees'], newBlockees)
	}
	return state
}

export default function(state = Map(), action) {
	switch (action.type) {
		case 'TOGGLE_ADDING':
			return toggleAdding(state)
		case 'DELETE':
			return deleteItem(state, action.item)
		case 'ADD_ITEM':
			return addItem(state, action.item)
	}
	return state
	
}
