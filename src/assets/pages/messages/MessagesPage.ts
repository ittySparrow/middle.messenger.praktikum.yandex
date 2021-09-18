import Block from '../../utils/Block'
import Templator from '../../utils/Templator'
import { messagesTemplate } from './messages.tmpl'

type TProps = {
	noUserMessage: string
}

export default class MessagesPage extends Block {
	constructor(props: TProps, className = 'container-main') {
		super('div', props, className)
	}

	render(): string {
		return new Templator(messagesTemplate).compile(this.props)
	}

	apply(el: string): void {
		const root = document.querySelector(el)
		const element = this.getContent()

		if (!element || !root) return

		root.innerHTML = ''
		root.appendChild(element)
	}
}
