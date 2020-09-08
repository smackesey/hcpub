import { render } from '@redwoodjs/testing'

import GridPlaceholder from './GridPlaceholder'

describe('GridPlaceholder', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GridPlaceholder />)
    }).not.toThrow()
  })
})
