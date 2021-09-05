import Button, { TBtnProps } from '../../common/components/Button'
import authPage from '../auth/auth'
import ErrorPage from './ErrorPage'

type TData = {
  error: string
  title: string
}

const data: TData = {
  error: '404',
  title: 'Страницы не существует',
}

const backBtn: TBtnProps = {
  el: '.js-error-btn',
  child: '',
  className: 'error__back',
  onClick: () => authPage(),
}

export default () => {
  new ErrorPage(data).apply('.root')
  new Button(backBtn).apply(backBtn.el)
}
