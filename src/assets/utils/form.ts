export default (): void => {
  const form: HTMLFormElement | null = document.querySelector('.js-form')

  if (!form) return

  const inputs: NodeListOf<HTMLInputElement> = form.querySelectorAll('input')

  inputs.forEach((el: HTMLInputElement): void => {
    el.addEventListener('focus', (): void => {
      el.previousElementSibling?.classList.add('_focused')
    })

    el.addEventListener('blur', () => {
      if (!el.value) {
        el.previousElementSibling?.classList.remove('_focused')
      }
    })
  })
}

export function onSubmit(): void {
  const form: HTMLFormElement | null = document.querySelector('.js-form')
  if (!form) return

  const inputs: NodeListOf<HTMLInputElement> = form.querySelectorAll('input')
  const data: FormData = new FormData(form)

  console.log(...data)
}
