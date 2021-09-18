export const getObjValue = (
	obj: Record<string, unknown>,
	path: string,
	defaultValue = false
): unknown => {
	const keys = path.split('.')

	let result: any = obj
	for (const key of keys) {
		result = result[key]

		if (result === undefined) {
			return defaultValue
		}
	}

	return result ?? defaultValue
}
