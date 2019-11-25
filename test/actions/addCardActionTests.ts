import { strict as assert } from 'assert'
import { Card } from '../../src/models'
import { ADD_TO_DECK, addCardToDeck } from '../../src/actions'
import { describe, it } from '../utilities'

export default describe('add card action', () => {
	it('creates a add card action', () => {
		const expectedCard = new Card('title', 'desc')
		const expectedAction = { type: ADD_TO_DECK, card: expectedCard }
		assert.deepEqual(addCardToDeck(expectedCard), expectedAction)
	})

	it('returns null given undefined card', () => {
		assert.deepEqual(addCardToDeck(undefined), null)
	})

	it('returns null object given bad card', () => {
		const badCard: any = 'not a card'
		assert.deepEqual(addCardToDeck(badCard), null)
	})
})