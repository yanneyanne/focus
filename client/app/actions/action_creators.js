export function toggleAdding() {
	return {
		type: 'TOGGLE_ADDING'
	}
}

export function deleteItem(item) {
	console.log("Deleting item")
	return {
		type: 'DELETE',
		item
	}
}
