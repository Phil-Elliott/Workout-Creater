const workout = document.querySelector('.workout')
const sets = document.querySelector('.sets')
const addButton = document.querySelector('.add')
const list = document.querySelector('.list')
const doneButton = document.querySelector('.doneButton')
const DeleteButton = document.querySelector('.delete')

function createListItem() {
	//Makes the user use both inputs
	if (workout.value !== '' && sets.value !== '') {
	const li = document.createElement('li')
	const doneButton = document.createElement('button')
	const deleteButton = document.createElement('button')
		//Creating workout and text in buttons
		li.innerHTML = `${workout.value} | ${sets.value} Sets`
		doneButton.innerHTML = "Done"
		deleteButton.innerHTML = "Delete"
		//adding classes to creat events
		doneButton.classList.add('doneButton')
		deleteButton.classList.add('delete')
		//adding eveything to the ol
		list.appendChild(li)
		li.appendChild(doneButton)
		li.appendChild(deleteButton)
		//reseting values to nothing 
		workout.value = ''
		sets.value = ''
		//crossing out the workout
		doneButton.addEventListener('click', () => {
		li.classList.add('done')
	})
		//deleting the workout
		deleteButton.addEventListener('click', () => {
		list.removeChild(li)
	})
	}
}
//calling the function above with a click
addButton.addEventListener('click', createListItem)

workout.addEventListener("keyup", function keyPress(){
	if(event.keyCode === 13){
		createListItem()
	}
})

sets.addEventListener("keyup", function keyPress(){
	if(event.keyCode === 13){
		createListItem()
	}
})




