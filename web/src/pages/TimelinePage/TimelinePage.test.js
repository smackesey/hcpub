import { render } from '@redwoodjs/testing'

import TimelinePage from './TimelinePage'

describe('TimelinePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TimelinePage />)
    }).not.toThrow()
  })
})
