export const errorTemplate = () => {
  return `
    <div class="error__container">
      <div class="error__wrapper">
        <div class="error__error">{{ error }}</div>
        <div class="error__title">{{ title }}<span class="error__subtitle">{{ subtitle }}</span></div>
      </div>
    </div>
  `
}
