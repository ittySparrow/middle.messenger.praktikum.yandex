export const profileTemplate = () => {
  return `
  <div class="container _profile">
    <div class="profile__wrapper">

      <div class="profile__main">

        <div class="profile__left-group">
          <img src="{{ avatar }}" class="profile__user-image"></img>
          <div class="profile__username">{{ display_name.value }}</div>
        </div>

        <div class="profile__center-group">
          <dl class="profile__list">

            <div class="profile__list-items">
              <dt class="profile__list-item-label">{{ login.label }}</dt>
              <dd class="profile__list-item-value">{{ login.value }}</dd>
            </div>

            <div class="profile__list-items">
              <dt class="profile__list-item-label">{{ first_name.label }}</dt>
              <dd class="profile__list-item-value">{{ first_name.value }}</dd>
            </div>

            <div class="profile__list-items">
              <dt class="profile__list-item-label">{{ second_name.label }}</dt>
              <dd class="profile__list-item-value">{{ second_name.value }}</dd>
            </div>

            <div class="profile__list-items">
              <dt class="profile__list-item-label">{{ display_name.label }}</dt>
              <dd class="profile__list-item-value">{{ display_name.value }}</dd>
            </div>

            <div class="profile__list-items">
              <dt class="profile__list-item-label">{{ email.label }}</dt>
              <dd class="profile__list-item-value">{{ email.value }}</dd>
            </div>

            <div class="profile__list-items">
              <dt class="profile__list-item-label">{{ phone.label }}</dt>
              <dd class="profile__list-item-value">{{ phone.value }}</dd>
            </div>

          </dl>
          
          <div class="profile__edit-group">
            <button class="profile__edit-item" onclick="{{ openEditProfilePage }}">{{ changeProfile }}</button>
            <button class="profile__edit-item" onclick="{{ openEditPasswordPage }}">{{ changePassword }}</button>
          </div>

        </div>

      </div>

      <div class="profile__buttons-group">
        <button class="profile__button btn" onclick="{{ openChats }}">{{ back }}</button>
        <button class="profile__button _exit btn" onclick="{{ openAuthPage }}">{{ exit }}</button>
      </div>

    </div>
  </div>
  `;
};
