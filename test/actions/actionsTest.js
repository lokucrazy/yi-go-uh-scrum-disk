import { addCardToDeck, drawCard, draw2Cards, moveCard, sendCardToGraveyard } from "../../src/actions";
import { ADD_TO_DECK, DRAW_CARD, DRAW_2_CARDS, MOVE_CARD, SEND_TO_GRAVEYARD } from "../../src/actions";
import { strict as assert } from "assert"
import {Card} from "../../src/models";


const testAddCardToDeck = () => {
    const expectedCard = new Card("title", "desc");
    const expectedAction = { type: ADD_TO_DECK, card: expectedCard };
    assert.deepEqual(addCardToDeck(expectedCard), expectedAction);
};

const testDrawCard = () => {
    const expectedAction = { type: DRAW_CARD };
    assert.deepEqual(drawCard(), expectedAction);
};

const testDraw2Cards = () => {
    const expectedAction = { type: DRAW_2_CARDS };
    assert.deepEqual(draw2Cards(), expectedAction);
};

const testMoveCard = () => {
    const expectedSlot = "slot";
    const expectedNextSlot = "nextSlot";
    const expectedAction = { type: MOVE_CARD, slot: expectedSlot, nextSlot: expectedNextSlot };
    assert.deepEqual(moveCard(expectedSlot, expectedNextSlot), expectedAction);
};

const testSendCardToGraveyard = () => {
    const expectedSlot = "slot";
    const expectedAction = { type: SEND_TO_GRAVEYARD, slot: expectedSlot };
    assert.deepEqual(sendCardToGraveyard(expectedSlot), expectedAction);
};

const ActionsTest = [
    testAddCardToDeck,
    testDrawCard,
    testDraw2Cards,
    testMoveCard,
    testSendCardToGraveyard
];

export default ActionsTest;