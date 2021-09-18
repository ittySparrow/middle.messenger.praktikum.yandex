import Block from '../../../utils/Block'
import Templator from '../../../utils/Templator'

export type TMessageItemProps = {
	message: string
	type: string
}

const tmpl = `
  <div class="messages__message-text {{ type }}">{{ message }}</div>`

export default class MessageItem extends Block {
	props: TMessageItemProps

	constructor(props: TMessageItemProps, type: string) {
		super('div', props, `messages__message-${type}`)
	}

	render(): string {
		return new Templator(tmpl).compile(this.props)
	}

	apply(el: string): void {
		const element = this.getContent()
		const root = document.querySelector(el)

		if (!element || !root) return

		root.appendChild(element)
	}
}
