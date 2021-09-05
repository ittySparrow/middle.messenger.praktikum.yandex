import Button, { TBtnProps } from '../../../common/components/Button'
import Input, { TInputProps } from '../../../common/components/Input'
import { onSubmit } from '../../../utils/form'
import profile from '../profile'
import EditPage from './EditPage'

type TData = {}

const data: TData = {}

const inputs: TInputProps[] = [
  {
    el: '.js-input-items',
    id: 'oldPassword',
    name: 'Старый пароль',
    value: '',
    type: 'password',
    labelClassName: 'profile__list-item-label',
    inputClassName: 'profile__list-item-value',
  },
  {
    el: '.js-input-items',
    id: 'newPassword',
    name: 'Новый пароль',
    value: '',
    type: 'password',
    labelClassName: 'profile__list-item-label',
    inputClassName: 'profile__list-item-value',
  },
  {
    el: '.js-input-items',
    id: 'newPasswordConfirmation',
    name: 'Новый пароль (повторно)',
    value: '',
    type: 'password',
    labelClassName: 'profile__list-item-label',
    inputClassName: 'profile__list-item-value',
  },
]

const buttons: TBtnProps[] = [
  {
    el: '.js-input-items',
    child: 'Сохранить',
    className: 'btn',
    type: 'submit',
    onClick: () => {
      onSubmit()
      profile()
    },
  },
]

export default () => {
  new EditPage(data).apply('.root')
  inputs.forEach((input) =>
    new Input(input, 'profile__list-items').apply(input.el)
  )

  buttons.forEach((btn) => new Button(btn).apply(btn.el, btn.type))
}
