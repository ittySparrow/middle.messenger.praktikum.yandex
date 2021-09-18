import Button, { TBtnProps } from '../../../common/components/Button'
import Input, { TInputProps } from '../../../common/components/Input'
import profile from '../profile'
import EditPage from './EditPage'
import {onSubmit} from "../../../utils/form";

type TData = {
	avatar: string
}

const data: TData = {
	avatar: 'https://bigpicture.ru/wp-content/uploads/2014/02/wetcats01.jpg',
}

const inputs: TInputProps[] = [
	{
		el: '.js-input-items',
		id: 'login',
		name: 'Логин',
		value: 'ТемныйВластелин',
		type: 'text',
		labelClassName: 'profile__list-item-label',
		inputClassName: 'profile__list-item-value',
	},
	{
		el: '.js-input-items',
		id: 'first_name',
		name: 'Имя',
		value: 'Сергей',
		type: 'text',
		labelClassName: 'profile__list-item-label',
		inputClassName: 'profile__list-item-value',
	},
	{
		el: '.js-input-items',
		id: 'second_name',
		name: 'Фамилия',
		value: 'Пушкин',
		type: 'text',
		labelClassName: 'profile__list-item-label',
		inputClassName: 'profile__list-item-value',
	},
	{
		el: '.js-input-items',
		id: 'display_name',
		name: 'Имя в чате',
		value: 'The Doctor',
		type: 'text',
		labelClassName: 'profile__list-item-label',
		inputClassName: 'profile__list-item-value',
	},
	{
		el: '.js-input-items',
		id: 'email',
		name: 'E-mail',
		value: 'spushkin@mail.ru',
		type: 'email',
		labelClassName: 'profile__list-item-label',
		inputClassName: 'profile__list-item-value',
	},
	{
		el: '.js-input-items',
		id: 'phone',
		name: 'Телефон',
		value: '+79090909090',
		type: 'phone',
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
		onClick: () => onSubmit(profile),
	},
]

export default (): void => {
	new EditPage(data).apply('.root')
	inputs.forEach((input) =>
		new Input(input, 'profile__list-items').apply(input.el)
	)

	buttons.forEach((btn) => new Button(btn).apply(btn.el, btn.type))
}
