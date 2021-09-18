import {formIsValid, inputIsValid} from "./validator";

export default (): void => {
	const form: HTMLFormElement | null = document.querySelector('.js-form')

	if (!form) return

	const inputs: NodeListOf<HTMLInputElement> = form.querySelectorAll('input')

	inputs.forEach((el: HTMLInputElement): void => {
		el.addEventListener('focus', (): void => {
			el.previousElementSibling?.classList.add('_focused')
			if (el.classList.contains('_wrong')) {
				el.previousElementSibling?.classList.remove('_wrong')
				el.classList.remove('_wrong');
			}
		})

		el.addEventListener('blur', () => {
			if (!el.value) {
				el.previousElementSibling?.classList.remove('_focused')
			}

			if (!inputIsValid(el)) {
				el.classList.add('_wrong');
				el.previousElementSibling?.classList.add('_wrong')
			}
		})
	})
}

export function onSubmit(cb: () => void): void {
	const form: HTMLFormElement | null = document.querySelector('.js-form')
	if (!form) return


	if (formIsValid(form)) {
		const data: FormData = new FormData(form)
		console.log(...data)

		cb()
	} else {
		return;
	}
}
