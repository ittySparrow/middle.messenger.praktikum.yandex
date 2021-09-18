import Button, { TBtnProps } from '../../common/components/Button'
import profile from '../profile/profile'
import MessageItem, { TMessageItemProps } from './Components/MessagesField'
import UserInfo, { TUserListItemProps } from './Components/UserListItem'
import MessagesPage from './MessagesPage'
import MessageInput, {TMessageInputProps} from "./Components/MessageInput";

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
		lastMessage: 'Сообщение, отправленное последним, очень длинное, никуда в здравом уме не влезающее',
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

const messages: TMessageItemProps[] = [
	{
		message: 'Привет.Как дела ? ',
		type: 'in',
	},
	{
		message: 'Привет. Норм. ',
		type: 'out',
	},
	{
		message: 'Ну класс? ',
		type: 'in',
	},
	{
		message: 'Отлично пообщались',
		type: 'in',
	},
	{
		message: 'Как всегда',
		type: 'out',
	},
]

const messageInput: TMessageInputProps = {
	onSubmit: () => console.log('message sent')
}

export default (): void => {
	new MessagesPage(data).apply('.root')
	buttons.forEach((btn) => new Button(btn).apply(btn.el, btn.type))
	users.forEach((user) => new UserInfo(user).apply('.js-users'))
	messages.forEach((message) => new MessageItem(message, message.type).apply('.js-messages-field'))
	new MessageInput(messageInput).apply('.js-messages-input')
}
