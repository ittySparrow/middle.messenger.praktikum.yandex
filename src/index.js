import auth from './assets/modules/auth/auth';

export const init = () => {
  auth();
};

window.onload = init;
