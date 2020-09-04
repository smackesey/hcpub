const base = require('@smackesey/tailwind')
const utilities = require('./tailwind/utilities')

const colors = {
  primary: 'indigo',
  secondary: 'teal',
  accent: 'lightGreen',
}

Object.entries(colors).forEach(([k, v]) => {
  base.theme.colors[k] = base.theme.colors[v]
})
base.plugins.push(utilities)

module.exports = base
