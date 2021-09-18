import ErrorPage from './ErrorPage'

type TData = {
	error: string
	title: string
	subtitle: string
}

const data: TData = {
	error: '500',
	title: 'Мы сломаны',
	subtitle: '(но не сломлены)',
}

export default (): void => {
	new ErrorPage(data).apply('.root')
}
