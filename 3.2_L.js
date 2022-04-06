// Liskov substitution principle

/* Неверно
class Component {
  render() {
    return `
        <div>Component</div>
        `
  }
}

class HeaderComponent extends Component {
  onInit() {}
}

class FooterComponent extends Component {
  afterInit() {}
}

class HOC extends Component {
  render() {
    throw Error('Render is impossible')
  }

  wrapComponent(component) {
    component.wrapped = true
    return component
  }
}

function renderComponent(component) {
  console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
renderComponent(new HOC())
*/

class Component {
  isComponent = true
}

class ComponentWithTemplate extends Component {
  render() {
    return `
            <div>Component</div>
            `
  }
}

class HigherOrderComponent extends Component {}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  render() {
    throw Error('Render is impossible')
  }

  wrapComponent(component) {
    component.wrapped = true
    return component
  }
}

function renderComponent(component) {
  console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
