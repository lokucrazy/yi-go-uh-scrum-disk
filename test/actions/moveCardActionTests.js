import {MOVE_CARD, moveCard} from "../../src/actions";
import {strict as assert} from "assert";

const testMoveCard = () => {
    const expectedSlot = "slot";
    const expectedNextSlot = "nextSlot";
    const expectedAction = { type: MOVE_CARD, slot: expectedSlot, nextSlot: expectedNextSlot };
    assert.deepEqual(moveCard(expectedSlot, expectedNextSlot), expectedAction);
};

const testUndefinedSlotMoveCard = () => {
    assert.deepEqual(moveCard(undefined, "nextSlot"), {});
};

const testUndefinedNextSlotMoveCard = () => {
    assert.deepEqual(moveCard("slot", undefined), {});
};

const testBadSlotMoveCard = () => {
    const badSlot = 5;
    assert.deepEqual(moveCard(badSlot, "nextSlot"), {});
};

const testBadNextSlotMoveCard = () => {
    const badNextSlot = 5;
    assert.deepEqual(moveCard("slot", badNextSlot), {});
};

const moveCardActionTests = [
    testMoveCard,
    testUndefinedSlotMoveCard,
    testUndefinedNextSlotMoveCard,
    testBadSlotMoveCard,
    testBadNextSlotMoveCard
];

export default moveCardActionTests;