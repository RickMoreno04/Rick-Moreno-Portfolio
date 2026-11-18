import { createElement } from 'react'

function Reveal({ children, className = '', as: Component = 'div' }) {
  return createElement(Component, { className }, children)
}

export default Reveal
