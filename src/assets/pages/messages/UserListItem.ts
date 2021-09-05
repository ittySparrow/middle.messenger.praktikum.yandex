import Block from '../../utils/Block'
import Templator from '../../utils/Templator'

export type TUserListItemProps = {
  id: string
  img_url: string
  userName: string
  lastMessage: string
}

const tmpl = `
  <img class="messages__user-avatar" src="{{ img_url }}">
  <div class="messages__user-info">
    <div class="messages__user-name">{{ userName }}</div>
    <div class="messages__user-message">{{ lastMessage }}</div>
  </div>
`

export default class UserListItem extends Block {
  props: TUserListItemProps

  constructor(props: TUserListItemProps) {
    super('div', props, 'messages__user')
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
