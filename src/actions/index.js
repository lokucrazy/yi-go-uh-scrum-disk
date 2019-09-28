export const ADD_TO_DECK = 'ADD_TO_DECK';
export const SEND_TO_GRAVEYARD = 'SEND_TO_GRAVEYARD';
export const DRAW_CARD = 'DRAW_CARD';
export const DRAW_2_CARDS = 'DRAW_2_CARDS';
export const MOVE_CARD = 'MOVE_CARD';

/*
 * card - A Card object of the card
 */
export function addCardToDeck(card) {
    return {
        type: ADD_TO_DECK,
        card
    }
}

/*
 * slot - A string of the slot name
 */
export function sendCardToGraveyard(slot) {
    return {
        type: SEND_TO_GRAVEYARD,
        slot
    }
}

export function drawCard() {
    return {
        type: DRAW_CARD
    }
}

export function draw2Cards() {
    return {
        type: DRAW_2_CARDS
    }
}

/*
 * slot - A string of the slot name
 * nextSlot - A string of the next slot name
 */
export function moveCard(slot, nextSlot) {
    return {
        type: MOVE_CARD,
        slot,
        nextSlot
    }
}