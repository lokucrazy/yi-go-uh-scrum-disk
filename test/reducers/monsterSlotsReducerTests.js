import { strict as assert } from "assert"
import initialState from "../../src/reducers/initialState"
import monsterSlotsReducer from "../../src/reducers/monsterSlotsReducer"
import { MOVE_CARD } from "../../src/actions"

import { Card, Slot } from "../../src/models"
import { describe, it, test } from "../utilities"

export default describe("monster slots reducer tests", () => {
	it("returns initial state when given a bad action", () => {
		const action = {}
		assert.deepEqual(monsterSlotsReducer(initialState, action), initialState)
	})

	it("returns initial state when given an incorrect slot", () => {
		const action = { type: MOVE_CARD, slot: "slot", nextSlot: "nextSlot" }
		assert.deepEqual(monsterSlotsReducer(undefined, action), initialState)
	})

	test("moving card from one slot to another", () => {
		it("returns initial state when given an empty slot", () => {
			const action = { type: MOVE_CARD, slot: "monster1", nextSlot: "monster2" }
			assert.deepEqual(monsterSlotsReducer(initialState, action), initialState)
		})

		it("returns test state when given an non-empty nextSlot", () => {
			const action = { type: MOVE_CARD, slot: "monster1", nextSlot: "monster2" }
			const card = new Card( "test", "desc")
			const testSlots = Object.assign({}, initialState.monsterSlots, { monster2: new Slot(card, "monster2")})
			const testState = Object.assign({}, initialState, { monsterSlots: testSlots })
			assert.deepEqual(monsterSlotsReducer(testState, action), testState)
		})

		it("returns new state with a card in the next slot", () => {
			const action = { type: MOVE_CARD, slot: "monster1", nextSlot: "monster2" }
			const card = new Card( "test", "desc")
			const expectedSlot = new Slot(null, "monster1")
			const expectedNextSlot = new Slot(card, "monster2")
			const testSlots = Object.assign({}, initialState.monsterSlots, { monster1: new Slot(card, "monster1")})
			const testState = Object.assign({}, initialState, { monsterSlots: testSlots })
			const actualState = monsterSlotsReducer(testState, action)
			assert.notDeepEqual(actualState, initialState)
			assert.deepEqual(actualState.monsterSlots.monster1, expectedSlot)
			assert.deepEqual(actualState.monsterSlots.monster2, expectedNextSlot)
		})
	})
})