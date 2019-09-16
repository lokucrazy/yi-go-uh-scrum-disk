import { SEND_TO_GRAVEYARD } from "../actions";
import initialState from "./initialState";

/*
 * Sends a card from its slot to the graveyard
 */
function sendCardToGraveyard(state, action) {
    if (action.type !== SEND_TO_GRAVEYARD) {
        return state;
    }
    let monsterSlots = state.monsterSlots;
    let card = state.monsterSlots[action.slot].card;
    let graveyard = state.graveyard;
    monsterSlots[action.slot].card = null;
    graveyard.push(card);

    return Object.assign({}, state, { monsterSlots, graveyard });
}

/*
 * The graveyard reducer function
 */
export default function graveyardReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_TO_GRAVEYARD:
            return sendCardToGraveyard(state, action);
        default:
            return state;
    }
}