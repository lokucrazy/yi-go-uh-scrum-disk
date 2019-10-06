import DeckReducerTests from "./deckReducerTests";
import GraveyardReducerTests from "./graveyardReducerTests";
import MonsterSlotsReducerTests from "./monsterSlotsReducerTests";
import { describe } from "../utilities";

export default describe("Reducers Test Suite", () => {
    DeckReducerTests();
    GraveyardReducerTests();
    MonsterSlotsReducerTests();
});