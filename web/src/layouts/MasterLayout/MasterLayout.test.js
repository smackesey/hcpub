import { render } from '@redwoodjs/testing'

import MasterLayout from './MasterLayout'

describe('MasterLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MasterLayout />)
    }).not.toThrow()
  })
})
