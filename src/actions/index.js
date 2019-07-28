export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export function addCard(slot, card) {
    return {
        type: ADD_CARD,
        slot,
        card
    }
}

export function removeCard(slot, card) {
    return {
        type: REMOVE_CARD,
        slot,
        card
    }
}