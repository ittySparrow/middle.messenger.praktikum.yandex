import Block from '../../utils/Block'
import Templator from '../../utils/Templator'
import { messagesTemplate } from './messages.tmpl'

type TProps = {
  noUserMessage: string
}

export default class MessagesPage extends Block {
  constructor(props: TProps, className: string = 'container-main') {
    super('div', props, className)
  }

  render() {
    return new Templator(messagesTemplate).compile(this.props)
  }

  apply(el: string) {
    const root = document.querySelector(el)
    const element = this.getContent()

    if (!element || !root) return

    root.innerHTML = ''
    root.appendChild(element)
  }
}
