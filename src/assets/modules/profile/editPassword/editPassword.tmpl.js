export const editPasswordTemplate = () => {
  return `
  <div class="container _profile">
    <div class="profile__wrapper">

      <form class="profile__main _form _password">

          <div class="profile__center-group">
            
              <div class="profile__list-items">
                <label for="password" class="profile__list-item-label">{{ oldPassword.label }}</label>
                <input type="password" id="password" class="profile__list-item-value">
              </div>

              <div class="profile__list-items">
                <label for="new-password" class="profile__list-item-label">{{ newPassword.label }}</label>
                <input type="password" id="new-password" class="profile__list-item-value">
              </div>
              
              <div class="profile__list-items">
                <label for="pass-confirm" class="profile__list-item-label">{{ newPasswordConfirmation.label }}</label>
                <input type="password" id="pass-confirm" class="profile__list-item-value">
              </div>
              
              <button type="submit" class="btn" onclick="{{ saveChanges }}">{{ saveBtn }}</button>
          </div>
          
      </form>

    </div>
  </div>
  `;
};
