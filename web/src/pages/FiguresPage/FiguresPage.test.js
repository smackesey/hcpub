import { render } from '@redwoodjs/testing'

import FiguresPage from './FiguresPage'

describe('FiguresPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FiguresPage />)
    }).not.toThrow()
  })
})
