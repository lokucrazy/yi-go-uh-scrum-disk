import CardView from "./card.jsx"
import "./slot.css"
/** @jsx h */
// eslint-disable-next-line no-unused-vars
import { h } from "../utilities/vdom"
import { Slot } from "../models"

const SlotView = ({ slot }) => {
	if (!(slot instanceof Slot)) return null
	const id = `slot-${slot.slotId}`
	return (
		<div class="slot" id={id}>
		<h1>{slot.slotId}</h1>
			<CardView card={slot.card} />
		</div>
	)
}

export default SlotView
