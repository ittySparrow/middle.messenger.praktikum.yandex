import Block from '../../utils/Block'
import Templator from '../../utils/Templator'

export type TInputProps = {
  el: string
  id: string
  name: string
  value: string
  type: String
  labelClassName: string
  inputClassName: string
}

const tmpl = `
  <label for="{{ id }}" class="{{ labelClassName }}">{{ name }}</label>
  <input type="{{ type }}" id="{{ id }}" class="{{ inputClassName }}" name="{{ id }}" value="{{ value }}">
`

export default class Input extends Block {
  props: TInputProps

  constructor(props: TInputProps, className: string) {
    super('div', props, className)
  }

  render() {
    return new Templator(tmpl).compile(this.props)
  }

  apply(el: string) {
    const element = this.getContent()
    const root = document.querySelector(el)

    if (!element || !root) return

    root.appendChild(element)
  }
}
