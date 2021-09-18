import Block from '../../../utils/Block'
import Templator from '../../../utils/Templator'
import { editPageTemplate } from './edit.tmpl'

type TProps = {
	avatar?: string
}

export default class EditPage extends Block {
	constructor(props: TProps, className = 'container-main') {
		super('div', props, className)
	}

	render(): string {
		return new Templator(editPageTemplate).compile(this.props)
	}

	apply(el: string): void {
		const root = document.querySelector(el)
		const element = this.getContent()

		if (!element || !root) return

		root.innerHTML = ''
		root.appendChild(element)
	}
}
