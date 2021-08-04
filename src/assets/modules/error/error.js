import Templator from '../../utils/Templator'
import { errorTemplate } from './error.tmpl'

export default () => {
  const template = errorTemplate()

  const data = {
    error: '500',
    title: 'Мы сломаны',
    subtitle: '(но не сломлены)',
  }

  const tmpl = new Templator(template).compile(data, '.root')
}
