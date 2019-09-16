import { Slot } from "../models";

/*
 * The initial state of the scrum disk
 */
const initialState = {
    monsterSlots: {
        monster1: new Slot(null, "monster1"),
        monster2: new Slot(null, "monster2"),
        monster3: new Slot(null, "monster3"),
        monster4: new Slot(null, "monster4"),
        monster5: new Slot(null, "monster5")
    },
    deck: [],
    graveyard: []
};

export default initialState;