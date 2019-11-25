/* eslint-disable @typescript-eslint/no-unused-vars */
import SlotView from './slot'
import { Card } from '../models'
import { State } from '../reducers/initialState'
import { h, VNode } from '../utilities/vdom'
import './disk.css'

const Disk = (prop: { state: State, dispatchAddCard: Function, dispatchDrawCard: Function }): VNode => {
	const { state: { 
		deck, monsterSlots 
	}, 
	dispatchAddCard, 
	dispatchDrawCard 
	} = prop
	console.log(deck)
	const card = new Card('New Title 3', 'New Desc 3')
	return (
		<div>
			<div id="scrum-disk" class="disk" >
				<SlotView slot={monsterSlots.monster1} />
				<SlotView slot={monsterSlots.monster2} />
				<SlotView slot={monsterSlots.monster3} />
				<SlotView slot={monsterSlots.monster4} />
				<SlotView slot={monsterSlots.monster5} />
			</div>
			<button onClick={(): void => dispatchAddCard(card)}>Add Card 3</button>
			<button onClick={(): void => dispatchDrawCard()}>Draw Card</button>
		</div>
	)
}

export default Disk
