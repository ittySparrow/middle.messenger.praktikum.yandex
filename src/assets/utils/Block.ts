import { EventBus } from './EventBus'

type TMeta = {
  tagName: string
  className?: string
  props: Object
}

export default class Block {
  _element: HTMLElement | null = null
  _meta: TMeta | null = null
  props: Object
  eventBus: () => EventBus

  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  }

  constructor(tagName: string = 'div', props: Object = {}, className?: string) {
    const eventBus = new EventBus()
    this._meta = {
      tagName,
      props,
      className,
    }

    this.props = this._makePropsProxy(props)

    this.eventBus = () => eventBus

    this._registerEvents(eventBus)
    eventBus.emit(Block.EVENTS.INIT)
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  _createResources(): void {
    if (!this._meta) return

    const { tagName, className } = this._meta
    this._element = this._createDocumentElement(tagName)
    if (className) {
      this._element.classList.add(className)
    }
  }

  init(): void {
    this._createResources()
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
  }

  _componentDidMount(): void {
    this.componentDidMount()
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidMount(oldProps?: Object): any {}

  _componentDidUpdate(oldProps: Object, newProps: Object) {
    const response = this.componentDidUpdate(oldProps, newProps)
    if (!response) {
      return
    }
    this._render()
  }

  componentDidUpdate(oldProps: Object, newProps: Object) {
    return true
  }

  setProps = (nextProps?: Object) => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  get element() {
    return this._element
  }

  _render() {
    const block = this.render()

    if (!this._element) return
    this._element.innerHTML = block
  }

  render(): any {}

  getContent(): HTMLElement | null {
    return this.element
  }

  _makePropsProxy(props: Object) {
    const self = this

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set(target, prop, val) {
        target[prop] = val

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target)
        return true
      },
      deleteProperty() {
        throw new Error('Нет доступа')
      },
    })
  }

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName)
  }

  show() {
    const content = this.getContent()

    if (!content) return
    content.style.display = 'block'
  }

  hide() {
    const content = this.getContent()

    if (!content) return
    content.style.display = 'none'
  }
}
