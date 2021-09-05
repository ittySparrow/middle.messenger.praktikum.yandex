export const NAMEREGEX = new RegExp(/^[a-Zа-Я ,.'-]+$/)
export const EMAILREGEX = new RegExp(/^\S+@\S+\.\S+$/)
export const PHONEREGEX = new RegExp(/d{7}/)

export const valRegex = {
  last_name: NAMEREGEX,
  display_name: NAMEREGEX,
  name: NAMEREGEX,
  email: EMAILREGEX,
  phone: PHONEREGEX,
}

export const validate = (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input')
  let valid = false

  inputs.forEach((input) => {
    const type = input.id
    const value = input.value
    let regex = valRegex[type]

    return regex.test(value)
  })
}
