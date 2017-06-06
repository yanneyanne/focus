export function toggleAdding() {
	return {
		type: 'TOGGLE_ADDING'
	}
}

export function addItem(item) {
	return {
		type: 'ADD_ITEM',
		item
	}
}
export function deleteItem(item) {
	console.log("Deleting item")
	return {
		type: 'DELETE',
		item
	}
}
