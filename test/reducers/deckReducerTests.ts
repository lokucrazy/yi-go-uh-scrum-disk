import { Card, Slot } from '../../src/models'
import { ADD_TO_DECK, DRAW_2_CARDS, DRAW_CARD, AddCardAction } from '../../src/actions'
import deckReducer from '../../src/reducers/deckReducer'
import { strict as assert } from 'assert'
import { describe, it, test } from '../utilities'
import { initialState, State } from '../../src/reducers/initialState'

export default describe('deck reducer tests', () => {
	it('returns the initial state when given a bad action', () => {
		const action: any = {}
		assert.deepEqual(deckReducer(initialState, action), initialState)
	})

	it('returns the initial state when given a non deck action', () => {
		const action: any = { type: 'non deck', card: null }
		assert.deepEqual(deckReducer(initialState, action), initialState)
	})

	test('add card to deck', () => {
		it('returns a new state when given an action with a card', () => {
			const card = new Card('title', 'desc')
			const action: AddCardAction = { type: ADD_TO_DECK, card: card }
			const expectedDeck = [card]
			const actualState: State = deckReducer(undefined, action)

			assert.notDeepEqual(actualState, initialState)
			assert.deepEqual(actualState.deck, expectedDeck)
		})

		it('returns a deck with randomized cards', () => {
			const card1 = new Card('title1', 'desc1')
			const card2 = new Card('title2', 'desc2')
			const card3 = new Card('title3', 'desc1')
			const action1 = { type: ADD_TO_DECK, card: card1 }
			const action2 = { type: ADD_TO_DECK, card: card2 }
			const action3 = { type: ADD_TO_DECK, card: card3 }
			const expectedDeck = [card1, card2, card3]
			const actualState = deckReducer(
				deckReducer(
					deckReducer(initialState, action1),
					action2
				),
				action3
			)

			assert.notDeepEqual(actualState, initialState)
			assert.notDeepEqual(actualState.deck, expectedDeck)
		})

		it('returns the initial state when given an action with a bad card', () => {
			const action: AddCardAction = { type: ADD_TO_DECK, card: null }
			assert.deepEqual(deckReducer(initialState, action), initialState)
		})
	})

	test('draw card', () => {
		it('returns a new state with a card drawn', () => {
			const action = { type: DRAW_CARD }
			const card = new Card('title', 'desc')
			const expectedSlot = new Slot(card, 'monster1')
			const testState = Object.assign({}, initialState, { deck: [card] })
			const actualState = deckReducer(testState, action)
			assert.notDeepEqual(actualState, initialState)
			assert.deepEqual(actualState.deck, [])
			assert.deepEqual(actualState.monsterSlots.monster1, expectedSlot)
		})
	})

	test('draw two cards', () => {
		it('returns a new state with 2 cards drawn', () => {
			const action = { type: DRAW_2_CARDS }
			const card1 = new Card('title1', 'desc1')
			const card2 = new Card('title2', 'desc2')
			const card3 = new Card('title3', 'desc3')
			const expectedDeck = [card1]
			const expectedSlot1 = new Slot(card3, 'monster1')
			const expectedSlot2 = new Slot(card2, 'monster2')
			const testState = Object.assign({}, initialState, { deck: [card1, card2, card3] })
			const actualState = deckReducer(testState, action)
			assert.notDeepEqual(actualState, initialState)
			assert.deepEqual(actualState.deck, expectedDeck)
			assert.deepEqual(actualState.monsterSlots.monster1, expectedSlot1)
			assert.deepEqual(actualState.monsterSlots.monster2, expectedSlot2)
		})

		it ('returns a new state with 1 cards drawn when deck only has one card', () => {
			const action = { type: DRAW_2_CARDS }
			const card = new Card('title', 'desc')
			const expectedSlot = new Slot(card, 'monster1')
			const testState = Object.assign({}, initialState, { deck: [card] })
			const actualState = deckReducer(testState, action)
			assert.notDeepEqual(actualState, initialState)
			assert.deepEqual(actualState.deck, [])
			assert.deepEqual(actualState.monsterSlots.monster1, expectedSlot)
		})
	})
})