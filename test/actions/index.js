import addCardActionTests from "./addCardActionTests"
import { describe } from "../utilities"
import drawCardActionTests from "./drawCardActionTests"
import graveyardActionTests from "./graveyardActionTests"
import moveCardActionTests from "./moveCardActionTests"

export default describe("Actions Test Suite", () => {
	addCardActionTests()
	drawCardActionTests()
	graveyardActionTests()
	moveCardActionTests()
})