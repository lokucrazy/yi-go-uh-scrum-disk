import graveyardReducer from "../../src/reducers/graveyardReducer";
import initialState from "../../src/reducers/initialState";
import { SEND_TO_GRAVEYARD } from "../../src/actions";
import { strict as assert } from "assert";
import { describe, it } from "../utilities";

export default describe("graveyard reducer tests", () => {
   it("returns initial state when given a bad action", () => {
       const action = {};
       assert.deepEqual(graveyardReducer(initialState, action), initialState);
   });

   it("returns initial state when given an undefined state", () => {
        const action = { type: SEND_TO_GRAVEYARD, slot: "slot" };
        assert.deepEqual(graveyardReducer(undefined, action), initialState);
   });
});