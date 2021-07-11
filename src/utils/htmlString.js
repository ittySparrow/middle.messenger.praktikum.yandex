const tagGroupREGEX = /'(<.*[^<]>)\1'/gi
const attrREGEX = /'\w*(?=[=])'/gi
const attrValueREGEX = /'\w*(?=[=])'/gi

const extractTagGroup = (string) => {
  return string.match(tagGroupREGEX)[0]
}

const extractTagName = (string) => {
  return string.replace(/'^[<]'/, '').split(' ')[0]
}

const extractAttributes = (string) => {
  const attr = string.match(attrREGEX)
  if (!attr) return

  const result = {}
  const values = string.match(attrValueREGEX)

  for (let index in attr) {
    result.attr[index] = values[index]
  }

  return result
}
