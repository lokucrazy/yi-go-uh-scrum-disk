import DeckReducerTests from "./deckReducerTests"
import { describe } from "../utilities"
import GraveyardReducerTests from "./graveyardReducerTests"
import MonsterSlotsReducerTests from "./monsterSlotsReducerTests"

export default describe("Reducers Test Suite", () => {
	DeckReducerTests()
	GraveyardReducerTests()
	MonsterSlotsReducerTests()
})