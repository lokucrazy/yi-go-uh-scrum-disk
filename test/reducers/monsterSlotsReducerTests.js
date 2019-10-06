import monsterSlotsReducer from "../../src/reducers/monsterSlotsReducer";
import initialState from "../../src/reducers/initialState";
import { MOVE_CARD } from "../../src/actions";
import { strict as assert } from "assert";
import { describe, it} from "../utilities";

export default describe("monster slots reducer tests", () => {
    it("returns initial state when given a bad action", () => {
        const action = {};
        assert.deepEqual(monsterSlotsReducer(initialState, action), initialState);
    });

    it("returns initial state when given an undefined state", () => {
        const action = { type: MOVE_CARD, slot: "slot", nextSlot: "nextSlot" };
        assert.deepEqual(monsterSlotsReducer(undefined, action), initialState);
    });
});