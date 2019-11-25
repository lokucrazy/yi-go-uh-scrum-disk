import { strict as assert } from 'assert'
import { DRAW_CARD, DRAW_2_CARDS, drawCard, draw2Cards } from '../../src/actions'
import { describe, it } from '../utilities'

export default describe('draw card action', () => {
	it('creates a draw card action', () => {
		const expectedAction = { type:DRAW_CARD }
		assert.deepEqual(drawCard(), expectedAction)
	})

	it('creates a draw 2 cards action', () => {
		const expectedAction = { type: DRAW_2_CARDS }
		assert.deepEqual(draw2Cards(), expectedAction)
	})
})