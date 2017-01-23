import {List, Map} from 'immutable'

function defaultFunction(state) {
	console.log("Calling default function in reducer")
	return state
}

export default function(state = Map(), action) {
	switch (action.type) {
		case 'ADDING':
			return defaultFunction(state)
		case 'DELETE':
			return defaultFunction(state)
	}
	return state
	
}
