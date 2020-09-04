import { render } from '@redwoodjs/testing'

import NotebooksPage from './NotebooksPage'

describe('NotebooksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotebooksPage />)
    }).not.toThrow()
  })
})
