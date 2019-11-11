import { ADD_TO_DECK, DRAW_CARD } from "../actions"
import { Card, Slot } from "../models"
import SlotView from "./slot.jsx"
import "./disk.css"
/** @jsx h */
// eslint-disable-next-line no-unused-vars
import { h } from "../utilities/vdom"

const Disk = ({ store }) => {
	const { deck, monsterSlots } = store.getState()
	console.log(deck)
	const card = new Card("New Title 3", "New Desc 3")
	const dispatchAddCard = () => store.dispatch({ type: ADD_TO_DECK, card })
	const dispatchDrawCard = () => store.dispatch({ type: DRAW_CARD })
	return (
		<div>
			<div id="scrum-disk" class="disk" >
				<SlotView slot={monsterSlots.monster1} />
				<SlotView slot={monsterSlots.monster2} />
				<SlotView slot={monsterSlots.monster3} />
				<SlotView slot={monsterSlots.monster4} />
				<SlotView slot={monsterSlots.monster5} />
			</div>
			<button onClick={() => dispatchAddCard()}>Add Card 3</button>
			<button onClick={() => dispatchDrawCard()}>Draw Card</button>
		</div>
	)
}

export default Disk
