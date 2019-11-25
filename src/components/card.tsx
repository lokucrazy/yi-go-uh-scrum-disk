/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from '../models'
import { h, VNode } from '../utilities/vdom'
import './card.css'

const CardView = (prop: { card: Card }): VNode => {
	const { card } = prop
	if (!(card instanceof Card)) return null
	const id = `card-${card.title}`
	return (
		<div class="card" id={id}>
			<h3>{card.title}</h3>
			<p>{card.desc}</p>
		</div>
	)
}

export default CardView
