/* eslint-disable @typescript-eslint/no-unused-vars */
import SlotView from './slot'
import { State } from '../reducers/initialState'
import { h, VNode } from '../utilities/vdom'
import AddCardModal from './modals/addCardModal'
import './disk.css'

const Disk = (prop: { state: State, dispatchAddCard: Function, dispatchDrawCard: Function }): VNode => {
	const { state: { 
		deck, monsterSlots 
	}, 
	dispatchAddCard, 
	dispatchDrawCard 
	} = prop
	
	const openModal = (): void => {
		document.getElementById('add-card-modal').style.display = 'block'
	}

	return (
		<div>
			<AddCardModal dispatchAddCard={dispatchAddCard}/>
			<div id="scrum-disk" class="disk" >
				<SlotView slot={monsterSlots.monster1} />
				<SlotView slot={monsterSlots.monster2} />
				<SlotView slot={monsterSlots.monster3} />
				<SlotView slot={monsterSlots.monster4} />
				<SlotView slot={monsterSlots.monster5} />
			</div>
			<button id="open-modal" onClick={openModal}>Add Card</button>
			<button id="draw-card" onClick={(): void => dispatchDrawCard()}>Draw Card</button>
		</div>
	)
}

export default Disk
