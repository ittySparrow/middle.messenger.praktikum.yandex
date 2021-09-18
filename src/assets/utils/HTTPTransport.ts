const METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
}

function queryStringify(data: Record<string, unknown>): string {
	if (typeof data !== 'object') {
		throw new Error('Data must be object')
	}

	const keys = Object.keys(data)
	return keys.reduce((result, key, index) => {
		return `${result}${key}=${data[key]}${
			index < keys.length - 1 ? '&' : ''
		}`
	}, '?')
}

interface Options {
	timeout: number
	data?: Record<string, unknown>
	headers?: Record<string, string>
}

interface UrlOpt extends Options {
	method: string
}

export class HTTPTransport {
	get = (url: string, options: Options = { timeout: 5000 }) => {
		return this.request(
			url,
			{ ...options, method: METHODS.GET },
			options.timeout
		)
	}

	post = (url: string, options: Options = { timeout: 5000 }) => {
		return this.request(
			url,
			{ ...options, method: METHODS.POST },
			options.timeout
		)
	}

	put = (url: string, options: Options = { timeout: 5000 }) => {
		return this.request(
			url,
			{ ...options, method: METHODS.PUT },
			options.timeout
		)
	}

	delete = (url: string, options: Options = { timeout: 5000 }) => {
		return this.request(
			url,
			{ ...options, method: METHODS.DELETE },
			options.timeout
		)
	}

	request = (url: string, options: UrlOpt, timeout = 5000) => {
		return new Promise(function (resolve, reject) {
			const data = options.data
			const URL =
				!!data && options.method === 'GET'
					? `${url}${queryStringify(data)}`
					: url
			const headers = options.headers

			const xhr = new XMLHttpRequest()

			xhr.open(options.method, URL)
			xhr.timeout = timeout

			xhr.onabort = reject
			xhr.onerror = reject

			xhr.onreadystatechange = function () {
				resolve(xhr)
			}

			xhr.ontimeout = reject

			if (headers) {
				const keys = Object.keys(headers)
				for (const key of keys) {
					xhr.setRequestHeader(key, headers[key])
				}
			}

			if ((options.method !== 'GET' && data) || !!data) {
				xhr.send(queryStringify(data))
			} else {
				xhr.send()
			}
		})
	}
}
