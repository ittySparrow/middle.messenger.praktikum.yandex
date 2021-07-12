export const registerTemplate = () => {
  return `
  <div class="container">
    <form class="form _register js-form">

      <nav class="form__nav">
        <div class="form__nav-btn" onclick="{{ openAuthPage }}">{{ auth }}</div>
        <h1 class="form__nav-title">{{ register }}</h1>
      </nav>

      <div class="form__input-group">

        <div class="form__input-wrapper">
          <label for="login" class="form__label">{{ label.login }}</label>
          <input type="text" id="login" class="form__input" >
        </div>

        <div class="form__input-wrapper">
          <label for="first-name" class="form__label" js-label>{{ label.first_name }}</label>
          <input type="text" id="first-name" class="form__input" >
        </div>
        
        <div class="form__input-wrapper">
          <label for="second-name" class="form__label">{{ label.second_name }}</label>
          <input type="text" id="second-name" class="form__input" >
        </div>
        
        <div class="form__input-wrapper">
          <label for="email" class="form__label">{{ label.email }}</label>
          <input type="email" id="email" class="form__input" >
        </div>
        
        <div class="form__input-wrapper">
          <label for="phone" class="form__label">{{ label.phone }}</label>
          <input type="text" id="phone" class="form__input" >
        </div>
        
        <div class="form__input-wrapper">
          <label for="password" class="form__label">{{ label.password }}</label>
          <input type="password" id="password" class="form__input" >
        </div>
        
        <div class="form__input-wrapper">
          <label for="pass-confirm" class="form__label">{{ label.passConfirmation }}</label>
          <input type="password" id="pass-confirm" class="form__input" >
        </div>

      </div>

      <button class="btn" type="submit" onclick="">{{ button }}</button>
      
    </form>
  </div>
  `;
};
