import { render } from '@redwoodjs/testing'

import HorizontalGridLabel from './HorizontalGridLabel'

describe('HorizontalGridLabel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HorizontalGridLabel />)
    }).not.toThrow()
  })
})
