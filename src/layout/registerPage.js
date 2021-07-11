export const registerPage = () => {
  return `
    <form class="login-form">
      <nav>
        <div class="login-form__title">{{ title.register }}</div>
        <button class="login-form__redirect _auth">{{ title.auth }}</button>
      </nav>

      <div class="login-form__input-group">

        <div class="login-form__input-wrapper">
          <label for="login">{{ label.register.login }}</label>
          <input type="text" class="login-form__input" id="login">
        </div>

        <div class="login-form__input-wrapper">
          <label for="name">{{ label.register.name }}</label>
          <input type="text" class="login-form__input" id="name">
        </div>
        
        <div class="login-form__input-wrapper">
          <label for="full-name">{{ label.register.fullName }}</label>
          <input type="text" class="login-form__input" id="full-name">
        </div>
        
        <div class="login-form__input-wrapper">
          <label for="email">{{ label.register.email }}</label>
          <input type="email" class="login-form__input" id="email">
        </div>
        
        <div class="login-form__input-wrapper">
          <label for="phone">{{ label.register.tel }}</label>
          <input type="text" class="login-form__input" id="tel">
        </div>
        
        <div class="login-form__input-wrapper">
          <label for="password">{{ label.register.password }}</label>
          <input type="password" class="login-form__input" id="password">
        </div>
        
        <div class="login-form__input-wrapper">
          <label for="password-confirmation">{{ label.register.passConfirmation }}</label>
          <input type="password" class="login-form__input" id="password-confirmation">
        </div>

      </div>
      <button type="submit">{{ button.register.text }}</button>
      
    </form>
  `
}
