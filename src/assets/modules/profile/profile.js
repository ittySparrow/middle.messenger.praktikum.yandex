import Templator from '../../utils/Templator';
import auth from '../auth/auth';
import editProfile from './editProfile/editProfile';
import messages from '../messages/messages';
import { profileTemplate } from './profile.tmpl';
import editPassword from './editPassword/editPassword';

export default () => {
  const template = profileTemplate();

  window.openAuthPage = () => {
    auth();
  };

  window.openChats = () => {
    messages();
  };

  window.openEditProfilePage = () => {
    editProfile();
  };

  window.openEditPasswordPage = () => {
    editPassword();
  };

  const data = {
    back: 'К чатам',
    exit: 'Выйти',
    openAuthPage,
    openChats,
    openEditProfilePage,
    openEditPasswordPage,
    avatar: 'https://bigpicture.ru/wp-content/uploads/2014/02/wetcats01.jpg',
    login: {
      label: 'Логин',
      value: 'ТемныйВластелин',
    },
    first_name: {
      label: 'Имя',
      value: 'Сергей',
    },
    second_name: {
      label: 'Фамилия',
      value: 'Пушкин',
    },
    display_name: {
      label: 'Имя в чате',
      value: 'The Doctor',
    },
    email: {
      label: 'E-mail',
      value: 'spushkin@mail.ru',
    },
    phone: {
      label: 'Телефон',
      value: '+79090909090',
    },
    changeProfile: 'Изменить профиль',
    changePassword: 'Изменить пароль',
  };

  const tmpl = new Templator(template).compile(data, '.root');
};
