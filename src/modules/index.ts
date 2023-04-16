import '@app/styles/index.css'

const mapModule = {
	noModule: async () => ({ default: () => console.log('No module loaded') }),
	home: () => import('./home'),
	product: () => import('./product'),
}

type Module = keyof typeof mapModule

class AppModule {
	public static instance: AppModule = new AppModule()

	private constructor() {
		const elements = document.querySelectorAll('[load-module]')
		this.calcMainHeight()
		Array.from(elements).forEach((element) => {
			const module = element.getAttribute('load-module') as Module
			this.loadModule(element, module)
		})
	}

	private calcMainHeight() {
		const mainEl = document.querySelector('body > main') as HTMLElement
		const headerEl = document.querySelector('body > header') as HTMLElement
		const footerEl = document.querySelector('body > footer') as HTMLElement
		mainEl &&
			(mainEl.style.minHeight = `calc(100vh - ${headerEl.clientHeight}px - ${footerEl.clientHeight}px)`)
	}

	private loadModule(element: Element, module: Module) {
		const importModule = mapModule[module] || mapModule.noModule
		importModule().then((module: any) => {
			module && module.default()
		})
	}

	public static getInstance() {
		return this.instance
	}
}
