import Templator from '../../utils/Templator';
import messages from '../messages/messages';
import { error404Template } from './error404.tmpl';

export default () => {
  const template = error404Template();

  window.toMainPage = () => {
    messages();
  };

  const data = {
    error: '404',
    title: 'Страницы не существует',
    toMainPage,
  };

  const tmpl = new Templator(template).compile(data, '.root');
};
