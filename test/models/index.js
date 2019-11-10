import cardTests from "./cardTests"
import { describe } from "../utilities"
import slotTests from "./slotTests"

export default describe("Models Test Suite", () => {
	cardTests()
	slotTests()
})