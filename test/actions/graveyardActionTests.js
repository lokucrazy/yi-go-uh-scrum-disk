import { SEND_TO_GRAVEYARD, sendCardToGraveyard} from "../../src/actions";
import { strict as assert } from "assert";

const testSendCardToGraveyard = () => {
    const expectedSlot = "slot";
    const expectedAction = { type: SEND_TO_GRAVEYARD, slot: expectedSlot };
    assert.deepEqual(sendCardToGraveyard(expectedSlot), expectedAction);
};

const testSendUndefinedToGraveyard = () => {
    assert.deepEqual(sendCardToGraveyard(undefined), {});
};

const testSendBadSlotToGraveyard = () => {
    const badSlot = 5;
    assert.deepEqual(sendCardToGraveyard(badSlot), {});
};

const graveyardActionTests = [
    testSendCardToGraveyard,
    testSendUndefinedToGraveyard,
    testSendBadSlotToGraveyard

];

export default graveyardActionTests;