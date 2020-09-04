import { render } from '@redwoodjs/testing'

import GridLabel from './GridLabel'

describe('GridLabel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GridLabel />)
    }).not.toThrow()
  })
})
