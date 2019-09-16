import { MOVE_CARD } from "../actions";
import initialState from "./initialState";

/*
 * Moves card from one monster slot to another
 */
function moveCardBetweenSlots(state, action) {
    if (action.type !== MOVE_CARD) {
        return state;
    }
    let monsterSlots = state.monsterSlots;
    let card = state.monsterSlots[action.slot].card;
    if (monsterSlots.hasOwnProperty(action.slot) && monsterSlots.hasOwnProperty(action.nextSlot)) {
        monsterSlots[action.slot].card = null;
        monsterSlots[action.nextSlot].card = card;
    }

    return Object.assign({}, state, { monsterSlots });
}

/*
 * The monster slots reducer functions
 */
export default function monsterSlotsReducer(state = initialState, action) {
    switch(action.type) {
        case MOVE_CARD:
            return moveCardBetweenSlots(state, action);
        default:
            return state;
    }
}