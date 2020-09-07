import { render } from '@redwoodjs/testing'

import FiguresImageTestPage from './FiguresImageTestPage'

describe('FiguresImageTestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FiguresImageTestPage />)
    }).not.toThrow()
  })
})
