import { strict as assert } from "assert"
import deckReducer from "../../src/reducers/deckReducer"
import initialState from "../../src/reducers/initialState"

import {ADD_TO_DECK, DRAW_CARD} from "../../src/actions"
import { Card, Slot } from "../../src/models"
import { describe, it, test } from "../utilities"

export default describe("deck reducer tests", () => {
	it("returns the initial state when given a bad action", () => {
		const action = {}
		assert.deepEqual(deckReducer(initialState, action), initialState)
	})

	it("returns the initial state when given a non deck action", () => {
		const action = { type: "non deck", card: null }
		assert.deepEqual(deckReducer(initialState, action), initialState)
	})

	test("add card to deck", () => {
		it("returns a new state when given an action with a card", () => {
			const card = new Card("title", "desc")
			const action = { type: ADD_TO_DECK, card: card }
			const expectedDeck = [card]
			const actualState = deckReducer(undefined, action)

			assert.notDeepEqual(actualState, initialState)
			assert.deepEqual(actualState.deck, expectedDeck)
		})

		it("returns the initial state when given an action with a bad card", () => {
			const action = { type: ADD_TO_DECK, card: null }
			assert.deepEqual(deckReducer(initialState, action), initialState)
		})
	})

	test("draw card", () => {
		it("returns a new state with a card drawn", () => {
			const action = { type: DRAW_CARD }
			const card = new Card("title", "desc")
			const expectedSlot = new Slot(card, "monster1")
			const testState = Object.assign({}, initialState, { deck: [card] })
			const actualState = deckReducer(testState, action)
			assert.notDeepEqual(actualState, initialState)
			assert.deepEqual(actualState.deck, [])
			assert.deepEqual(actualState.monsterSlots.monster1, expectedSlot)
		})
	})
})