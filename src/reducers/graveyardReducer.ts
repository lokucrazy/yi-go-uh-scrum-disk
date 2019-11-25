import copySlots from '../utilities/copySlots'
import { initialState, State } from './initialState'
import { SEND_TO_GRAVEYARD, SendGraveyardAction } from '../actions'

function sendCardToGraveyard(state: State, action: SendGraveyardAction): State {
	if (action.type !== SEND_TO_GRAVEYARD
        || !action.slot
        || !state.monsterSlots[action.slot]
        || !state.monsterSlots[action.slot].card) {
		return state
	}
	const monsterSlots = copySlots(state.monsterSlots)
	const card = monsterSlots[action.slot].card
	const graveyard = state.graveyard.slice(0)
	monsterSlots[action.slot].card = null
	graveyard.push(card)

	return Object.assign({}, state, { monsterSlots, graveyard })
}

export default function graveyardReducer(state = initialState, action: SendGraveyardAction): State {
	switch (action.type) {
	case SEND_TO_GRAVEYARD:
		return sendCardToGraveyard(state, action)
	default:
		return state
	}
}