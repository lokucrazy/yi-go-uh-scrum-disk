import { Card } from "../models"
import "./card.css"
/** @jsx h */
// eslint-disable-next-line no-unused-vars
import { h } from "../utilities/vdom"

const CardView = ({ card }) => {
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
