import { ADD_TO_DECK, PLAY_CARD } from "../actions";
import initialState from "./initialState";
import { Card } from "../models";

/*
 * Adds a card to the deck
 */
function addCardToDeck(state, action) {
    if (action.type !== ADD_TO_DECK) {
        return state;
    }
    let deck = state.deck;
    deck.push(action.card);

    return Object.assign({}, state, { deck });
}

/*
 * Moves a card from the deck to the next available monster slot
 */
function moveCardToMonsterSlots(state, action) {
    if (action.type !== PLAY_CARD) {
        return state;
    }
    let deck = state.deck;
    let monsterSlots = state.monsterSlots;
    for (let slot in monsterSlots) {
        if (monsterSlots.hasOwnProperty(slot) && !(monsterSlots[slot].card instanceof Card)) {
            monsterSlots[slot].card = deck.pop();
            break;
        }
    }

    return Object.assign({}, state, { deck, monsterSlots });
}


/*
 * The deck reducer function
 */
export default function deckReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_DECK:
            return addCardToDeck(state, action);
        case PLAY_CARD:
            return moveCardToMonsterSlots(state, action);
        default:
            return state;
    }
}