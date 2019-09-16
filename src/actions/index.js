export const ADD_TO_DECK = 'ADD_TO_DECK';
export const SEND_TO_GRAVEYARD = 'SEND_TO_GRAVEYARD';
export const PLAY_CARD = 'PLAY_CARD';
export const MOVE_CARD = 'MOVE_CARD';

export function addCardToDeck(card) {
    return {
        type: ADD_TO_DECK,
        card
    }
}

export function sendCardToGraveyard(slot) {
    return {
        type: SEND_TO_GRAVEYARD,
        slot
    }
}

export function playCard() {
    return {
        type: PLAY_CARD
    }
}

export function moveCard(slot, nextSlot) {
    return {
        type: MOVE_CARD,
        slot,
        nextSlot
    }
}