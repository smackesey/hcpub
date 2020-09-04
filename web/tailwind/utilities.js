module.exports = function ({ addUtilities }) {
  addUtilities({
    '.g-figures': {
      'display': 'grid',
      'grid-template': '1fr / 25% 75%',
    },
  })
}
