import addCardActionTests from './addCardActionTests'
import drawCardActionTests from './drawCardActionTests'
import graveyardActionTests from './graveyardActionTests'
import moveCardActionTests from './moveCardActionTests'
import { describe } from '../utilities'

export default describe('Actions Test Suite', () => {
	addCardActionTests()
	drawCardActionTests()
	graveyardActionTests()
	moveCardActionTests()
})