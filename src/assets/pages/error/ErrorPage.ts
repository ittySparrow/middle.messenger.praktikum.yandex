import Block from '../../utils/Block'
import Templator from '../../utils/Templator'
import { errorTemplate } from './error.tmpl'

type TProps = Record<string, unknown>

export default class ErrorPage extends Block {
	_tmpl: string

	constructor(props: TProps, className = 'container') {
		super('div', props, className)
	}

	render(): string {
		return new Templator(errorTemplate).compile(this.props)
	}

	apply(el: string): void {
		const root = document.querySelector(el)
		const element = this.getContent()

		if (!element || !root) return

		root.innerHTML = ''
		root.appendChild(element)
	}
}
