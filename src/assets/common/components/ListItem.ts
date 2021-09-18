import Block from '../../utils/Block'
import Templator from '../../utils/Templator'

export type TListItemProps = {
	id: string
	label: string
	value: string
	labelClassName: string
	valueClassName: string
}

const tmpl = `
  <dt class="{{ labelClassName }}">{{ label }}</dt>
  <dd class="{{ valueClassName }}">{{ value }}</dd>
  `

export default class ListItem extends Block {
	constructor(props: TListItemProps) {
		super('div', props, 'profile__list-items')
	}

	render(): string {
		return new Templator(tmpl).compile(this.props)
	}

	apply(el: string): void {
		const root = document.querySelector(el)
		const element = this.getContent()

		if (!element || !root) return

		root.appendChild(element)
	}
}
