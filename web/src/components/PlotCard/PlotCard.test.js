import { render } from '@redwoodjs/testing'

import PlotCard from './PlotCard'

describe('PlotCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlotCard />)
    }).not.toThrow()
  })
})
