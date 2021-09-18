import { TTemplate } from '../../utils/types'

export const registerTemplate: TTemplate = `
    <form class="form js-form {{ className }}">

      <nav class="form__nav">
        <div class="form__nav-btn js-link-btn"></div>
        <div class="form__nav-title">{{ title }}</div>
      </nav>

      <div class="form__input-group js-input-group"></div>

      <div class="js-submit-btn"></div>
    </form>
  `
