export const registerTemplate = () => {
  return `
  <div class="container">
    <form class="form _register">
      <nav class="form__nav">
        <div class="form__nav-btn" onclick="{{openAuthPage}}">{{ auth }}</div>
        <div class="form__nav-title">{{ register }}</div>
      </nav>

      <div class="form__input-group">

        <div class="form__input-wrapper">
          <input type="text" class="form__input" placeholder="{{ label.login }}">
        </div>

        <div class="form__input-wrapper">
          <input type="text" class="form__input" placeholder="{{ label.first_name }}">
        </div>
        
        <div class="form__input-wrapper">
          <input type="text" class="form__input" placeholder="{{ label.second_name }}">
        </div>
        
        <div class="form__input-wrapper">
          <input type="email" class="form__input" placeholder="{{ label.email }}">
        </div>
        
        <div class="form__input-wrapper">
          <input type="text" class="form__input" placeholder="{{ label.phone }}">
        </div>
        
        <div class="form__input-wrapper">
          <input type="password" class="form__input" placeholder="{{ label.password }}">
        </div>
        
        <div class="form__input-wrapper">
          <input type="password" class="form__input" id="password-confirmation" placeholder="{{ label.passConfirmation }}">
        </div>

      </div>
      <button class="btn" type="button" onclick="">{{ button }}</button>
      
    </form>
  </div>
  `
}
