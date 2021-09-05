import { getObjValue } from './utils'

export default class Templator {
  TEMP_REGEX: RegExp = /\{\{(.*?)\}\}/
  readonly _template: string

  constructor(template: string) {
    this._template = template
  }

  compile(ctx: object): string {
    return this._compileTemplate(ctx)
  }

  _compileTemplate = (ctx: object): string => {
    let key: RegExpExecArray | null = null

    let tmpl = this._template
    const regExp = this.TEMP_REGEX

    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim()
        const data = getObjValue(ctx, tmplValue)
        tmpl = tmpl.replace(new RegExp(key[0]), data ? data : '')
      }
    }

    return tmpl
  }
}
