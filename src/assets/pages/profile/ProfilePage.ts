import Block from '../../utils/Block'
import Templator from '../../utils/Templator'
import { profileTemplate } from './profile.tmpl'

type TProps = {
	display_name: string
	avatar: string
}

export default class ProfilePage extends Block {
	constructor(props: TProps, className = 'container-main') {
		super('div', props, className)
	}

	render(): string {
		return new Templator(profileTemplate).compile(this.props)
	}

	apply(el: string): void {
		const root = document.querySelector(el)
		const element = this.getContent()

		if (!element || !root) return

		root.innerHTML = ''
		root.appendChild(element)
	}
}
