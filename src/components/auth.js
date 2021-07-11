import { Templator } from '../classes/Templator'
import { authPage } from '../layout/authPage'

export const auth = () => {
  const tmpl = new Templator(authPage())
  console.log('INITIALIZED')

  const data = {
    title: {
      register: 'Регистрация',
      auth: 'Вход',
    },
    button: {
      register: {
        text: 'Зарегистрироваться',
        onClick: authRedirect,
      },
      auth: {
        text: 'Войти',
        onClick: registerRedirect,
      },
    },
    label: {
      auth: {
        login: 'Логин',
        password: 'Пароль',
      },
      register: {
        login: 'Логин',
        name: 'Имя',
        fullName: 'Фамилия',
        email: 'e-mail',
        tel: 'Телефон',
        password: 'Пароль',
        passConfirmation: 'Пароль (повторно)',
      },
    },
  }

  const renderedTemplate = tmpl.compile(data, '.root')
}
