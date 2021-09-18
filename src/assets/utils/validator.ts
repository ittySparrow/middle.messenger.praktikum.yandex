export const NAMEREGEX = new RegExp(/^[A-ZА-Я][a-zA-Zа-яА-Я-]+$/)
export const LOGINREGEX = new RegExp(/^[\w*-]{3,20}$/)
export const EMAILREGEX = new RegExp(/^\S+@\S+\.\S+$/)
export const PHONEREGEX = new RegExp(/^\+?\d{10,15}$/)
export const PASSWORDREGEX = new RegExp(/^((?=.*?[A-Z])(?=.*?[0-9])\S{8,40})\S$/)

const valRegex: Record<string, RegExp> = {
	last_name: NAMEREGEX,
	name: NAMEREGEX,
	email: EMAILREGEX,
	phone: PHONEREGEX,
	password: PASSWORDREGEX,
	login: LOGINREGEX
}

export const formIsValid = (form: HTMLFormElement): boolean => {
	const inputs = form.querySelectorAll('input')
	let valid = true

	inputs.forEach((input) => {
		if (!inputIsValid(input)) {
			valid = false
		}
	})

	return valid
}

export const inputIsValid = (input: HTMLInputElement): boolean => {
	const type = input.id
	const value = input.value
	const regex = valRegex[type]

	if (regex && !regex.test(value)) {
		input.previousElementSibling?.classList.add('_wrong')
		input.classList.add('_wrong')
		return false
	}

	return true
}
