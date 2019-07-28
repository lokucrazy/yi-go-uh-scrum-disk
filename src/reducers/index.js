import { ADD_CARD, REMOVE_CARD } from '../actions/index.js';
import { combineReducers } from 'redux'

function addCard(state = [], action) {
    if (action.type !== ADD_CARD) {
        return state;
    }
    let cards = state;
    cards.push(action.card);

    return cards;
}

function removeCard(state = [], action) {
    if (action.type !== REMOVE_CARD) {
        return state;
    }

    let cards = state.filter((card) => {
        if (card.title !== action.card.title) {
            return card;
        }
    });

    return cards;
}

function cardReducer(state = [], action) {
    switch (action.type) {
        case ADD_CARD:
            return addCard(state, action);
        case REMOVE_CARD:
            return removeCard(state, action);
        default:
            return state;
    }
}

function reducerWrapper(reducerFunction, reducerName) {
    return (state, action) => {
        const { slot } = action;
        const initCall = state === undefined;
        if (slot !== reducerName && !initCall) return state;
        return reducerFunction(state, action); 
    }
}

const scrumDisk = combineReducers({
    cards: reducerWrapper(cardReducer, "cards"),
    monsterSlot1: reducerWrapper(cardReducer, "monsterSlot1"),
    monsterSlot2: reducerWrapper(cardReducer, "monsterSlot2"),
    monsterSlot3: reducerWrapper(cardReducer, "monsterSlot3"),
    monsterSlot4: reducerWrapper(cardReducer, "monsterSlot4"),
    monsterSlot5: reducerWrapper(cardReducer, "monsterSlot5"),
    spellSlot1: reducerWrapper(cardReducer, "spellSlot1"),
    spellSlot2: reducerWrapper(cardReducer, "spellSlot2"),
    spellSlot3: reducerWrapper(cardReducer, "spellSlot3"),
    spellSlot4: reducerWrapper(cardReducer, "spellSlot4"),
    spellSlot5: reducerWrapper(cardReducer, "spellSlot5"),
    deck: reducerWrapper(cardReducer, "deck"),
    graveyard: reducerWrapper(cardReducer, "graveyard")
});

export default scrumDisk;