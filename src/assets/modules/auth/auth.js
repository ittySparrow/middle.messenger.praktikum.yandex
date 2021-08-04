import Templator from '../../utils/Templator';
import { authTemplate } from './auth.tmpl';
import register from '../register/register';
import messages from '../messages/messages';
import form from '../../utils/form';

export default () => {
  const template = authTemplate();

  window.openRegisterPage = () => {
    register();
  };

  window.openChats = () => {
    messages();
  };

  const data = {
    register: 'Регистрация',
    auth: 'Вход',
    label: {
      login: 'Логин',
      password: 'Пароль',
    },
    button: 'Войти',
    openRegisterPage,
    openChats,
  };

  const tmpl = new Templator(template).compile(data, '.root');
  form();
};
