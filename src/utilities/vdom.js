export function h(node, attributes, ...args) {
	let vnode = { node }
	if (attributes) vnode.attributes = attributes
	if (args.length) vnode.children = [].concat(...args)
	return vnode
}

export function render(vnode) {
	if (!vnode) return null
	if (typeof vnode==="string") return document.createTextNode(vnode)
	if (vnode.node instanceof Function) return render(vnode.node(vnode.attributes))
	let n = document.createElement(vnode.node)
	Object.keys(vnode.attributes || {}).forEach( k => {
		events[k]
			? n.addEventListener(events[k], vnode.attributes[k])
			: n.setAttribute(k, vnode.attributes[k])
	});
	(vnode.children || []).forEach( c => {
		const r = render(c)
		if (r) n.appendChild(r)
	})
	return n
}

const events = {
	onClick: "click"
}