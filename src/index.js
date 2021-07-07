import { auth } from './components/auth'

export const init = () => {
  auth()
}

window.onload = init
