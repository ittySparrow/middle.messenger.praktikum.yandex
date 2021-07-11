import Templator from '../../utils/Templator'
import auth from '../auth/auth'
import messages from '../messages/messages'
import { profileTemplate } from './profile.tmpl'

export default () => {
  const template = profileTemplate()

  window.openAuthPage = () => {
    auth()
  }

  window.openChats = () => {
    messages()
  }

  const data = {
    back: 'К чатам',
    exit: 'Выйти',
    openAuthPage: window.openAuthPage,
    openChats: window.openChats,
    avatar: '/',
    login: {
      label: 'Логин',
      value: 'логи',
    },
    first_name: {
      label: 'Имя',
      value: 'The Doctor',
    },
    second_name: {
      label: 'Фамилия',
      value: 'фамилия',
    },
    display_name: {
      label: 'Имя в чате',
      value: 'The Doctor',
    },
    email: {
      label: 'E-mail',
      value: 'почта',
    },
    phone: {
      label: 'Телефон',
      value: '+7909090909',
    },
    changeProfile: 'Изменить профиль',
    changePassword: 'Изменить пароль',
  }

  const tmpl = new Templator(template).compile(data, '.root')
}
