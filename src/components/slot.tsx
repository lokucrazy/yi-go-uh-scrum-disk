/* eslint-disable @typescript-eslint/no-unused-vars */
import CardView from './card'
import { Slot } from '../models'
import { h, VNode } from '../utilities/vdom'
import './slot.css'

const SlotView = (prop: { slot: Slot }): VNode => {
	const { slot } = prop
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
