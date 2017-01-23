import {List, Map} from 'immutable'

function defaultFunction() {
	console.log("Calling default function in reducer")
}

export default function(state = Map(), action) {
	switch (action.type) {
		case 'DEFAULT':
			return defaultFunction()
	}
	return state
	
}
