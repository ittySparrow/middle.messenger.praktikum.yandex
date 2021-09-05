import Button, { TBtnProps } from '../../common/components/Button'
import Input, { TInputProps } from '../../common/components/Input'
import Link, { TLinkProps } from '../../common/components/Link'
import form, { onSubmit } from '../../utils/form'
import authInit from '../auth/auth'
import messages from '../messages/messages'
import RegisterPage from './RegisterPage'

type TData = {
  title: string
  className: string
}

const data: TData = {
  title: 'Регистрация',
  className: '_register',
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
    id: 'first-name',
    name: 'Имя',
    value: '',
    type: 'text',
    labelClassName: 'form__label',
    inputClassName: 'form__input',
  },
  {
    el: '.js-input-group',
    id: 'second-name',
    name: 'Фамилия',
    value: '',
    type: 'text',
    labelClassName: 'form__label',
    inputClassName: 'form__input',
  },
  {
    el: '.js-input-group',
    id: 'email',
    name: 'E-mail',
    value: '',
    type: 'email',
    labelClassName: 'form__label',
    inputClassName: 'form__input',
  },
  {
    el: '.js-input-group',
    id: 'tel',
    name: 'Телефон',
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
  {
    el: '.js-input-group',
    id: 'password-confirmation',
    name: 'Пароль (повторно)',
    value: '',
    type: 'password',
    labelClassName: 'form__label',
    inputClassName: 'form__input',
  },
]

const buttons: TBtnProps[] = [
  {
    el: '.js-submit-btn',
    child: 'Зарегистрироваться',
    className: 'btn',
    type: 'submit',
    onClick: (e: Event) => {
      onSubmit()
      messages()
    },
  },
]

const links: TLinkProps[] = [
  {
    el: '.js-link-btn',
    child: 'Вход',
    className: 'link-btn',
    onClick: (e: Event) => {
      authInit()
    },
  },
]

export default () => {
  new RegisterPage(data).apply('.root')
  inputs.forEach((input) =>
    new Input(input, 'form__input-wrapper').apply(input.el)
  )
  buttons.forEach((btn) => new Button(btn).apply(btn.el, btn.type))
  links.forEach((link) => new Link(link).apply(link.el))

  form()
}
