import { Card, Slot } from '../../src/models'
import { strict as assert } from 'assert'
import { describe, it } from '../utilities'

export default describe('slot tests', () => {
	it('creates a slot', () => {
		const expectedCard = new Card('title', 'desc')
		const expectedSlotId: any = 'slotId'
		const actualSlot = new Slot(expectedCard, expectedSlotId)

		assert.equal(actualSlot.card, expectedCard)
		assert.equal(actualSlot.slotId, expectedSlotId)
	})

	it('creates a slot with a null card', () => {
		const expectedCard: any = null
		const expectedSlotId: any = 'slotId'
		const actualSlot = new Slot(expectedCard, expectedSlotId)

		assert.equal(actualSlot.card, expectedCard)
		assert.equal(actualSlot.slotId, expectedSlotId)
	})

	it('throws an error when given an undefined card', () => {
		try {
			new Slot(undefined, 'slotId')
		} catch (error) {
			assert.deepEqual(error, 'card must be a Card')
		}
	})

	it('throws an error given an undefined slot id', () => {
		try {
			const card = new Card('title', 'desc')
			new Slot(card, undefined)
		} catch (error) {
			assert.deepEqual(error, 'slotId must be a string')
		}
	})

	it('throws an error when given a bad slot id', () => {
		try {
			const card = new Card('title', 'desc')
			const val: any = 5
			new Slot(card, val)
		} catch (error) {
			assert.deepEqual(error, 'slotId must be a string')
		}
	})
})