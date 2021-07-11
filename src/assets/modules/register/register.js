import Templator from '../../utils/Templator'
import { registerTemplate } from './register.tmpl'
import auth from '../auth/auth'

export default () => {
  const template = registerTemplate()

  window.openAuthPage = () => {
    auth()
  }

  const data = {
    register: 'Регистрация',
    auth: 'Вход',
    button: 'Зарегистрироваться',
    openAuthPage: window.openAuthPage,
    label: {
      login: 'Логин',
      first_name: 'Имя',
      second_name: 'Фамилия',
      email: 'e-mail',
      phone: 'Телефон',
      password: 'Пароль',
      passConfirmation: 'Пароль (повторно)',
    },
  }

  const tmpl = new Templator(template).compile(data, '.root')
}
