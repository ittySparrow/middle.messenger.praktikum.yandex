import Block from '../../utils/Block'
import Templator from '../../utils/Templator'
import { authTemplate } from './auth.tmpl'

type TProps = {
	title: string
	className: string
}

export default class AuthPage extends Block {
	constructor(props: TProps, className = 'container') {
		super('div', props, className)
	}

	render(): string {
		return new Templator(authTemplate).compile(this.props)
	}

	apply(el: string): void {
		const root = document.querySelector(el)
		const element = this.getContent()

		if (!element || !root) return

		root.innerHTML = ''
		root.appendChild(element)
	}
}
