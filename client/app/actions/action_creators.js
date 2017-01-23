export function addingItem() {
	console.log("Adding item")
	return {
		type: 'ADDING'
	}
}

export function deleteItem(item) {
	console.log("Deleting item")
	return {
		type: 'DELETE',
		item
	}
}
