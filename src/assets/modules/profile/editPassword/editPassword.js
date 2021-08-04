import Templator from '../../../utils/Templator';
import profile from '../profile';
import { editPasswordTemplate } from './editPassword.tmpl';

export default () => {
  const template = editPasswordTemplate();

  window.saveChanges = () => {
    profile();
    return false;
  };

  const data = {
    oldPassword: {
      label: 'Старый пароль',
      value: 'ТемныйВластелин',
    },
    newPassword: {
      label: 'Новый пароль',
      value: 'Сергей',
    },
    newPasswordConfirmation: {
      label: 'Новый пароль (повторно)',
      value: 'Пушкин',
    },
    saveBtn: 'Изменить',
    saveChanges,
  };

  const tmpl = new Templator(template).compile(data, '.root');
};
