export const errorTemplate = () => {
  return `
    <div class="error__container">
      <div class="error__wrapper">
        <h1 class="error__error">{{ error }}</h1>
        <h2 class="error__title">{{ title }}<span class="error__subtitle">{{ subtitle }}</span></h2>
      </div>
    </div>
  `
}
