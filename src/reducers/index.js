import deckReducer from "./deckReducer"
import graveyardReducer from "./graveyardReducer"
import monsterSlotsReducer from "./monsterSlotsReducer"
import reduceReducers from "reduce-reducers"

const ScrumDisk = reduceReducers(deckReducer, monsterSlotsReducer, graveyardReducer)

export default ScrumDisk