import Block from '../../utils/Block'
import Templator from '../../utils/Templator'

export type TLinkProps = {
  el: string
  child: string
  className: string
  onClick: (e?: Event) => any
}

const tmpl = `{{ child }}`

export default class Link extends Block {
  props: TLinkProps

  constructor(props: TLinkProps) {
    super('a', props, props.className)
  }

  render() {
    return new Templator(tmpl).compile(this.props)
  }

  apply(el: string) {
    const element = this.getContent()
    const root = document.querySelector(el)

    if (!element || !root) return

    element.addEventListener('click', this.props.onClick)
    root.appendChild(element)
  }
}
