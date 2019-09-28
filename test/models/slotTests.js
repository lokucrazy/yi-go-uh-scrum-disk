import { Card, Slot } from "../../src/models";
import { strict as assert } from "assert";


const testSlotConstructor = () => {
    const expectedCard = new Card("title", "desc");
    const expectedSlotId = "slotId";
    const actualSlot = new Slot(expectedCard, expectedSlotId);

    assert.equal(actualSlot.card, expectedCard);
    assert.equal(actualSlot.slotId, expectedSlotId);
};

const testUndefinedCardSlotConstructor = () => {
    try {
        new Slot(undefined, "slotId");
    } catch (error) {
        assert.deepEqual(error, "card must be a Card");
    }
};

const testNullCardSlotConstructor = () => {
    const expectedCard = null;
    const expectedSlotId = "slotId";
    const actualSlot = new Slot(expectedCard, expectedSlotId);

    assert.equal(actualSlot.card, expectedCard);
    assert.equal(actualSlot.slotId, expectedSlotId);
};

const testUndefinedSlotIdSlotConstructor = () => {
    try {
        const card = new Card("title", "desc");
        new Slot(card, undefined);
    } catch (error) {
        assert.deepEqual(error, "slotId must be a string");
    }
};

const testBadSlotIdSlotConstructor = () => {
    try {
        const card = new Card("title", "desc");
        new Slot(card, 5);
    } catch (error) {
        assert.deepEqual(error, "slotId must be a string");
    }
};

const slotTests = [
    testSlotConstructor,
    testUndefinedCardSlotConstructor,
    testNullCardSlotConstructor,
    testUndefinedSlotIdSlotConstructor,
    testBadSlotIdSlotConstructor
];

export default slotTests;