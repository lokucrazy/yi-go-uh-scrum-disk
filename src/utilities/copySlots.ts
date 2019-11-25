import { MonsterSlots } from '../reducers/initialState'
import { Slot } from '../models'

export default function copySlots(slots: MonsterSlots): MonsterSlots {
	const keys: string[] = Object.keys(slots)
	const newSlots = {} as MonsterSlots
	for (const key of keys) {
		const temp: Slot = slots[key]
		newSlots[key] = new Slot(temp.card, temp.slotId)
	}
	return newSlots
}