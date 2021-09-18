import { EventBus } from './EventBus'

type TMeta = {
	tagName: string
	className?: string
	props: Record<string, unknown>
}

export default class Block {
	_element: HTMLElement | null = null
	_meta: TMeta | null = null
	props: Record<string, unknown>
	eventBus: () => EventBus

	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render',
	}

	constructor(
		tagName = 'div',
		props: Record<string, unknown> = {},
		className?: string
	) {
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

	_registerEvents(eventBus: EventBus): void {
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

	componentDidMount(): void {
		//
	}

	_componentDidUpdate(
		oldProps: Record<string, unknown>,
		newProps: Record<string, unknown>
	): void {
		const response = this.componentDidUpdate(oldProps, newProps)
		if (!response) {
			return
		}
		this._render()
	}

	componentDidUpdate(
		oldProps: Record<string, unknown>,
		newProps: Record<string, unknown>
	): boolean {
		return (JSON.stringify(oldProps) !== JSON.stringify(newProps))
	}

	setProps = (nextProps?: Record<string, unknown>): void => {
		if (!nextProps) {
			return
		}

		Object.assign(this.props, nextProps)
	}

	get element(): HTMLElement | null {
		return this._element
	}

	_render(): void {
		const block = this.render()

		if (!this._element) return
		this._element.innerHTML = block
	}

	render(): string {
		return ''
	}

	getContent(): HTMLElement | null {
		return this.element
	}

	_makePropsProxy(
		props: Record<string | symbol, unknown>
	): Record<string | symbol, unknown> {
		return new Proxy(props, {
			get(target, prop) {
				const value = typeof prop === 'symbol' ? target.prop : target[prop]
				return typeof value === 'function' ? value.bind(target) : value
			},
			set: (target, prop, val) => {
				typeof prop === 'symbol' ? target.prop = val: target[prop] =val

				this.eventBus().emit(
					Block.EVENTS.FLOW_CDU,
					{ ...target },
					target
				)
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

	show(): void {
		const content = this.getContent()

		if (!content) return
		content.style.display = 'block'
	}

	hide(): void {
		const content = this.getContent()

		if (!content) return
		content.style.display = 'none'
	}
}
