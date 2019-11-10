import { Card } from "./models"
import { createStore } from "redux"
import scrumDisk from "./reducers"

import { addCardToDeck, draw2Cards, drawCard, sendCardToGraveyard } from "./actions"

const store = createStore(scrumDisk)
const unsubscribe = store.subscribe(() => console.log(store.getState()))
const card1 = new Card("New Card Title 1", "New Card Desc 1")
const card2 = new Card("New Card Title 2", "New Card Desc 2")

store.dispatch(addCardToDeck(card1))
store.dispatch(addCardToDeck(card2))
store.dispatch(drawCard())
store.dispatch(drawCard())
store.dispatch(sendCardToGraveyard("monster1", card1))
store.dispatch(addCardToDeck(card1))
store.dispatch(addCardToDeck(card2))
store.dispatch(draw2Cards())

unsubscribe()
