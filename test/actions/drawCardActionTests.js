import {draw2Cards, DRAW_2_CARDS, DRAW_CARD, drawCard} from "../../src/actions";
import {strict as assert} from "assert";

const testDrawCard = () => {
    const expectedAction = { type: DRAW_CARD };
    assert.deepEqual(drawCard(), expectedAction);
};

const testDraw2Cards = () => {
    const expectedAction = { type: DRAW_2_CARDS };
    assert.deepEqual(draw2Cards(), expectedAction);
};

const drawCardActionTests = [
    testDrawCard,
    testDraw2Cards
];

export default drawCardActionTests;