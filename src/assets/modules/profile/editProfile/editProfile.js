import Templator from '../../../utils/Templator';
import profile from '../profile';
import { editProfileTemplate } from './editProfile.tmpl';

export default () => {
  const template = editProfileTemplate();

  window.saveChanges = () => {
    profile();
    return false;
  };

  const data = {
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
    saveBtn: 'Сохранить',
    saveChanges,
  };

  const tmpl = new Templator(template).compile(data, '.root');
};
