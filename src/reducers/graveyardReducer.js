import copySlots from "../utilities/copySlots"
import initialState from "./initialState"
import { SEND_TO_GRAVEYARD } from "../actions"

/*
 * Sends a card from its slot to the graveyard
 */
function sendCardToGraveyard(state, action) {
	if (action.type !== SEND_TO_GRAVEYARD
        || !action.slot
        || !state.monsterSlots[action.slot]
        || !state.monsterSlots[action.slot].card) {
		return state
	}
	let monsterSlots = copySlots(state.monsterSlots)
	let card = monsterSlots[action.slot].card
	let graveyard = state.graveyard.slice(0)
	monsterSlots[action.slot].card = null
	graveyard.push(card)

	return Object.assign({}, state, { monsterSlots, graveyard })
}

/*
 * The graveyard reducer function
 */
export default function graveyardReducer(state = initialState, action) {
	switch (action.type) {
	case SEND_TO_GRAVEYARD:
		return sendCardToGraveyard(state, action)
	default:
		return state
	}
}