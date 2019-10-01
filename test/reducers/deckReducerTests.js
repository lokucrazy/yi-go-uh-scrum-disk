import deckReducer from "../../src/reducers/deckReducer";
import initialState from "../../src/reducers/initialState";
import { ADD_TO_DECK, DRAW_CARD, DRAW_2_CARDS } from "../../src/actions";
import { Card } from "../../src/models";
import { strict as assert } from "assert"

const testBadAction = () => {
    const action = {};
    assert.deepEqual(deckReducer(initialState, action), initialState);
};

const testDefaultState = () => {
    const action = { type: "initial", card: new Card("title", "desc")};
    assert.deepEqual(deckReducer(undefined, action), initialState);
};

const DeckReducerTests = [
    testBadAction,
    testDefaultState
];

export default DeckReducerTests

