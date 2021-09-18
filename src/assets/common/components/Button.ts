import Block from '../../utils/Block'
import Templator from '../../utils/Templator'

export type TBtnProps = {
	el: string
	child: string
	type: string
	className: string
	onClick: (e?: Event) => void
}

const tmpl = '{{ child }}'

export default class Button extends Block {
	props: TBtnProps

	constructor(props: TBtnProps) {
		super('button', props, props.className)
	}

	render(): string {
		return new Templator(tmpl).compile(this.props)
	}

	apply(el: string, type: string): void {
		const element = this.getContent()
		const root = document.querySelector(el)

		if (!element || !root) return

		element.setAttribute('type', type)

		element.addEventListener('click', this.props.onClick)
		root.appendChild(element)
	}
}
