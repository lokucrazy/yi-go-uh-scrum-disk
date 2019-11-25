import { strict as assert } from 'assert'
import { MOVE_CARD, moveCard } from '../../src/actions'
import { describe, it } from '../utilities'

export default describe('move card action', () => {
	it('creates a move card action', () => {
		const expectedSlot = 'slot'
		const expectedNextSlot = 'nextSlot'
		const expectedAction = { type: MOVE_CARD, slot: expectedSlot, nextSlot: expectedNextSlot }
		assert.deepEqual(moveCard(expectedSlot, expectedNextSlot), expectedAction)
	})

	it('returns null given an undefined slot', () => {
		assert.deepEqual(moveCard(undefined, 'nextSlot'), null)
	})

	it('returns null given an undefined nextSlot', () => {
		assert.deepEqual(moveCard('slot', undefined), null)
	})

	it('returns null given an bad slot', () => {
		const badSlot: any = 5
		assert.deepEqual(moveCard(badSlot, 'nextSlot'), null)
	})

	it('returns null given an bad nextSlot', () => {
		const badNextSlot: any = 5
		assert.deepEqual(moveCard('slot', badNextSlot), null)
	})
})