import { strict as assert } from 'assert'
import { SEND_TO_GRAVEYARD, sendCardToGraveyard } from '../../src/actions'
import { describe, it } from '../utilities'

export default describe('send to graveyard action', () => {
	it('creates a send to graveyard action', () => {
		const expectedSlot = 'slot'
		const expectedAction = { type: SEND_TO_GRAVEYARD, slot: expectedSlot }
		assert.deepEqual(sendCardToGraveyard(expectedSlot), expectedAction)
	})

	it('returns null given an undefined slot', () => {
		assert.deepEqual(sendCardToGraveyard(undefined), null)
	})

	it('returns null given a bad slot', () => {
		const badSlot: any = 5
		assert.deepEqual(sendCardToGraveyard(badSlot), null)
	})
})