import cardTests from './cardTests'
import slotTests from './slotTests'
import { describe } from '../utilities'

export default describe('Models Test Suite', () => {
	cardTests()
	slotTests()
})