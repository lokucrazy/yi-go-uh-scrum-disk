import { events } from './events'

export interface VNode {
	node: string | Function
	attributes: any
	children: (VNode)[]
}

export function h(node: string | Function, attributes: any, ...args: (VNode)[]): VNode {
	const vnode: VNode = {} as VNode
	vnode.node = node
	if (attributes) vnode.attributes = attributes
	if (args.length) vnode.children = [].concat(...args)
	return vnode
}

export function render(vnode: VNode): Text | HTMLElement {
	if (!vnode) return null
	if (typeof vnode==='string') return document.createTextNode(vnode)
	if (vnode.node instanceof Function) return render(vnode.node(vnode.attributes))
	const n = document.createElement(vnode.node)
	Object.keys(vnode.attributes || {}).forEach((k: string) => {
		events[k]
			? n.addEventListener(events[k], vnode.attributes[k])
			: n.setAttribute(k, vnode.attributes[k])
	});
	(vnode.children || []).forEach((c: VNode) => {
		const r = render(c)
		if (r) n.appendChild(r)
	})
	return n
}