import copySlots from "../utilities/copySlots"
import initialState from "./initialState"
import { MOVE_CARD } from "../actions"

/*
 * Moves card from one monster slot to another
 */
function moveCardBetweenSlots(state, action) {
	if (action.type !== MOVE_CARD
        || !action.slot
        || !action.nextSlot
        || !state.monsterSlots[action.slot]
        || !state.monsterSlots[action.nextSlot]
        || !state.monsterSlots[action.slot].card
        || state.monsterSlots[action.nextSlot].card) {
		return state
	}
	const monsterSlots = copySlots(state.monsterSlots)
	const card = monsterSlots[action.slot].card
	monsterSlots[action.slot].card = null
	monsterSlots[action.nextSlot].card = card

	return Object.assign({}, state, { monsterSlots })
}

/*
 * The monster slots reducer functions
 */
export default function monsterSlotsReducer(state = initialState, action) {
	switch(action.type) {
	case MOVE_CARD:
		return moveCardBetweenSlots(state, action)
	default:
		return state
	}
}