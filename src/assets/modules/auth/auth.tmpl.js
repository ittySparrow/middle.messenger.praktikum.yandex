export const authTemplate = () => {
  return `
    <div class="container">
      <form class="form _auth">
        <nav class="form__nav">
          <div class="form__nav-btn _register" onclick="{{openRegisterPage}}">{{ register }}</div>
          <div class="form__nav-title">{{ auth }}</div>
        </nav>

        <div class="form__input-group">

          <div class="form__input-wrapper">
            <input type="text" class="form__input" placeholder="{{ label.login }}">
          </div>

          <div class="form__input-wrapper">
            <input type="password" class="form__input" placeholder="{{ label.password }}">
          </div>

        </div>
        <button type="button" class="btn" onclick="{{openChats}}">{{ button }}</button>
      </form>
    </div>
  `
}
