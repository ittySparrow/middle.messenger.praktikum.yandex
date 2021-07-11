export const messagesTemplate = () => {
  return `
  <div class="container _profile">
    <div class="messages__wrapper">
      <nav class="messages__nav">
        <input class="messages__search" placeholder="Поиск..."/>
        <button class="messages__profile btn" onclick="{{openProfile}}">Настройки профиля</button>
      </nav>
      <div class="messages__main">
        <div class="messages__users"></div>
        <div class="messages__message-field"></div>
      </div>
    </div>
  </div>
  `
}
