export const authTemplate = () => {
  return `
    <div class="container">
      <form class="form _auth js-form">
        <nav class="form__nav">
          <div class="form__nav-btn _register" onclick="{{ openRegisterPage }}">{{ register }}</div>
          <div class="form__nav-title">{{ auth }}</div>
        </nav>

        <div class="form__input-group">

          <div class="form__input-wrapper">
            <label for="login" class="form__label">{{ label.login }}</label>
            <input type="text" id="login" class="form__input" >
          </div>

          <div class="form__input-wrapper">
            <label for="password" class="form__label">{{ label.password }}</label>
            <input type="password" id="password" class="form__input" >
          </div>

        </div>
        <button type="submit" class="btn" onclick="{{ openChats }}">{{ button }}</button>
      </form>
    </div>
  `;
};
