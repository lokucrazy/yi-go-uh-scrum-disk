import copySlots from '../utilities/copySlots'
import { Card } from '../models'
import { State, initialState, MonsterSlots } from './initialState'
import { 
	ADD_TO_DECK, DRAW_CARD, DRAW_2_CARDS, AddCardAction, DrawCardAction, Draw2CardsAction, MoveCardAction, SendGraveyardAction
} from '../actions'


function randomize(deck: Array<Card>): Array<Card> {
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

function moveCards(state: State): State {
	if (!state.deck || state.deck === [] || !state.monsterSlots) {
		return state
	}

	const deck: Card[] = state.deck.slice(0)
	const monsterSlots: MonsterSlots = copySlots(state.monsterSlots)
	if (deck.length === 0) return state
	for (const slot in monsterSlots) {
		if (monsterSlots[slot] && monsterSlots[slot].card === null) {
			monsterSlots[slot].card = deck.pop()
			break
		}
	}
	return Object.assign({}, state, { deck, monsterSlots })
}

function addCardToDeck(state: State, action: AddCardAction): State {
	if (action.type !== ADD_TO_DECK || !action.card) {
		return state
	}
	let deck = state.deck.slice(0)
	deck.push(action.card)
	deck = randomize(deck)
	return Object.assign({}, state, { deck })
}

function drawCard(state: State, action: DrawCardAction): State {
	if (action.type !== DRAW_CARD) {
		return state
	}
	const finalState = moveCards(state)

	return Object.assign({}, state, finalState)
}

function draw2Cards(state: State, action: Draw2CardsAction): State {
	if (action.type !== DRAW_2_CARDS) {
		return state
	}
	const finalState = moveCards(moveCards(state))

	return Object.assign({}, finalState)
}

export default function deckReducer(state: State = initialState,
	action: AddCardAction | SendGraveyardAction | DrawCardAction | Draw2CardsAction | MoveCardAction): State {
	switch(action.type) {
	case ADD_TO_DECK:
		return addCardToDeck(state, action as AddCardAction)
	case DRAW_CARD:
		return drawCard(state, action as DrawCardAction)
	case DRAW_2_CARDS:
		return draw2Cards(state, action as Draw2CardsAction)
	default:
		return state
	}
}