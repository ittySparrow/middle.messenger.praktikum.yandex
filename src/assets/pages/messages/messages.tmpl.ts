import { TTemplate } from '../../utils/types'

export const messagesTemplate: TTemplate = `
    <div class="messages__wrapper">

      <nav class="messages__nav js-profile-btn">
        <input class="messages__search" placeholder="Поиск..."/>
      </nav>

      <div class="messages__main">
        <div class="messages__users js-users"></div>
        <div class="messages__message-field">
			<div class="js-messages-field messages__messages-wrapper"></div>
			<div class="js-messages-input messages__input-wrapper"></div>
		</div>
      </div>

    </div>
  `
