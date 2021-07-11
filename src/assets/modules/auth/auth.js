import Templator from '../../utils/Templator'
import { authTemplate } from './auth.tmpl'
import register from '../register/register'
import messages from '../messages/messages'

export default () => {
  const template = authTemplate()

  window.openRegisterPage = () => {
    register()
  }

  window.openChats = () => {
    messages()
  }

  const data = {
    register: 'Регистрация',
    openRegisterPage: window.openRegisterPage,
    auth: 'Вход',
    label: {
      login: 'Логин',
      password: 'Пароль',
    },
    button: 'Войти',
    openChats: window.openChats,
  }

  const tmpl = new Templator(template).compile(data, '.root')
}
