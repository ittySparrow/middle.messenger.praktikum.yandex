import { getObjValue } from '../utils/utils'

export default class Templator {
  TEMP_REGEX = /\{\{(.*?)\}\}/gi

  constructor(template) {
    this._template = template
  }

  compile(ctx, element) {
    return this._apply(ctx, element)
  }

  _apply = (ctx, element) => {
    const root = document.querySelector(element)
    const tmpl = this._compileTemplate(ctx)
    root.innerHTML = ''

    root.insertAdjacentHTML('beforeend', tmpl)
  }

  _compileTemplate = (ctx) => {
    let tmpl = this._template
    let key = null
    const regExp = this.TEMP_REGEX

    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim()
        const data = getObjValue(ctx, tmplValue)
        const replaceValue =
          typeof data === 'function' ? `${tmplValue}()` : data

        tmpl = tmpl.replace(new RegExp(key[0], 'gi'), replaceValue)
      }
    }

    return tmpl
  }
}
