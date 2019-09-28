import {ADD_TO_DECK, DRAW_2_CARDS, DRAW_CARD} from "../actions";
import initialState from "./initialState";

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
 * Draws a card from the deck to a monster slot
 */
function drawCard(state, action) {
    if (action.type !== DRAW_CARD) {
        return state;
    }
    const finalState = moveCards(state);

    return Object.assign({}, state, finalState);
}

/*
 * Draws 2 cards from the deck to two monster slots
 */
function draw2Cards(state, action) {
    if (action.type !== DRAW_2_CARDS) {
        return state;
    }
    const interimState = moveCards(state);
    const finalState = moveCards(interimState);

    return Object.assign({}, finalState);
}

/*
 * Moves the top card of the deck to the next available monster slot
 */
function moveCards(state) {
    if (!state.hasOwnProperty("deck") && !state.hasOwnProperty("monsterSlots")) {
        return state;
    }

    let deck = state.deck;
    let monsterSlots = state.monsterSlots;
    for (let slot in monsterSlots) {
        if (monsterSlots.hasOwnProperty(slot) && monsterSlots[slot].card === null) {
            monsterSlots[slot].card = deck.pop();
            break;
        }
    }

    return Object.assign({}, state,{ deck, monsterSlots })
}


/*
 * The deck reducer function
 */
export default function deckReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_DECK:
            return addCardToDeck(state, action);
        case DRAW_CARD:
            return drawCard(state, action);
        case DRAW_2_CARDS:
            return draw2Cards(state, action);
        default:
            return state;
    }
}