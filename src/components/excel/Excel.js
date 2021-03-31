import {$} from '@core/dom';


export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')

    // {1. that was before
    // const $root = document.createElement('div')
    // $root.classList.add('excel')}

    // Each element of this array is a constructor class - That's why "Component" with big letter.
    this.components = this.components.map((Component) => {
      // {2. that also was before
      // const $el = document.createElement('div')
      // $el.classList.add(Component.className)}

      const $el = $.create('div', Component.className)
      const component = new Component($el)
      // $el.innerHTML = component.toHTML()
      // DEBUG
      // if (component.name) {
      //   window['c' + component.name] = component
      // }
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })

    return $root
  }

  render() {
    // this.$el.insertAdjacentHTML('afterbegin', `<h1>Test</h1>`)
    this.$el.append(this.getRoot())
    
    this.components.forEach((component) => component.init());
  }
}
