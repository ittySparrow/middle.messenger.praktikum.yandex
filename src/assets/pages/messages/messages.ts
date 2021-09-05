import Button, { TBtnProps } from '../../common/components/Button'
import profile from '../profile/profile'
import UserInfo, { TUserListItemProps } from './UserListItem'
import MessagesPage from './MessagesPage'

type TData = {
  noUserMessage: string
}

const data: TData = {
  noUserMessage: 'С кем бы вам хотелось поболтать?',
}

const buttons: TBtnProps[] = [
  {
    el: '.js-profile-btn',
    child: 'Настройки профиля',
    className: 'messages__profile',
    type: 'button',
    onClick: () => profile(),
  },
]

const users: TUserListItemProps[] = [
  {
    id: '',
    img_url: '',
    userName: 'Имя пользователя',
    lastMessage:
      'Сообщение, отправленное последним, очень длинное, никуда в здравом уме не влезающее',
  },
  {
    id: '',
    img_url: '',
    userName: 'Имя пользователя',
    lastMessage: 'Сообщение, отправленное последним',
  },
  {
    id: '',
    img_url: '',
    userName: 'Имя пользователя',
    lastMessage: 'Сообщение, отправленное последним',
  },
  {
    id: '',
    img_url: '',
    userName: 'Имя пользователя',
    lastMessage: 'Сообщение, отправленное последним',
  },
  {
    id: '',
    img_url: '',
    userName: 'Имя пользователя',
    lastMessage: 'Сообщение, отправленное последним',
  },
  {
    id: '',
    img_url: '',
    userName: 'Имя пользователя',
    lastMessage: 'Сообщение, отправленное последним',
  },
  {
    id: '',
    img_url: '',
    userName: 'Имя пользователя',
    lastMessage: 'Сообщение, отправленное последним',
  },
  {
    id: '',
    img_url: '',
    userName: 'Имя пользователя',
    lastMessage: 'Сообщение, отправленное последним',
  },
  {
    id: '',
    img_url: '',
    userName: 'Имя пользователя',
    lastMessage: 'Сообщение, отправленное последним',
  },
  {
    id: '',
    img_url: '',
    userName: 'Имя пользователя',
    lastMessage: 'Сообщение, отправленное последним',
  },
]

export default () => {
  new MessagesPage(data).apply('.root')
  buttons.forEach((btn) => new Button(btn).apply(btn.el, btn.type))
  users.forEach((user) => new UserInfo(user).apply('.js-users'))
}
