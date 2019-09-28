import { addCardToDeck } from "../../src/actions";
import { ADD_TO_DECK } from "../../src/actions";
import { strict as assert } from "assert"
import { Card } from "../../src/models";

const testAddCardToDeck = () => {
    const expectedCard = new Card("title", "desc");
    const expectedAction = { type: ADD_TO_DECK, card: expectedCard };
    assert.deepEqual(addCardToDeck(expectedCard), expectedAction);
};

const testAddUndefinedCardToDeck = () => {
    const badCard = undefined;
    assert.deepEqual(addCardToDeck(badCard), {});
};

const testAddNonCardToDeck = () => {
    const nonCard = "not a card";
    assert.deepEqual(addCardToDeck(nonCard), {});
};

const AddCardActionTests = [
    testAddCardToDeck,
    testAddUndefinedCardToDeck,
    testAddNonCardToDeck
];

export default AddCardActionTests;