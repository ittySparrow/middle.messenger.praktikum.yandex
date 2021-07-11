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
          <div class="profile__list">
            <div class="profile__list-items">
              <div class="profile__list-item-label">{{ login.label }}</div>
              <div class="profile__list-item-value">{{ login.value }}</div>
            </div>
            <div class="profile__list-items">
              <div class="profile__list-item-label">{{ first_name.label }}</div>
              <div class="profile__list-item-value">{{ first_name.value }}</div>
            </div>
            <div class="profile__list-items">
              <div class="profile__list-item-label">{{ second_name.label }}</div>
              <div class="profile__list-item-value">{{ second_name.value }}</div>
            </div>
            <div class="profile__list-items">
              <div class="profile__list-item-label">{{ display_name.label }}</div>
              <div class="profile__list-item-value">{{ display_name.value }}</div>
            </div>
            <div class="profile__list-items">
              <div class="profile__list-item-label">{{ email.label }}</div>
              <div class="profile__list-item-value">{{ email.value }}</div>
            </div>
            <div class="profile__list-items">
              <div class="profile__list-item-label">{{ phone.label }}</div>
              <div class="profile__list-item-value">{{ phone.value }}</div>
            </div>
          </div>
          
          <div class="profile__edit-group">
            <div class="profile__edit-item">{{ changeProfile }}</div>
            <div class="profile__edit-item">{{ changePassword }}</div>
          </div>
        </div>
      </div>
      <div class="profile__buttons-group">
        <button class="profile__button btn" onclick="{{openChats}}">{{ back }}</button>
        <button class="profile__button _exit btn" onclick="{{openAuthPage}}">{{ exit }}</button>
      </div>
    </div>
  </div>
  `
}
