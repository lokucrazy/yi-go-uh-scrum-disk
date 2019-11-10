import { Slot } from "../models"

export default function copySlots(slots) {
	const keys = Object.keys(slots)
	let newSlots = {}
	for (let key of keys) {
		let temp = slots[key]
		newSlots[key] = new Slot(temp.card, temp.slotId)
	}
	return newSlots
}