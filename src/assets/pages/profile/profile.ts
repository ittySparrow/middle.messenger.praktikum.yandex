import Button, { TBtnProps } from '../../common/components/Button'
import messages from '../messages/messages'
import authPage from '../auth/auth'
import editPassword from './editPage/editPassword'
import editProfileInfo from './editPage/editProfileInfo'
import InfoItem, { TListItemProps } from '../../common/components/ListItem'
import ProfilePage from './ProfilePage'
import Link, { TLinkProps } from '../../common/components/Link'

type TData = {
  display_name: string
  avatar: string
}

const data: TData = {
  display_name: '',
  avatar: 'https://bigpicture.ru/wp-content/uploads/2014/02/wetcats01.jpg',
}

const infoItems: TListItemProps[] = [
  {
    id: 'login',
    label: 'Логин',
    value: 'ТемныйВластелин',
    labelClassName: 'profile__list-item-label',
    valueClassName: 'profile__list-item-value',
  },
  {
    id: 'first_name',
    label: 'Имя',
    value: 'Сергей',
    labelClassName: 'profile__list-item-label',
    valueClassName: 'profile__list-item-value',
  },
  {
    id: 'second_name',
    label: 'Фамилия',
    value: 'Пушкин',
    labelClassName: 'profile__list-item-label',
    valueClassName: 'profile__list-item-value',
  },
  {
    id: 'display_name',
    label: 'Имя в чате',
    value: 'The Doctor',
    labelClassName: 'profile__list-item-label',
    valueClassName: 'profile__list-item-value',
  },
  {
    id: 'email',
    label: 'E-mail',
    value: 'spushkin@mail.ru',
    labelClassName: 'profile__list-item-label',
    valueClassName: 'profile__list-item-value',
  },
  {
    id: 'phone',
    label: 'Телефон',
    value: '+79090909090',
    labelClassName: 'profile__list-item-label',
    valueClassName: 'profile__list-item-value',
  },
]

const buttons: TBtnProps[] = [
  {
    el: '.js-main-btns',
    child: 'К чатам',
    className: 'profile__button',
    onClick: () => messages(),
  },
  {
    el: '.js-main-btns',
    child: 'Выйти',
    className: 'profile__button',
    onClick: () => authPage(),
  },
]

const links: TLinkProps[] = [
  {
    el: '.js-edit-btns',
    child: 'Изменить профиль',
    className: 'profile__edit-item',
    onClick: () => editProfileInfo(),
  },
  {
    el: '.js-edit-btns',
    child: 'Изменить пароль',
    className: 'profile__edit-item',
    onClick: () => editPassword(),
  },
]

export default () => {
  new ProfilePage(data).apply('.root')

  infoItems.forEach((item) => new InfoItem(item).apply('.js-profile-info'))
  buttons.forEach((btn) => new Button(btn).apply(btn.el))
  links.forEach((link) => new Link(link).apply(link.el))
}
