import { Card, Slot } from '../models'

export interface State {
	[key: string]: object | Array<Card>
	monsterSlots: MonsterSlots
	deck: Card[]
	graveyard: Card[]
}

export interface MonsterSlots {
	[key: string]: Slot
	monster1: Slot
	monster2: Slot
	monster3: Slot
	monster4: Slot
	monster5: Slot
}

/*
 * The initial state of the scrum disk
 */
export const initialState = {
	monsterSlots: {
		monster1: new Slot(null, 'monster1'),
		monster2: new Slot(null, 'monster2'),
		monster3: new Slot(null, 'monster3'),
		monster4: new Slot(null, 'monster4'),
		monster5: new Slot(null, 'monster5')
	},
	deck: new Array<Card>(),
	graveyard: new Array<Card>(),
}