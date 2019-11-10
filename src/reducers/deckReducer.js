import copySlots from "../utilities/copySlots"
import initialState from "./initialState"

import {ADD_TO_DECK, DRAW_2_CARDS, DRAW_CARD} from "../actions"

/*
 * Adds a card to the deck
 */
function addCardToDeck(state, action) {
	if (action.type !== ADD_TO_DECK || !action.card) {
		return state
	}
	let deck = state.deck.slice(0)
	deck.push(action.card)
	deck = randomizeDeck(deck)
	return Object.assign({}, state, { deck })
}

function randomizeDeck(deck) {
	if (!deck || !(deck instanceof Array) || deck.length === 1) {
		return deck
	}
	const length = deck.length
	for (let i = 0; i < length; i++ ) {
		const rand = Math.floor(Math.random() * Math.floor(length))
		if (rand === i) {
			i--
			continue
		}
		const temp = deck[rand]
		deck[rand] = deck[i]
		deck[i] = temp
	}
	return deck
}

/*
 * Draws a card from the deck to a monster slot
 */
function drawCard(state, action) {
	if (action.type !== DRAW_CARD) {
		return state
	}
	const finalState = moveCards(state)

	return Object.assign({}, state, finalState)
}

/*
 * Draws 2 cards from the deck to two monster slots
 */
function draw2Cards(state, action) {
	if (action.type !== DRAW_2_CARDS) {
		return state
	}
	const finalState = moveCards(moveCards(state))

	return Object.assign({}, finalState)
}

/*
 * Moves the top card of the deck to the next available monster slot
 */
function moveCards(state) {
	if (!state.deck || state.deck === [] || !state.monsterSlots) {
		return state
	}

	let deck = state.deck.slice(0)
	let monsterSlots = copySlots(state.monsterSlots)
	for (let slot in monsterSlots) {
		if (monsterSlots[slot] && monsterSlots[slot].card === null) {
			monsterSlots[slot].card = deck.pop()
			break
		}
	}
	return Object.assign({}, state, { deck, monsterSlots })
}

/*
 * The deck reducer function
 */
export default function deckReducer(state = initialState, action) {
	switch(action.type) {
	case ADD_TO_DECK:
		return addCardToDeck(state, action)
	case DRAW_CARD:
		return drawCard(state, action)
	case DRAW_2_CARDS:
		return draw2Cards(state, action)
	default:
		return state
	}
}