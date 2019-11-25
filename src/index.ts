import { Card } from './models'
import { createStore } from 'redux'
import Disk from './components/disk'
import { render } from './utilities/vdom'
import ScrumDisk from './reducers/index'
import { addCardToDeck, drawCard } from './actions'

const store = createStore(ScrumDisk)
const card1 = new Card('New Card Title 1', 'New Card Desc 1')
const card2 = new Card('New Card Title 2', 'New Card Desc 2')

store.dispatch(addCardToDeck(card1))
store.dispatch(addCardToDeck(card2))

const renderDisk = (): void => {
	document.body.innerHTML = ''
	const state = store.getState()
	const dispatchAddCard = (card: Card): any => store.dispatch(addCardToDeck(card))
	const dispatchDrawCard = (): any => store.dispatch(drawCard())
	document.body.appendChild(render(Disk({ state, dispatchAddCard, dispatchDrawCard })))
}
const unsubscribe = store.subscribe(() => {
	renderDisk()
})

window.onload = (): void => {
	renderDisk()
}

window.onunload = (): void => {
	unsubscribe()
}
