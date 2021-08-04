export const error404Template = () => {
  return `
    <div class="error__container">
      <div class="error__wrapper">
        <h1 class="error__error">{{ error }}</h1>
        <h2 class="error__title">{{ title }}</h2>
        <button class="error__back" onclick="{{ toMainPage }}"></button>
      </div>
    </div>
  `;
};
