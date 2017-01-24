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

export default function(state = Map(), action) {
	switch (action.type) {
		case 'TOGGLE_ADDING':
			return toggleAdding(state)
		case 'DELETE':
			return defaultFunction(state)
	}
	return state
	
}
