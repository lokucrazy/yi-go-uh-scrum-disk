import { Card, Slot } from '../../src/models'
import { SEND_TO_GRAVEYARD, SendGraveyardAction } from '../../src/actions'
import { strict as assert } from 'assert'
import graveyardReducer from '../../src/reducers/graveyardReducer'
import { initialState, State, MonsterSlots } from '../../src/reducers/initialState'
import { describe, it, test } from '../utilities'

export default describe('graveyard reducer tests', () => {
	it('returns initial state when given a bad action', () => {
		const action: any = {}
		assert.deepEqual(graveyardReducer(initialState, action), initialState)
	})

	it('returns initial state when given an incorrect slot', () => {
		const action: SendGraveyardAction = { type: SEND_TO_GRAVEYARD, slot: 'slot' }
		assert.deepEqual(graveyardReducer(undefined, action), initialState)
	})

	test('sending a card to the graveyard', () => {
		it('returns the initial state when given an empty slot', () => {
			const action: SendGraveyardAction = { type: SEND_TO_GRAVEYARD, slot: 'monster1' }
			assert.deepEqual(graveyardReducer(initialState, action), initialState)
		})
       
		it('returns a new state with a card in the graveyard', () => {
			const action: SendGraveyardAction = { type: SEND_TO_GRAVEYARD, slot: 'monster1' }
			const card = new Card( 'test', 'desc')
			const expectedSlot = new Slot(null, 'monster1')
			const expectedGraveyard = [card]
			const testSlots: MonsterSlots = Object.assign({}, initialState.monsterSlots, { monster1: new Slot(card, 'monster1')})
			const testState: State = Object.assign({}, initialState, { monsterSlots: testSlots })
			const actualState: State = graveyardReducer(testState, action)
			assert.notDeepEqual(actualState, initialState)
			assert.deepEqual(actualState.graveyard, expectedGraveyard)
			assert.deepEqual(actualState.monsterSlots.monster1, expectedSlot)
		})
	})
})