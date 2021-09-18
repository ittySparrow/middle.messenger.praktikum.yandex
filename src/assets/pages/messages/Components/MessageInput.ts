import Block from '../../../utils/Block'
import Templator from '../../../utils/Templator'

export type TMessageInputProps = {
	onSubmit: (e?: Event) => void
}

const tmpl = `
  <div class="messages__message-input">
  	<textarea class="messages__textarea"></textarea>
  </div>`

export default class MessageInput extends Block {
	props: TMessageInputProps

	constructor(props: TMessageInputProps) {
		super('div', props, 'messages__message-input-wrapper')
	}

	render(): string {
		return new Templator(tmpl).compile(this.props)
	}

	apply(el: string): void {
		const element = this.getContent()
		const root = document.querySelector(el)

		if (!element || !root) return

		element.addEventListener('click', this.props.onSubmit)
		root.appendChild(element)
	}
}
