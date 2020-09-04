import { render } from '@redwoodjs/testing'

import FiguresLayout from './FiguresLayout'

describe('FiguresLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FiguresLayout />)
    }).not.toThrow()
  })
})
