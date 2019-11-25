import { Card } from '../models'

export const ADD_TO_DECK = 'ADD_TO_DECK'
export const SEND_TO_GRAVEYARD = 'SEND_TO_GRAVEYARD'
export const DRAW_CARD = 'DRAW_CARD'
export const DRAW_2_CARDS = 'DRAW_2_CARDS'
export const MOVE_CARD = 'MOVE_CARD'

export interface AddCardAction {
	type: string
	card: Card
}
export interface SendGraveyardAction {
	type: string
	slot: string
}
export interface DrawCardAction {
	type: string
}
export interface Draw2CardsAction {
	type: string
}
export interface MoveCardAction {
	type: string
	slot: string
	nextSlot: string
}
	
export function addCardToDeck(card: Card): AddCardAction {
	if (card === undefined || !(card instanceof Card)) {
		return null
	}
	return {
		type: ADD_TO_DECK,
		card
	}
}
export function sendCardToGraveyard(slot: string): SendGraveyardAction {
	if (slot === undefined || typeof slot !== 'string') {
		return null
	}
	return {
		type: SEND_TO_GRAVEYARD,
		slot
	}
}
export function drawCard(): DrawCardAction {
	return {
		type: DRAW_CARD
	}
}
export function draw2Cards(): Draw2CardsAction {
	return {
		type: DRAW_2_CARDS
	}
}
export function moveCard(slot: string, nextSlot: string): MoveCardAction {
	if (slot === undefined || typeof slot !== 'string') {
		return null
	}
	if (nextSlot === undefined || typeof nextSlot !== 'string') {
		return null
	}
	return {
		type: MOVE_CARD,
		slot,
		nextSlot
	}
}