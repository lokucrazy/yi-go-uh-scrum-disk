/* eslint-disable @typescript-eslint/no-unused-vars */
import { h, VNode } from '../../utilities/vdom'

const AddCardModal = (): VNode => {
	return (
		<div class="modal" id="add-card-modal" >
			<div class="header" id="add-card-header" >
				<h2>Add Card</h2>
			</div>
			<div class="body" id="add-card-body" >
				<form>

				</form>
			</div>
			<div class="footer" id="add-card-footer" >
				<button>+</button>
			</div>
		</div>
	)
}

export default AddCardModal