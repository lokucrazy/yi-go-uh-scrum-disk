import { strict as assert } from "assert"

import { describe, it } from "../utilities"
import { MOVE_CARD, moveCard } from "../../src/actions"

export default describe("move card action", () => {
	it("creates a move card action", () => {
		const expectedSlot = "slot"
		const expectedNextSlot = "nextSlot"
		const expectedAction = { type: MOVE_CARD, slot: expectedSlot, nextSlot: expectedNextSlot }
		assert.deepEqual(moveCard(expectedSlot, expectedNextSlot), expectedAction)
	})

	it("creates an empty object given an undefined slot", () => {
		assert.deepEqual(moveCard(undefined, "nextSlot"), {})
	})

	it("creates an empty object given an undefined nextSlot", () => {
		assert.deepEqual(moveCard("slot", undefined), {})
	})

	it("creates an empty object given an bad slot", () => {
		const badSlot = 5
		assert.deepEqual(moveCard(badSlot, "nextSlot"), {})
	})

	it("creates an empty object given an bad nextSlot", () => {
		const badNextSlot = 5
		assert.deepEqual(moveCard("slot", badNextSlot), {})
	})
})