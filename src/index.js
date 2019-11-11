import { addCardToDeck } from "./actions"
import { Card } from "./models"
import { createStore } from "redux"
import Disk from "./components/disk.jsx"
import { render } from "./utilities/vdom"
import scrumDisk from "./reducers"

const store = createStore(scrumDisk)
const card1 = new Card("New Card Title 1", "New Card Desc 1")
const card2 = new Card("New Card Title 2", "New Card Desc 2")

store.dispatch(addCardToDeck(card1))
store.dispatch(addCardToDeck(card2))

const renderDisk = () => {
	document.body.innerHTML = ""
	document.body.appendChild(render(Disk({ store })))
}
const unsubscribe = store.subscribe(() => {
	renderDisk()
})

window.onload = () => {
	renderDisk()
}

window.onunload = () => {
	unsubscribe()
}
