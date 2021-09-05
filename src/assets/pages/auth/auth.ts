import Button, { TBtnProps } from '../../common/components/Button'
import Input, { TInputProps } from '../../common/components/Input'
import Link, { TLinkProps } from '../../common/components/Link'
import form, { onSubmit } from '../../utils/form'
import messages from '../messages/messages'
import registerInit from '../register/register'
import AuthPage from './AuthPage'

type TData = {
  title: string
  className: string
}

const data: TData = {
  title: 'Вход',
  className: '_auth',
}

const inputs: TInputProps[] = [
  {
    el: '.js-input-group',
    id: 'login',
    name: 'Логин',
    value: '',
    type: 'text',
    labelClassName: 'form__label',
    inputClassName: 'form__input',
  },
  {
    el: '.js-input-group',
    id: 'password',
    name: 'Пароль',
    value: '',
    type: 'password',
    labelClassName: 'form__label',
    inputClassName: 'form__input',
  },
]

const links: TLinkProps[] = [
  {
    el: '.js-link-btn',
    child: 'Регистрация',
    className: 'link-btn',
    onClick: (e: Event) => {
      registerInit()
    },
  },
]

const buttons: TBtnProps[] = [
  {
    el: '.js-submit-btn',
    child: 'Войти',
    className: 'btn',
    type: 'submit',
    onClick: (e: Event) => {
      onSubmit()
      messages()
    },
  },
]

export default () => {
  new AuthPage(data).apply('.root')
  inputs.forEach((input) =>
    new Input(input, 'form__input-wrapper').apply(input.el)
  )
  buttons.forEach((btn) => new Button(btn).apply(btn.el, btn.type))
  links.forEach((link) => new Link(link).apply(link.el))

  form()
}
