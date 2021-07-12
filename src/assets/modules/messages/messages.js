import Templator from '../../utils/Templator';
import { messagesTemplate } from './messages.tmpl';
import profile from '../profile/profile';

export default () => {
  const template = messagesTemplate();

  window.openProfile = () => {
    profile();
  };

  const data = {
    openProfile,
  };

  const tmpl = new Templator(template).compile(data, '.root');
};
