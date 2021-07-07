export const authPage = () => {
  return `
    <form class="login-form">
      <nav>
        <div class="login-form__title">{{ title.auth }}</div>
        <button class="login-form__redirect">{{ title.register }}</button>
      </nav>

      <div class="login-form__input-group">

        <div class="login-form__input-wrapper">
          <label for="name">{{ label.auth.login }}</label>
          <input type="text" class="login-form__input" id="name">
        </div>

        <div class="login-form__input-wrapper">
          <label for="password">{{ label.auth.password }}</label>
          <input type="password" class="login-form__input" id="password">
        </div>

      </div>
      <button type="submit">{{ button.auth.text }}</button>
      
    </form>
  `
}
