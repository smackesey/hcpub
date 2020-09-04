import { render } from '@redwoodjs/testing'

import FiguresInfoScoreOverviewPage from './FiguresInfoScoreOverviewPage'

describe('FiguresInfoScoreOverviewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FiguresInfoScoreOverviewPage />)
    }).not.toThrow()
  })
})
