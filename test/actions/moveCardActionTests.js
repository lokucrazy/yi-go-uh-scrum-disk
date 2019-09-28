import {MOVE_CARD, moveCard} from "../../src/actions";
import {strict as assert} from "assert";

const testMoveCard = () => {
    const expectedSlot = "slot";
    const expectedNextSlot = "nextSlot";
    const expectedAction = { type: MOVE_CARD, slot: expectedSlot, nextSlot: expectedNextSlot };
    assert.deepEqual(moveCard(expectedSlot, expectedNextSlot), expectedAction);
};

const moveCardActionTests = [
    testMoveCard
];

export default moveCardActionTests;