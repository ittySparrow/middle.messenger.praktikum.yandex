import Block from '../../utils/Block'
import Templator from '../../utils/Templator'
import { errorTemplate } from './error.tmpl'

type TProps = {}

export default class ErrorPage extends Block {
  _tmpl: string

  constructor(props: TProps, className: string = 'container') {
    super('div', props, className)
  }

  render() {
    return new Templator(errorTemplate).compile(this.props)
  }

  apply(el: string) {
    const root = document.querySelector(el)
    const element = this.getContent()

    if (!element || !root) return

    root.innerHTML = ''
    root.appendChild(element)
  }
}
