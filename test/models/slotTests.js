import { Card, Slot } from "../../src/models";
import { strict as assert } from "assert";
import {describe, it} from "../utilities";

export default describe("slot tests", () => {
   it("creates a slot", () => {
       const expectedCard = new Card("title", "desc");
       const expectedSlotId = "slotId";
       const actualSlot = new Slot(expectedCard, expectedSlotId);

       assert.equal(actualSlot.card, expectedCard);
       assert.equal(actualSlot.slotId, expectedSlotId);
   });

    it("creates a slot with a null card", () => {
        const expectedCard = null;
        const expectedSlotId = "slotId";
        const actualSlot = new Slot(expectedCard, expectedSlotId);

        assert.equal(actualSlot.card, expectedCard);
        assert.equal(actualSlot.slotId, expectedSlotId);
    });

   it("throws an error when given an undefined card", () => {
       try {
           new Slot(undefined, "slotId");
       } catch (error) {
           assert.deepEqual(error, "card must be a Card");
       }
   });

   it("throws an error given an undefined slot id", () => {
       try {
           const card = new Card("title", "desc");
           new Slot(card, undefined);
       } catch (error) {
           assert.deepEqual(error, "slotId must be a string");
       }
   });

   it("throws an error when given a bad slot id", () => {
       try {
           const card = new Card("title", "desc");
           new Slot(card, 5);
       } catch (error) {
           assert.deepEqual(error, "slotId must be a string");
       }
   });
});