import {List, Map} from 'immutable'

function defaultFunction() {
	console.log("Calling default function in reducer")
}

export default function(state = Map(), action) {
	switch (action.type) {
		case 'ADDING':
			return defaultFunction()
		case 'DELETE':
			return defaultFunction()
	}
	return state
	
}
