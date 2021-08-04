export const editProfileTemplate = () => {
  return `
  <div class="container _profile _edit">
    <div class="profile__wrapper">

      <form class="profile__main _form">

          <div class="profile__left-group">
            <img src="{{ avatar }}" class="profile__user-image">
            <div class="profile__username">{{ display_name.value }}</div>
          </div>

          <div class="profile__center-group">
            
              <div class="profile__list-items">
                <label for="login" class="profile__list-item-label">{{ login.label }}</label>
                <input type="text" id="login" class="profile__list-item-value" value="{{ login.value }}">
              </div>

              <div class="profile__list-items">
                <label for="first-name" class="profile__list-item-label">{{ first_name.label }}</label>
                <input type="text" id="first-name" class="profile__list-item-value" value="{{ first_name.value }}">
              </div>
              
              <div class="profile__list-items">
                <label for="second-name" class="profile__list-item-label">{{ second_name.label }}</label>
                <input type="text" id="second-name" class="profile__list-item-value" value="{{ second_name.value }}">
              </div>

              <div class="profile__list-items">
                <label for="display-name" class="profile__list-item-label">{{ display_name.label }}</label>
                <input type="text" id="display-name" class="profile__list-item-value" value="{{ display_name.value }}">
              </div>

              <div class="profile__list-items">
                <label for="email" class="profile__list-item-label">{{ email.label }}</label>
                <input type="email" id="email" class="profile__list-item-value" value="{{ email.value }}">
              </div>

              <div class="profile__list-items">
                <label for="phone" class="profile__list-item-label">{{ phone.label }}</label>
                <input type="phone" id="email" class="profile__list-item-value" value="{{ phone.value }}">
              </div>

              <button type="submit" class="btn" onclick="{{ saveChanges }}">{{ saveBtn }}</button>


          </div>
          
        </form>
    </div>
  </div>
  `;
};
