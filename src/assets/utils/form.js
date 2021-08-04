export default () => {
  const form = document.querySelector('.js-form');

  if (!form) return;

  const inputs = form.querySelectorAll('input');

  inputs.forEach((el) => {
    el.addEventListener('focus', () => {
      el.previousElementSibling?.classList.add('_focused');
    });

    el.addEventListener('blur', () => {
      if (!el.value) {
        el.previousElementSibling?.classList.remove('_focused');
      }
    });
  });
};
