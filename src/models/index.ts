export class Card {
	title: string
	desc: string
	constructor(title: string, desc: string) {
		if (title === undefined || typeof title !== 'string') {
			throw 'title must be a string'
		}
		if (desc === undefined || typeof desc !== 'string') {
			throw 'desc must be a string'
		}
		this.title = title
		this.desc = desc
	}
}
	
export class Slot {
	card: Card
	slotId: string
	constructor(card: Card, slotId: string) {
		if (card === undefined) {
			throw 'card must be a Card'
		}
		if (slotId === undefined || typeof slotId !== 'string') {
			throw 'slotId must be a string'
		}
		this.card = card
		this.slotId = slotId
	}
}