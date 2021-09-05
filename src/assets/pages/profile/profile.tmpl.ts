import { TTemplate } from '../../utils/types'

export const profileTemplate: TTemplate = `
    <div class="profile__wrapper">

      <div class="profile__main">

        <div class="profile__left-group">
          <img src="{{ avatar }}" class="profile__user-image"></img>
          <div class="profile__username">{{ display_name.value }}</div>
        </div>

        <div class="profile__center-group">
          <dl class="profile__list js-profile-info"></dl>
          
          <div class="profile__edit-group js-edit-btns"></div>
        </div>

      </div>

      <div class="profile__buttons-group js-main-btns"></div>

    </div>
  `
