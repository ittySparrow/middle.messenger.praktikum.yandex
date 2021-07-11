import auth from './assets/modules/auth/auth'
import profilePage from './assets/modules/profile/profile'
import errorPage from './assets/modules/error/error'

export const init = () => {
  auth()
  // profilePage()
  // errorPage()
}

window.onload = init
