export const getObjValue = (obj, path, defaultValue = false) => {
  const keys = path.split('.')

  let result = obj
  for (let key of keys) {
    result = result[key]

    if (result === undefined) {
      return defaultValue
    }
  }

  return result ?? defaultValue
}
