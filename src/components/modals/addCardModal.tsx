/* eslint-disable @typescript-eslint/no-unused-vars */
import { h, VNode } from '../../utilities/vdom'
import './modal.css'
import { Card } from '../../models'

const AddCardModal = (props: { dispatchAddCard: Function }): VNode => {
	const { dispatchAddCard } = props
	const closeModal = (): void => {
		document.getElementById('add-card-modal').style.display = 'none'
	}

	const addCard = (event: Event): void => {
		event.preventDefault()
		if (event && event.target) {
			const title: HTMLInputElement = (event.target as any)['0']
			const desc: HTMLTextAreaElement = (event.target as any)['1']
			if (title && desc) {
				if (title.value && desc.value) {
					try {
						dispatchAddCard(new Card(title.value, desc.value))
					} catch (e) {
						console.error(e)
					}
				} else {
					console.error('title or desc cannot be empty')
				}
			}
		}
	}

	return (
		<div class="modal" id="add-card-modal" >
			<div class="content" id="add-card-content">
				<div class="header" id="add-card-header" >
					<h2>Add Card</h2>
				</div>
				<div class="body" id="add-card-body" >
					<form onSubmit={addCard}>
						<h2>Title</h2>
						<input id="add-card-title-input"></input>
						<h2>Description</h2>
						<textarea id="add-card-desc-textarea"></textarea>
						<button type="submit">Submit</button>
					</form>
				</div>
				<div class="footer" id="add-card-footer" >
					<button onClick={closeModal}>Cancel</button>
				</div>
			</div>
		</div>
	)
}

export default AddCardModal