import {SEND_TO_GRAVEYARD, sendCardToGraveyard} from "../../src/actions";
import {strict as assert} from "assert";

const testSendCardToGraveyard = () => {
    const expectedSlot = "slot";
    const expectedAction = { type: SEND_TO_GRAVEYARD, slot: expectedSlot };
    assert.deepEqual(sendCardToGraveyard(expectedSlot), expectedAction);
};

const graveyardActionTests = [
    testSendCardToGraveyard
];

export default graveyardActionTests;